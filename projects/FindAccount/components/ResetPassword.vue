<template>
  <Header>
    <div class="process active"></div>
    <div class="process active"></div>
    <div class="process active"></div>
  </Header>

  <h3>重设密码</h3>

  <div class="form-group">
    <VerifyPassword
      v-model:password="password"
      v-model:repassword="repassword"
      @isPasswordError="getPasswordError"
    />
  </div>

  <button @click="resetPwd" type="submit" class="confirm-button">确定</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VerifyPassword from '@/components/FormInput/VerifyPassword.vue';
import useOverlay from '@/utils/useOverlay';
import useSuccess from '@/utils/useSuccess';
import Header from './Header.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const password = ref('');
const repassword = ref('');
const passwordError = ref(false);
const { ToggleOverlay } = useOverlay();
const { displaySuccess } = useSuccess();

const getPasswordError = (value: boolean) => {
  passwordError.value = value;
};

const resetPwd = () => {
  if (password.value !== repassword.value) {
    passwordError.value = true;
    return;
  }
  ToggleOverlay();
  displaySuccess(router, '密码重设成功，请使用新密码登录', '去登录');
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/formStyle.scss';

h3 {
  margin-bottom: 5%;
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

.confirm-button {
  @include main-button();
}
</style>
