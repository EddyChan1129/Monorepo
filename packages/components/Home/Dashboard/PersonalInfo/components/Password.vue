<template>
  <div class="identity">
    <div class="navbar" v-for="(info, index) in navbar" :key="index">
      <div class="navinfo">
        <img :src="info.img" alt="info image" />
        <span> {{ info.nav }}<sup>*</sup></span>
      </div>
      <div class="backNav-container">
        <span>{{ info.nav == '支付密码' ? '未开启' : '未设置' }}</span>
        <img src="/images/navbar/backNav.png" alt="backNav" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="Identity">
import { reactive } from 'vue';

const navbar = reactive([
  {
    nav: '支付密码',
    img: '/images/navbar/personal-info.png',
    path: '/personalInfo',
  },
  {
    nav: '账户密码',
    img: '/images/navbar/my-wallet.png',
  },
]);
</script>
<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

@import '@/assets/styles/navbar.scss';

.identity {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5%;
  margin: 2%;
}
</style>
