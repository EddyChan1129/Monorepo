<template>
  <div class="help-center">
    <div class="help-left">
      <img src="/images/home/cartoon.png" alt="cartoon" />
      <div>
        <h4>帮助中心</h4>
        <span>全年无休 为您服务</span>
      </div>
    </div>
    <div class="help-right"></div>
  </div>
</template>

<script setup lang="ts" name="HelpCenter"></script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.help-center {
  .help-left {
    display: flex;
    gap: 0.5rem;
    padding: 5%;

    h4 {
      font-size: 1.2em;
    }
    span {
      color: $normalColor;
      font-size: 1em;
    }
  }

  .help-right {
    position: absolute;
    width: 40%;
    height: 100%;
    top: 0;
    right: 0;
    background-image: url('/assets/home/helpCenter.png');
    background-size: 100% 100%;
    background-position: cover;
  }
}
</style>
