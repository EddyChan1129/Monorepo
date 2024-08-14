<template>
  <button><slot>Hello</slot></button>
</template>
<script setup lang="ts" name="SummitBtn">
import { ref, reactive } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
</script>
<style lang="scss" scoped>
button {
  background: rgba(29, 107, 245, 0.5);
  border: none;
  color: white;
  padding: 0.7rem 0rem;
  border-radius: 0.7rem;
}
</style>
