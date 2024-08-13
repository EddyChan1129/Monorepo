<template>
  <input type="checkbox" :checked="modelValue" @click="toggleChecked" />
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const toggleChecked = () => {
  emit('update:modelValue', !props.modelValue);
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

input[type='checkbox'] {
  margin-right: 0.3rem;
  appearance: none;
  border: 1px solid $normalColor;
  border-radius: 3px;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 0.65rem;
  height: 0.65rem;
  cursor: pointer;
}

input[type='checkbox']:checked {
  background-image: url('/images/language/tick.png');
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid $ActiveColor;
}
</style>
