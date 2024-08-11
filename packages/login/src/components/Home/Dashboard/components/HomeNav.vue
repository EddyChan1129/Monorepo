<template>
  <div class="navbar" v-for="(info, index) in navbar" :key="index">
    <div class="navinfo">
      <img :src="info.img" alt="infor image" />
      <span @click="go(info.path as string)"> {{ info.nav }}</span>
    </div>
    <div class="backNav-container">
      <div v-show="info.nav === '消息中心'" class="redpoint"></div>
      <img src="@/assets/navbar/backNav.png" alt="backNav" />
    </div>
  </div>
</template>

<script setup lang="ts" name="HomeNav">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const go = (path: string) => {
  if (path) {
    router.push(path);
  }
};

const navbar = reactive([
  {
    nav: '个人资讯',
    img: 'src/assets/navbar/personal-info.png',
    path: '/personalInfo',
  },
  {
    nav: '我的钱包',
    img: 'src/assets/navbar/my-wallet.png',
  },
  {
    nav: '投注记录',
    img: 'src/assets/navbar/invest-record.png',
  },
  {
    nav: '资金明细',
    img: 'src/assets/navbar/invest-detail.png',
  },
  {
    nav: '报表查询',
    img: 'src/assets/navbar/query.png',
  },
  {
    nav: '消息中心',
    img: 'src/assets/navbar/infocenter.png',
  },
  {
    nav: '优惠活动',
    img: 'src/assets/navbar/promotion.png',
  },
  {
    nav: '我的收藏',
    img: 'src/assets/navbar/my-assest.png',
  },
  {
    nav: 'APP下载',
    img: 'src/assets/navbar/download.png',
  },
  {
    nav: '代理申请',
    img: 'src/assets/navbar/people.png',
  },
  {
    nav: '意见反馈',
    img: 'src/assets/navbar/suggestion.png',
  },
  {
    nav: '帮助中心',
    img: 'src/assets/navbar/helpcenter.png',
  },
]);
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
@import '@/assets/styles/navbar.scss';
</style>
