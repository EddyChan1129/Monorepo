<template>
  <div id="personal-info">
    <Header>个人资讯</Header>
    <AccountSafety />
    <Identity />
    <Password />
  </div>
</template>
<script setup lang="ts" name="index">
import AccountSafety from './components/AccountSafety.vue';
import Header from './components/Header.vue';
import Identity from './components/Identity.vue';
import Password from './components/Password.vue';
</script>
<style lang="scss" scoped>
#personal-info {
  background: rgba(248, 248, 248, 1);
  height: 100vh;
}
</style>
