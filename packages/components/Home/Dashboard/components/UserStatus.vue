<template>
  <div class="login-registration" v-if="accountStore.account === 'unknown'">
    <div class="message">
      <p>游客</p>
      <span>注册登录查看更多</span>
    </div>
    <div class="reglog-btn">
      <button class="login-btn" @click="login">登录</button>
      <button class="reg-btn" @click="register">注册</button>
    </div>
  </div>
  <div v-else>
    <div class="user-info">
      <img src="/assets/home/user-logo.png" alt="user-logo" />
      <span> {{ accountStore.account }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

import { useAccountStore } from '@/store/account';

const router = useRouter();

const accountStore = useAccountStore();

const login = () => {
  router.push('/phoneLoginView');
};

const register = () => {
  router.push('/phoneRegistrationView');
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.login-registration {
  display: flex;
  justify-content: space-between;
  .message {
    p {
      font-size: 1.1em;
      color: rgba(98, 111, 134, 1);
    }
    span {
      color: $normalColor;
      font-size: 0.75em;
    }
  }

  .reglog-btn {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    .login-btn {
      background: $ActiveColor;
      border-radius: 0.5rem;
      padding: 0.35rem 1rem;
      color: white;
      border: none;
    }

    .reg-btn {
      background: transparent;
      border-radius: 0.5rem;
      padding: 0.35rem 1rem;
      color: $ActiveColor;
      border: $ActiveColor 1px solid;
    }
  }
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  img {
    width: 3.5rem;
  }
  span {
    font-size: 1.2em;
    color: $normalColor;
  }
}
</style>
