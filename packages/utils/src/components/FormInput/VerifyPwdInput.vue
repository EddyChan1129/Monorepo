<template>
  <div>
    <div
      class="form-input"
      :class="isFocus ? 'input-focus' : ''"
      :style="passwordErrors ? { border: incorrectInputBorder } : {}"
      v-bind="$attrs"
    >
      <img :src="logo" />
      <input
        :type="inputType"
        :placeholder="placeholder"
        :required="required"
        :value="modelValue"
        @input="handleInput"
        @focus="isFocus = true"
        @blur="isFocus = false"
      />
      <img
        class="showpassword"
        :src="showpwdLogo"
        alt="account logo"
        @click="showPasssword"
      />
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['modelValue', 'placeholder', 'required', 'logo']);

const emit = defineEmits(['update:modelValue', 'isPasswordError']);
const inputType = ref('password');

const showpwdLogo = ref('/src/assets/input/hidePwd.png');
const passwordErrors = ref(false);
const isFocus = ref(false);
const incorrectInputBorder = '1px solid red';

const handleInput = (event) => {
  emit('update:modelValue', event.target.value);
  validatePassword(event.target.value);
};

const showPasssword = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password';
  showpwdLogo.value =
    inputType.value === 'password'
      ? '/src/assets/input/hidePwd.png'
      : '/src/assets/input/showpassword.png';
};

const validatePassword = (value) => {
  if (value.length === 0) {
    passwordErrors.value = false;
    emit('isPasswordError', passwordErrors.value);
    console.log('Password is empty.');
    return;
  }
  if (
    value.length < 6 ||
    new Set(value).size < 3 ||
    !/[a-zA-Z]/.test(value) ||
    !/\d/.test(value) ||
    /\s/.test(value)
  ) {
    passwordErrors.value = true;
    emit('isPasswordError', passwordErrors.value);
    console.log(
      'Error: Password must be as least 6 characters long and contain no spaces.'
    );
    return;
  }

  // If all checks pass
  passwordErrors.value = false;
  emit('isPasswordError', passwordErrors.value);
  console.log('Password is valid.');
  console.log('passwordErrors:', passwordErrors.value);
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.form-input {
  position: relative;
  margin-bottom: 1rem;
  border-radius: 5px;
  padding-left: 0.8rem;
  background: $InputBg;
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  height: 2.6rem;
  gap: 0.5rem;

  input {
    background: transparent;
    border: none;
  }

  input:focus {
    width: 100%;
    outline: none;
  }

  input::placeholder {
    color: $normalColor;
    font-size: 0.7rem;
    letter-spacing: 0.1rem;
  }

  .phone-location {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .verifyCode {
    position: absolute;
    right: 1rem;
    color: #007bff;
    cursor: pointer;
    font-size: 0.7rem;
  }
  img {
    max-width: 1.2rem;
  }
  .showpassword {
    position: absolute;
    right: 1rem;
    cursor: pointer;
    font-size: 1rem;
  }
}

.input-focus {
  border: 1px solid rgba(10, 92, 255, 1);
}
</style>
