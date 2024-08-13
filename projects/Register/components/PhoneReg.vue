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
        logo="/images/input/phone-logo.png"
      />

      <VerifyCodeInput
        placeholder="请输入验证码"
        v-model="verifyCode"
        required
        logo="/images/input/validate-logo.png"
        inputFormat="verifyCode"
      />

      <SimpleInput
        type="text"
        placeholder="请输入邀请码"
        v-model="inviteCode"
        required
        logo="/images/input/invite-logo.png"
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
import PhoneInput from '@/Register/components/FormInput/PhoneInput.vue';
import VerifyCodeInput from '@/Register/components/FormInput/VerifyCodeInput.vue';
import SimpleInput from '@/Register/components/FormInput/SimpleInput.vue';
import useOverlay from '@/utils/useOverlay';

const { ToggleOverlay } = useOverlay();
const dialogVisible = ref(false);
const phoneNum = ref('');
const inviteCode = ref('');
const verifyCode = ref('');

const register = async () => {
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
