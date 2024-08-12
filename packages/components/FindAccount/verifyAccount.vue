<template>
  <Header>
    <div class="process active"></div>
    <div class="process"></div>
    <div class="process"></div>
  </Header>
  <h3>填写账号以获取信息</h3>

  <SimpleInput
    type="text"
    placeholder="请输入您的账号"
    required
    logo="/assets/findaccount/account-logo.png"
  />
  <button
    @click="router.push('/verifyPhone')"
    type="submit"
    class="confirm-button"
  >
    确定
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Header from './Header.vue';
// ts-ignore
import SimpleInput from '../FormInput/SimpleInput.vue';

const router = useRouter();
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
