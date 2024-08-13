<template>
  <div class="footer-links">
    <RouterLink class="select-phone" to="/phoneLoginView"
      >已有账号？去登录</RouterLink
    >
    <RouterLink to="/" class="contact">联系客服 </RouterLink>
  </div>
</template>

<script setup name="RegFooter" lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.footer-links {
  display: flex;
  justify-content: space-between;
  margin-top: 1.3rem;
  font-size: 0.7rem;

  .select-phone:visited,
  .contact:visited {
    color: $ActiveColor;
  }
  .select-phone,
  .contact {
    text-decoration: none;
  }
}
</style>
