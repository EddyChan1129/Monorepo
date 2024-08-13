<template>
  <section id="home-footer">
    <div v-for="(info, index) in footer" :key="index">
      <div class="footer">
        <img
          :src="getFooterImage(info.path as string, info.img, info.imgActive)"
          alt="info image"
        />
        <RouterLink
          :to="info.path as string"
          class="footer-info"
          active-class="active"
        >
          <span v-if="route.path === info.path" class="active-info">{{
            info.info
          }}</span>
          <span v-else class="normal-info">{{ info.info }}</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts" name="HomeFooter">
import { RouterLink, useRoute } from 'vue-router';
import { reactive } from 'vue';

const footer = reactive([
  {
    info: '首页',
    img: '/images/footer/home.png',
    imgActive: '/images/footer/active/home.png',
    path: '/',
  },
  {
    info: '开奖',
    img: '/images/footer/lucky.png',
    imgActive: '/images/footer/active/lucky.png',
    path: '/lucky',
  },
  {
    info: '游戏',
    img: '/images/footer/game.png',
    imgActive: '/images/footer/active/game.png',
    path: '/game',
  },
  {
    info: '活动',
    img: '/images/footer/event.png',
    imgActive: '/images/footer/active/event.png',
    path: '/event',
  },
  {
    info: '我的',
    img: '/images/footer/me.png',
    imgActive: '/images/footer/active/me.png',
    path: '/dashboard',
  },
]);

// Get the current route
const route = useRoute();

// Function to get the correct image based on the active route
const getFooterImage = (path: string, img: string, imgActive: string) => {
  return route.path === path ? imgActive : img;
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
#home-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  height: 10vh;
  .footer {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    img {
      width: 1rem;
    }
    .footer-info {
      font-size: 1em;
      text-decoration: none;
      color: $normalColor;
    }
  }
}

.active {
  color: $ActiveColor;
  font-weight: bold;
}

.normal-info {
  color: $normalColor;
}

.active-info {
  color: $ActiveColor;
  font-weight: bold;
}
</style>
