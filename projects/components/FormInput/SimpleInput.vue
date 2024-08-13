<template>
  <div class="form-input">
    <img :src="logo" />
    <input
      :type="type"
      :placeholder="placeholder"
      required
      :value="modelValue"
      @input="handleInput"
    />
  </div>
</template>

<script setup>
defineProps(['modelValue', 'type', 'placeholder', 'logo']);

const emit = defineEmits(['update:modelValue']);

const handleInput = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/formStyle.scss';
</style>
