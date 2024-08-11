<template>
  <div id="statue">
    <div class="status-left">
      <img src="@/assets/home/index/home-logo.svg" alt="logo" />
    </div>
    <div class="status-right">
      <div v-if="beforeLogin && !isLogin" class="login-before">
        <span @click="switchTryMode">试玩体验 ></span>
        <RouterLink to="/phoneLoginView" class="status-logo"
          >注册/登录</RouterLink
        >
      </div>

      <div v-if="tryGameMode && !isLogin" class="action-after">
        <div class="moneny">
          <img src="@/assets/home/index/money.svg" alt="" />
          5000.00
        </div>
        <img src="@/assets/home/index/status-try.svg" alt="" />
      </div>

      <div v-if="isLogin" class="action-after">
        <div class="moneny">
          <img src="@/assets/home/index/money.svg" alt="" />
          5000.00
        </div>
        <img src="@/assets/home/index/status-login.svg" alt="" />
      </div>
      <Language />
    </div>
  </div>
</template>

<script setup lang="ts" name="Status">
import Language from './language.vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useAccountStore } from '@/store/account';

const accountStore = useAccountStore();

const beforeLogin = ref(true);
const tryGameMode = ref(false);

const isLogin = accountStore.account !== 'unknown';

const switchTryMode = () => {
  beforeLogin.value = !beforeLogin.value;
  tryGameMode.value = !tryGameMode.value;
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';
#statue {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .status-left {
    display: flex;
    align-items: center;
    width: 25%;
  }

  .status-right {
    display: flex;
    gap: 0.7rem;
    font-weight: 500;
    justify-content: space-between;
    align-items: center;
    font-size: $normal;
    color: $ActiveColor;

    .login-before,
    .action-after {
      display: flex;
      align-items: center;
      gap: 0.7rem;

      .moneny {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        background: rgb(229, 238, 255);
        padding: 0.3rem 0.5rem;
        border-radius: 15px;
        color: $normalColor;
      }
    }

    .status-logo {
      border: 1px solid $ActiveColor;
      padding: 0.2rem 0.7rem;
      border-radius: 15px;
      text-decoration: none;
      color: $ActiveColor;
    }
  }
}
</style>
