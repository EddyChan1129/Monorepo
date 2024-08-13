<template>
  <div>
    <div
      class="form-input"
      :class="isFocus ? 'input-focus' : ''"
      :style="modelValue == '123' ? { border: incorrectInputBorder } : {}"
      v-bind="$attrs"
    >
      <img :src="logo" />
      <input
        id="verifyCode"
        :placeholder="placeholder"
        :required="required"
        :value="modelValue"
        @input="handleInput"
        @focus="isFocus = true"
        @blur="isFocus = false"
      />

      <span class="verifyCode" @click="getCode">{{ notice }}</span>
    </div>
  </div>
  <div v-show="modelValue == '123'" class="error-messages">邀请码错误</div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps([
  'modelValue',
  'type',
  'inputFormat',
  'placeholder',
  'required',
  'logo',
]);

const emit = defineEmits([
  'update:modelValue',
  'isAccountError',
  'isPasswordError',
]);
const notice = ref('获取验证码');
const isFocus = ref(false);
const incorrectInputBorder = '1px solid red';

const getCode = () => {
  console.log('get code');
  const input = document.querySelector('#verifyCode');

  //Init notice vlaue = 60second to 1second, if 0second, the notice value = '重新获取'
  let time = 60;
  notice.value = '获取验证码';
  const timer = setInterval(() => {
    time--;
    notice.value = '重新获取验证码' + time + 's';
    if (time === 0) {
      clearInterval(timer);
      notice.value = '获取验证码';
    }
  }, 1000);
};

const handleInput = (event) => {
  emit('update:modelValue', event.target.value);
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

.phone-select {
  height: 5rem;
  position: absolute;
  width: 100%;
  top: 2.5rem;
  left: 0;
  font-size: 0.7rem;
  color: $normalColor;
  background: rgba(245, 248, 251, 1);
  display: flex;
  flex-direction: column;
  z-index: 2;

  span {
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }

  .phone-active {
    color: $ActiveColor;
    font-weight: bold;
    background: rgba(215, 229, 255, 1);
  }
}

.input-focus {
  border: 1px solid rgba(10, 92, 255, 1);
}
</style>
