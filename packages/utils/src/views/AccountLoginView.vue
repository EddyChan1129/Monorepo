<template>
  <div class="main-container">
    <Header />
    <LoginMethod />
    <AccountLogin />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import LoginMethod from '@/components/LoginMethod.vue';
import AccountLogin from '@/components/Login/AccountLogin.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/styles/container.scss';
</style>
