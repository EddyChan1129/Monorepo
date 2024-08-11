<template>
  <div class="main-container">
    <Header />
    <RegisterMethod />
    <AccountReg />
    <RegFooter />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import RegisterMethod from '@/components/RegisterMethod.vue';
import AccountReg from '@/components/Registeration/AccountReg.vue';
import RegFooter from '@/components/RegFooter.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/styles/container.scss';
</style>
