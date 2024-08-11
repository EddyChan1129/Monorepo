<template>
  <Header>
    <div class="process active"></div>
    <div class="process active"></div>
    <div class="process"></div>
  </Header>

  <div class="verification-container">
    <h3>验证手机号</h3>
    <span class="verify-notice">
      验证码已发送至
      <b> 185 **** 9007</b>
    </span>
    <div class="input-group">
      <input
        v-for="(input, index) in code"
        :key="index"
        v-model="code[index]"
        maxlength="1"
        @input="focusNext($event, index)"
        @keydown.backspace="focusPrev(index)"
        :class="wrongCode ? 'input-box wrong-code' : 'input-box'"
        :id="'code' + index"
        type="text"
      />
    </div>
    <div class="verify-response">
      <span class="reenterPwd" @click="getCode">{{ notice }}</span>

      <span v-show="wrongCode" :class="wrongCode ? 'wrongCode' : ''"
        >验证码错误</span
      >
    </div>

    <h5 class="contact" @click="resetpwd">联系客服</h5>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import Header from './Header.vue';

const router = useRouter();

const code = reactive(['', '', '', '', '', '']);
const verifyCode = ref('');
const wrongCode = ref(false);
const notice = ref('重发验证码(59s)');

const getCode = () => {
  console.log('get code');
  const input = document.querySelector('#verifyCode');

  //Init notice vlaue = 60second to 1second, if 0second, the notice value = '重新获取'
  let time = 3;
  const timer = setInterval(() => {
    time--;
    notice.value = '重发验证码(' + time + 's)';
    if (time === 0) {
      clearInterval(timer);
      notice.value = '重发验证码';
    }
  }, 1000);
};

const resetpwd = () => {
  router.push('/resetPassword');
};

const focusNext = (event: any, index: number) => {
  // if the input value is not backspace or delete
  const key = event.inputType;
  const nextInput = document.querySelector(
    `#code${index + 1}`
  ) as HTMLBaseElement;
  const currentInput = document.querySelector(
    `#code${index}`
  ) as HTMLBaseElement;
  if (key === 'deleteContentBackward' || key === 'deleteContentForward') {
    console.log('deleteContentBackward');
    currentInput.classList.remove('input-box-focus');
    return;
  }
  1;

  if (index <= 4) {
    if (nextInput) {
      nextInput.focus();
    }
    verifyCode.value = code.join('');
    wrongCode.value = false;
  } else {
    wrongCode.value = true;
  }
};

const focusPrev = (index: number) => {
  index <= 5 ? (wrongCode.value = false) : (wrongCode.value = true);

  if (index > 0) {
    (document.querySelector(`#code${index - 1}`) as HTMLBaseElement)?.focus();
    console.log(index, code, code[index]);
    code[index] = '';
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

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

.verification-container {
  position: relative;
  display: flex;
  height: 60vh;
  flex-direction: column;

  .verify-notice {
    margin-top: 1rem;
    font-size: 0.8rem;
    color: rgba(98, 111, 134, 1);

    b {
      color: rgba(37, 43, 52, 1);
    }
  }

  .input-group {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
  }

  .input-box {
    background: rgba(239, 246, 254, 1);
    width: 15%;
    height: 3rem;
    border: none;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 4px;
    outline: none;
  }

  .input-box:focus {
    border: 1px solid rgba(10, 92, 255, 1);
  }
  .wrong-code {
    border: 1px solid rgba(255, 51, 51, 1);
    background: rgba(254, 239, 239, 1);
  }

  .verify-response {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    font-size: 0.8rem;

    .reenterPwd {
      color: rgba(10, 92, 255, 1);
      cursor: pointer;
    }
    .wrongCode {
      color: rgba(255, 51, 51, 1);
    }
  }

  .contact {
    position: absolute;
    width: 100%;
    bottom: 1rem;
    text-align: center;
    color: rgba(10, 92, 255, 1);
  }
}
</style>
