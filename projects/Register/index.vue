<template>
  <div class="main-container">
    <Header />
    <RegisterMethod />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import RegisterMethod from '@/components/RegisterMethod.vue';
import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
@import '@/assets/styles/container.scss';
</style>
