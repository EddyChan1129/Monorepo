<template>
  <div class="form-input" :style="passwordErrors ? 'border:1px solid red' : ''">
    <img src="/images/input/password-logo.png" alt="password logo" />
    <input
      :type="firstInput"
      placeholder="请设置账号密码"
      required
      :value="password"
      @input="handlePasswordInput"
    />
    <img
      class="showpassword"
      :src="showpwdLogo"
      alt="account logo"
      @click="showPasssword"
    />
  </div>

  <div class="remind-messages" :class="passwordErrors ? 'error-messages' : ''">
    至少6个字符，至少3个不同字符，英数字结合，不允许空白格
  </div>

  <div
    class="form-input"
    :style="
      password != repassword && repassword != '' ? 'border:1px solid red' : ''
    "
  >
    <img src="/images/input/password-logo.png" />
    <input
      :type="secondInput"
      placeholder="请再次输入密码"
      required
      :value="repassword"
      @input="handleSecondPasswordInput"
    />
    <img
      class="showpassword"
      :src="showpwdLogo"
      alt="account logo"
      @click="showSecondPasssword"
    />
  </div>
  <div v-if="password != repassword && repassword != ''" class="error-messages">
    两次输入密码不一致
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps(['password', 'repassword', 'required']);

const emit = defineEmits([
  'update:password',
  'update:repassword',
  'isPasswordError',
]);
const firstInput = ref('password');
const secondInput = ref('password');
const showpwdLogo = ref('/images/input/hidePwd.png');
const passwordErrors = ref(false);

const handlePasswordInput = (event: any) => {
  emit('update:password', event.target.value);
  validatePassword(event.target.value);
};

const handleSecondPasswordInput = (event: any) => {
  emit('update:repassword', event.target.value);
  validateSecondPassword(event.target.value);
};

const showPasssword = () => {
  firstInput.value = firstInput.value === 'password' ? 'text' : 'password';
  showpwdLogo.value =
    firstInput.value === 'password'
      ? '/src/assets/input/hidePwd.png'
      : '/src/assets/input/showpassword.png';
};

const showSecondPasssword = () => {
  secondInput.value = secondInput.value === 'password' ? 'text' : 'password';
  showpwdLogo.value =
    secondInput.value === 'password'
      ? '/src/assets/input/hidePwd.png'
      : '/src/assets/input/showpassword.png';
};

const validatePassword = (value: string) => {
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

const validateSecondPassword = (value: string) => {
  if (value !== props.password) {
    passwordErrors.value = true;
    emit('isPasswordError', passwordErrors.value);
    console.log('Error: Passwords do not match.');
  } else {
    passwordErrors.value = false;
    emit('isPasswordError', passwordErrors.value);
    console.log('Passwords match.');
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/formStyle.scss';
</style>
