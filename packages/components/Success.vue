<template>
  <div class="success">
    <div class="success_content">
      <img src="/images/success/success.png" alt="successful image" />
    </div>
    <div class="success_content">{{ title }}</div>
    <hr />
    <div class="success_content">
      <RouterLink to="/">{{ actions }}</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';

defineProps(['title', 'actions']);
</script>

<style lang="scss" scoped></style>
