<template>
  <div class="navbar" v-for="(info, index) in navbar" :key="index">
    <div class="navinfo">
      <img :src="info.img" alt="infor image" />
      <span @click="go(info.path as string)"> {{ info.nav }}</span>
    </div>
    <div class="backNav-container">
      <div v-show="info.nav === '消息中心'" class="redpoint"></div>
      <img src="/images/navbar/backNav.png" alt="backNav" />
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
    img: '/images/navbar/personal-info.png',
    path: '/personalInfo',
  },
  {
    nav: '我的钱包',
    img: '/images/navbar/my-wallet.png',
  },
  {
    nav: '投注记录',
    img: '/images/navbar/invest-record.png',
  },
  {
    nav: '资金明细',
    img: '/images/navbar/invest-detail.png',
  },
  {
    nav: '报表查询',
    img: '/images/navbar/query.png',
  },
  {
    nav: '消息中心',
    img: '/images/navbar/infocenter.png',
  },
  {
    nav: '优惠活动',
    img: '/images/navbar/promotion.png',
  },
  {
    nav: '我的收藏',
    img: '/images/navbar/my-assest.png',
  },
  {
    nav: 'APP下载',
    img: '/images/navbar/download.png',
  },
  {
    nav: '代理申请',
    img: '/images/navbar/people.png',
  },
  {
    nav: '意见反馈',
    img: '/images/navbar/suggestion.png',
  },
  {
    nav: '帮助中心',
    img: '/images/navbar/helpcenter.png',
  },
]);
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
@import '@/assets/styles/navbar.scss';
</style>
