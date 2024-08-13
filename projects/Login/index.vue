<template>
  <div class="main-container">
    <Header />
    <LoginMethod />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import LoginMethod from '@/components/LoginMethod.vue';
import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
@import '@/assets/styles/container.scss';
</style>
