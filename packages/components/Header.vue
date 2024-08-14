<template>
  <header>
    <img src="/images/findaccount/arrow.png" alt="arrow" @click="backprev" />

    <p>
      <slot>Default</slot>
    </p>
    <div></div>
  </header>
</template>
<script setup lang="ts" name="Header">
import { useRouter } from 'vue-router';

const router = useRouter();

const backprev = () => {
  router.replace('/accountLoginView');
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/container.scss';

header {
  background: rgba(255, 255, 255, 1);
  padding: 5%;
  position: relative;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: rgba(37, 43, 52, 1);
  }
  img {
    height: 1rem;
  }
}
</style>
