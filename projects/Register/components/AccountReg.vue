<template>
  <div>
    <Captcha
      :dialogVisible="dialogVisible"
      :account="account"
      :password="password"
      actionType="accountRegister"
      @isDialogVisible="setDialogVisible"
      @close="dialogVisible = false"
    />

    <form @submit.prevent="accountRegister">
      <VerifyAccountInput
        placeholder="请输入您的账号"
        v-model="account"
        @isAccountError="getAccountError"
      />

      <VerifyPassword
        v-model:password="password"
        v-model:repassword="repassword"
        @isPasswordError="getPasswordError"
      />

      <SimpleInput
        placeholder="请输入邀请码"
        v-model="inviteCode"
        logo="/images/input/invite-logo.png"
      />

      <AcceptAgreement />
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
import { computed, ref } from 'vue';
import AcceptAgreement from '@/components/AcceptAgreement.vue';
import Captcha from '@/components/Captcha.vue';
import VerifyAccountInput from '@/Register/components/FormInput/VerifyAccountInput.vue';
import VerifyPassword from '@/Register/components/FormInput/VerifyPassword.vue';
import SimpleInput from '@/Register/components/FormInput/SimpleInput.vue';

const account = ref('');
const password = ref('');
const repassword = ref('');
const inviteCode = ref('');

const dialogVisible = ref(false);
const accountError = ref(false);
const passwordError = ref(false);

const checkErrors = computed(
  () =>
    accountError.value ||
    passwordError.value ||
    account.value === '' ||
    password.value === '' ||
    repassword.value === '' ||
    inviteCode.value === ''
);

const accountRegister = async () => {
  if (!checkErrors) {
    alert('请填写完整信息');
  }
  dialogVisible.value = true;
  console.log('Registering', account.value, password.value);
};

const setDialogVisible = (value: boolean) => {
  dialogVisible.value = value;
};

const getAccountError = (value: boolean) => {
  accountError.value = value;
};

const getPasswordError = (value: boolean) => {
  passwordError.value = value;
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
