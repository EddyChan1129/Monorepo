<template>
  <button :class="{ isok: isok }"><slot>Hello</slot></button>
</template>

<script setup lang="ts" name="SummitBtn">
import { defineProps } from 'vue';

const props = defineProps<{
  isok: boolean;
}>();

if (props.isok) {
  console.log('isok');
} else {
  console.log('not isok');
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';

button {
  background: rgba(29, 107, 245, 0.5);
  border: none;
  color: white;
  padding: 0.7rem 0rem;
  border-radius: 0.7rem;
}

.isok {
  background-color: $ActiveColor;
}
</style>
