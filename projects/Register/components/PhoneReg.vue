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

      <AcceptAgreement v-model="agree" />

      <button
        type="submit"
        class="register-button"
        :class="checkErrors ? 'disableBtn' : ''"
      >
        注册
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import AcceptAgreement from '@/components/AcceptAgreement.vue';
import Captcha from '@/components/Captcha.vue';
import PhoneInput from '@/components/FormInput/PhoneInput.vue';
import VerifyCodeInput from '@/components/FormInput/VerifyCodeInput.vue';
import SimpleInput from '@/components/FormInput/SimpleInput.vue';

const dialogVisible = ref(false);
const phoneNum = ref('');
const inviteCode = ref('');
const verifyCode = ref('');
const agree = ref(false);

const register = async () => {
  dialogVisible.value = true;
};

const checkErrors = computed(
  () =>
    !phoneNum.value || !inviteCode.value || !verifyCode.value || !agree.value
);

const setDialogVisible = (value: boolean) => {
  dialogVisible.value = value;
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/formStyle.scss';

.register-button {
  @include main-button();
}

.disableBtn {
  background: $disableBtn;
}
</style>
