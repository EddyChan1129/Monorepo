<template>
  <header>
    <h4>找回密码</h4>
    <img src="/assets/findaccount/arrow.png" alt="arrow" @click="backprev" />
    <div class="processContainer">
      <slot></slot>
    </div>
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
header {
  position: relative;
  h4 {
    text-align: center;
  }

  img {
    position: absolute;
    top: 0;
    left: -5%;
  }
}
.processContainer {
  display: flex;
  justify-content: space-around;
  margin: 1rem 0 3rem 0;
  .process {
    width: 30%;
    height: 0.2rem;
    background-color: rgba(213, 226, 247, 1);
    border-radius: 5px;
  }
  .process.active {
    background-color: rgba(10, 92, 255, 1);
  }
}
</style>
