<template>
  <div class="main-container">
    <Header />
    <LoginMethod />
    <PhoneLogin />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import LoginMethod from '@/components/LoginMethod.vue';
import PhoneLogin from '@/components/Login/PhoneLogin.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/styles/container.scss';
</style>
