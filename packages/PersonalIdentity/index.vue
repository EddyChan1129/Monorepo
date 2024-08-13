<template>
  <Header>身份绑定</Header>
  <div id="identity">
    <h3>基本信息</h3>
    <div class="form-input">
      <input type="text" placeholder="请填写真实姓名" />
      <span>Hi</span>
    </div>
    <p class="notice">*平台只会转账到该姓名下的银行卡，否则充值无法到账</p>
    <div class="form-input">
      <input type="text" placeholder="请填写真实姓名" />
      <span>Hi</span>
    </div>
    <div class="form-input">
      <input type="text" placeholder="请填写真实姓名" />
      <span>Hi</span>
    </div>
    <div class="form-input">
      <input type="text" placeholder="请填写真实姓名" />
      <span>Hi</span>
    </div>
  </div>
</template>
<script setup lang="ts" name="index">
import Header from '%/components/Header.vue';
import { ref, reactive } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';

#identity {
  background: rgba(248, 248, 248, 1);

  height: 100vh;
  padding: 5% 10%;
}

.notice {
  font-size: $normal;
}

.form-input {
  background: rgba(255, 255, 255, 1);
  position: relative;
  display: flex;
  align-items: center;
  margin: 3% 0;
  border-radius: 0.7rem;

  input {
    font-size: $normal;
    width: 100%;
    height: 2.3rem;
    border: none;
    padding-left: 5%;
    border-radius: 0.7rem;
  }

  input:focus {
    border: none;
    outline: none;
    padding-left: 5%;
  }

  span {
    position: absolute;
    right: 1rem;
  }
}
</style>
