<template>
  <div>
    <div
      class="form-input"
      :style="accountErrors ? 'border: 1px solid red' : ''"
    >
      <img src="/images/input/account-logo.png" />
      <input
        type="text"
        :placeholder="placeholder"
        required
        :value="modelValue"
        @input="handleInput"
      />
    </div>
    <div class="remind-messages" :class="accountErrors ? 'error-messages' : ''">
      账号为4 - 15 字符组成，不允许特殊字符和空白格
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['modelValue', 'placeholder', 'required']);

const emit = defineEmits(['update:modelValue', 'isAccountError']);
const accountErrors = ref(false);

const handleInput = (event) => {
  emit('update:modelValue', event.target.value);
  validateAccount(event.target.value);
};

const validateAccount = (value) => {
  if (value.length < 4 || value.length > 15 || /[^a-zA-Z0-9]/.test(value)) {
    accountErrors.value = true;
    emit('isAccountError', accountErrors.value);
  } else {
    accountErrors.value = false;
    emit('isAccountError', accountErrors.value);
  }

  if (value.length === 0) {
    accountErrors.value = false;
    emit('isAccountError', accountErrors.value);
  }
  console.log('accountErrors:', accountErrors.value);
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/formStyle.scss';
</style>
