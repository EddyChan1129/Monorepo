<template>
  <header>
    <h4>
      <slot>Default</slot>
    </h4>
    <img src="/images/findaccount/arrow.png" alt="arrow" @click="backprev" />
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
  h4 {
    text-align: center;
  }

  img {
    position: absolute;
    top: 40%;
    left: 5%;
  }
}
</style>
