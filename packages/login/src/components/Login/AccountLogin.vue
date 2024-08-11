<template>
  <div class="component-accountreg">
    <Captcha
      :dialogVisible="dialogVisible"
      :account="account"
      :password="password"
      actionType="accountLogin"
      @isDialogVisible="setDialogVisible"
      @close="dialogVisible = false"
    />

    <form @submit.prevent="accountLogin">
      <SimpleInput
        type="text"
        placeholder="请输入您的账号"
        v-model="account"
        required
        logo="/src/assets/input/account-logo.png"
      />

      <PasswordInput
        v-model="password"
        placeholder="请设置账号密码"
        logo="/src/assets/input/password-logo.png"
        required
      />

      <div class="savePwd">
        <div>
          <Checkbox v-model="savePwdChecked" />
          <span :class="savePwdChecked ? 'pwdChecked' : ''">记住密码</span>
        </div>
        <RouterLink class="forgotpwd" to="/findAccount">忘记密码?</RouterLink>
      </div>
      <button type="submit" class="login-button">登录</button>
    </form>

    <div class="register-btn">
      <RouterLink
        class="register-route"
        active-class="active"
        to="/accountRegistrationView"
        >去注册</RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Checkbox from '@/components/Checkbox.vue';
import Captcha from '@/components/Captcha.vue';
import PasswordInput from '../FormInput/VerifyPwdInput.vue';
import SimpleInput from '../FormInput/SimpleInput.vue';

const account = ref('');
const dialogVisible = ref(false);
const savePwdChecked = ref(false);
const password = ref('');

// If savePwdChecked is true, save the account and password to local storage
// http://localhost:5173/accountLoginView will auto fill the account and password
if (localStorage.getItem('account')) {
  account.value = localStorage.getItem('account') as string;
  password.value = localStorage.getItem('password') as string;
  savePwdChecked.value = true;
}

const accountLogin = async () => {
  isSavePwd();
  dialogVisible.value = true;
  console.log('Login', account.value, password.value);
};

const setDialogVisible = (value: boolean) => {
  dialogVisible.value = value;
};

const isSavePwd = () => {
  // If savePwdChecked is true, save the account and password to local storage
  // http://localhost:5173/accountLoginView will auto fill the account and password
  if (savePwdChecked.value) {
    localStorage.setItem('account', account.value);
    localStorage.setItem('password', password.value);
  } else {
    localStorage.removeItem('account');
    localStorage.removeItem('password');
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.savePwd {
  color: $normalColor;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.6rem;

  div {
    display: flex;
    align-items: center;
  }

  .forgotpwd {
    color: $normalColor;
    text-decoration: none;
  }
}

.pwdChecked {
  color: $ActiveColor;
  font-weight: bold;
}

.login-button {
  @include main-button();
}

.register-btn {
  margin-top: 1rem;
  text-align: center;
}

.register-route {
  text-decoration: none;
  font-weight: bold;
  font-size: 0.8rem;
}

.register-route:visited {
  color: #007bff;
}
</style>
