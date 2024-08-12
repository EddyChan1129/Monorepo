<template>
  <div class="form-input">
    <img src="/images/input/phone-logo.png" />
    <div class="phone-location" @click="displayCountry">
      <span>{{ phoneCode }}</span>
      <img src="/images/input/polygonDown-logo.png" alt="uplogo" />
    </div>
    <input
      type="text"
      :placeholder="placeholder"
      :required="required"
      :value="modelValue"
      @input="handleInput"
    />
    <div class="phone-select" v-if="isSelectCountry">
      <span
        :class="phoneCode === '+86' ? 'phone-active' : ''"
        @click="selectChina"
        >中国 (+86)</span
      >
      <span
        :class="phoneCode === '+84' ? 'phone-active' : ''"
        @click="selectVietnam"
        >越南 (+84)</span
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['modelValue', 'type', 'placeholder', 'required']);

const emit = defineEmits(['update:modelValue']);
const phoneCode = ref('+86');
const isSelectCountry = ref(false);
const phoneNotice = ref('请输入您的手机号');

const handleInput = (event) => {
  emit('update:modelValue', event.target.value);
};

const displayCountry = () => {
  isSelectCountry.value = !isSelectCountry.value;
  phoneNotice.value = isSelectCountry.value ? '请选择国家' : '请输入您的手机号';
};

const selectChina = () => {
  isSelectCountry.value = false;
  phoneCode.value = '+86';
  phoneNotice.value = '请输入您的手机号';
};

const selectVietnam = () => {
  isSelectCountry.value = false;
  phoneCode.value = '+84';
  phoneNotice.value = '请输入您的手机号';
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.form-input:hover {
  border: 1px solid rgba(10, 92, 255, 1);
}
.form-input {
  position: relative;
  margin-bottom: 1rem;
  border-radius: 0.3rem;
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

.error-inputStyle {
  border: $WrongInputBorder;
  background: $WrongInputBg;
}

.input-focus {
  border: 1px solid rgba(10, 92, 255, 1);
}
</style>
