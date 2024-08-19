<template>
  <iframe
    v-show="dialogVisible"
    class="captcha"
    src="https://stg-captcha.tzi789.com/zh?callback=successCallback"
    frameborder="0"
  ></iframe>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAccountStore } from '@/utils/account';
import useOverlay from '@/hooks/useOverlay';
import useLogin from '@/hooks/useLogin';
import useRegister from '@/hooks/useRegister';
import useSuccess from '@/hooks/useSuccess';

const { phoneLogin, accountLogin } = useLogin();
const { phoneRegister, accountRegister } = useRegister();
const { displaySuccess } = useSuccess();

const router = useRouter();
const { ToggleOverlay } = useOverlay();
const accountStore = useAccountStore();

const props = defineProps([
  'dialogVisible',
  'phoneNum',
  'account',
  'password',
  'actionType',
]);
const emit = defineEmits(['close', 'isDialogVisible']);

const processPhoneLogin = async (data: any) => {
  const suessPhoneLogin = await phoneLogin(
    props.phoneNum as string,
    data.token
  );
  emit('isDialogVisible', false);

  if (suessPhoneLogin === 200) {
    accountStore.account = props.phoneNum as string;
    displaySuccess(router, '登录成功', '去首页');
  } else {
    alert('登录失败');
    ToggleOverlay();
  }
};

const processPhoneRegister = async (data: any) => {
  const suessPhoneRegister = await phoneRegister(
    props.phoneNum as string,
    data.token
  );
  emit('isDialogVisible', false);

  if (suessPhoneRegister === 200) {
    displaySuccess(router, '注册成功', '前往登录', '/login/phoneLogin');
  } else {
    alert('注册失败');
    ToggleOverlay();
  }
};

const processAccountLogin = async (data: any) => {
  const suessAccountLogin = await accountLogin(
    props.account as string,
    props.password as string,
    data.token
  );

  emit('isDialogVisible', false);

  if (suessAccountLogin === 200) {
    accountStore.account = props.account as string;
    displaySuccess(router, '登录成功', '去首页');
  } else {
    alert('登录失败');
    ToggleOverlay();
  }
};

const processAccountRegister = async (data: any) => {
  const suessAccountRegister = await accountRegister(
    props.account as string,
    props.password as string,
    data.token
  );

  emit('isDialogVisible', false);

  if (suessAccountRegister === 200) {
    displaySuccess(router, '注册成功', '前往登录', '/login/accountLogin');
  } else {
    alert('注册失败');
    ToggleOverlay();
  }
};

const onSuccessCallback = async (event: any) => {
  const data = event.data;

  if (data.event === 'close') {
    console.log('close');
    window.location.reload();
    emit('close');
  }

  if (data.status === 'success') {
    console.log('data', data);
    if (props.actionType === 'phoneLogin') {
      processPhoneLogin(data);
    } else if (props.actionType === 'phoneRegister') {
      processPhoneRegister(data);
    } else if (props.actionType === 'accountLogin') {
      processAccountLogin(data);
    } else {
      processAccountRegister(data);
    }
  }
};

onMounted(() => {
  console.log('Mounted Captcha');
  window.addEventListener('message', onSuccessCallback);
});

onUnmounted(() => {
  window.removeEventListener('message', onSuccessCallback);
});

watch(
  () => props.dialogVisible,
  (value) => {
    if (value) {
      ToggleOverlay();
    }
  }
);
</script>

<style scoped lang="scss">
iframe.captcha {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}
</style>
