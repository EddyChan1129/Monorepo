<template>
  <div class="component-accountreg">
    <Captcha
      :dialogVisible="dialogVisible"
      :phoneNum="phoneNum"
      actionType="phoneRegister"
      @close="dialogVisible = false"
      @isDialogVisible="setDialogVisible"
    />

    <form @submit.prevent="register">
      <PhoneInput
        placeholder="请输入您的手机号"
        v-model="phoneNum"
        required
        logo="/src/assets/input/phone-logo.png"
      />

      <VerifyCodeInput
        placeholder="请输入验证码"
        v-model="verifyCode"
        required
        logo="/src/assets/input/validate-logo.png"
        inputFormat="verifyCode"
      />

      <SimpleInput
        type="text"
        placeholder="请输入邀请码"
        v-model="inviteCode"
        required
        logo="/src/assets/input/invite-logo.png"
      />

      <AcceptAgreement />

      <button type="submit" class="register-button">注册</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AcceptAgreement from '@/components/AcceptAgreement.vue';
import Captcha from '@/components/Captcha.vue';
import PhoneInput from '../FormInput/PhoneInput.vue';
import VerifyCodeInput from '../FormInput/VerifyCodeInput.vue';
import SimpleInput from '../FormInput/SimpleInput.vue';
import useOverlay from '@/utils/useOverlay';

const { ToggleOverlay } = useOverlay();
const dialogVisible = ref(false);
const phoneNum = ref('');
const inviteCode = ref('');
const verifyCode = ref('');

const register = async () => {
  ToggleOverlay();
  dialogVisible.value = true;
};

const setDialogVisible = (value: boolean) => {
  dialogVisible.value = value;
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.register-button {
  @include main-button();
}
</style>
