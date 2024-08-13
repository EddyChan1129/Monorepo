<template>
  <div class="identity">
    <div class="navbar" v-for="(info, index) in navbar" :key="index">
      <div class="navinfo" @click="go(info.path)">
        <img :src="info.img" alt="info image" />
        <span> {{ info.nav }}<sup>*</sup></span>
      </div>
      <div class="backNav-container">
        <span>未绑定</span>
        <img src="/images/navbar/backNav.png" alt="backNav" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="Identity">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const navbar = reactive([
  {
    nav: '身份绑定',
    img: '/images/navbar/personal-info.png',
    path: '/personalIdentity',
  },
  {
    nav: '手机绑定',
    img: '/images/navbar/my-wallet.png',
    path: '/phoneIdentity',
  },
  {
    nav: '邮箱绑定',
    img: '/images/navbar/invest-record.png',
    path: '/emailIdentity',
  },
]);

const go = (path: string) => {
  if (path) {
    router.push(path);
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

@import '@/assets/styles/navbar.scss';

.identity {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  margin: 2%;
}
</style>
