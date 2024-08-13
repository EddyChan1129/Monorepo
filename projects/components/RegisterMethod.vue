<template>
  <div class="account-register">
    <div class="register-tabs">
      <RouterLink
        class="select-account"
        active-class="active"
        to="/register/accountRegister"
      >
        账号注册
      </RouterLink>
      <RouterLink
        class="select-phone"
        active-class="active"
        to="/register/phoneRegister"
        >手机号注册</RouterLink
      >
    </div>

    <Language />
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Language from './Language.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.account-register {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
  position: relative;
  font-size: 0.85rem;

  .register-tabs {
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;

    .select-phone {
      position: relative;
      text-decoration: none;
    }
    .select-account {
      position: relative;
      text-decoration: none;
    }
    .select-account:visited,
    .select-phone:visited {
      color: $LinkColor;
    }

    .select-account.active:after,
    .select-phone.active:after {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      background-color: $ActiveColor;
      bottom: -0.3rem;
      left: 20%;
    }
  }
}

.active {
  font-weight: bold;
  color: $ActiveColor;
}
</style>
