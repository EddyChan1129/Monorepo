<template>
  <div class="component-accountreg">
    <Captcha
      :dialogVisible="dialogVisible"
      :phoneNum="phoneNum"
      actionType="phoneLogin"
      @isDialogVisible="setDialogVisible"
      @close="dialogVisible = false"
    />

    <form @submit.prevent="login">
      <PhoneInput
        v-model="phoneNum"
        placeholder="请输入您的手机号"
        required
        logo="/images/input/phone-logo.png"
      />

      <SimpleInput
        type="text"
        placeholder="请输入验证码"
        v-model="inviteCode"
        required
        logo="/images/input/validate-logo.png"
      />
      <button type="submit" class="login-button">登录</button>
    </form>
    <div class="register-btn">
      <RouterLink
        class="register-route"
        active-class="active"
        to="/phoneRegistrationView"
        >去注册</RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Captcha from '@/components/Captcha.vue';
import SimpleInput from '@/Login/components/FormInput/SimpleInput.vue';
import PhoneInput from '@/Login/components/FormInput/PhoneInput.vue';
const dialogVisible = ref(false);
const phoneNum = ref('');
const inviteCode = ref('');

const login = async () => {
  dialogVisible.value = true;
};

const setDialogVisible = (value: boolean) => {
  dialogVisible.value = value;
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.login-button {
  @include main-button();
}

.register-btn {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.8rem;

  .register-route {
    position: relative;
    text-decoration: none;
    font-weight: bold;
  }

  .register-route:visited {
    color: $ActiveColor;
  }
}
</style>
