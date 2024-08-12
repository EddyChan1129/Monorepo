<template>
  <div id="safety">
    <div class="safetyImage">
      <img src="/images/home/safety.png" alt="" />
    </div>
    <div class="safetyData">
      <h4>账号安全指数 10%</h4>

      <div class="wrapper">
        <div class="progress-bar">
          <div class="progress" style="width: 10"></div>
        </div>
      </div>

      <p>完善信息，安全指数更高</p>
    </div>
  </div>
</template>

<script setup lang="ts" name="AccountSafety">
import { ref } from 'vue';
</script>
<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

#safety {
  background: rgb(243, 247, 253);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  border-radius: 1rem;
  margin: 2%;

  .safetyImage {
    width: 20%;
    margin-right: 5%;
    img {
      width: 100%;
    }
  }

  .safetyData {
    width: 70%;
    display: flex;
    align-items: left;
    flex-direction: column;
    gap: 0.4rem;
    .wrapper {
      background: white;
      border-radius: 3rem;

      .progress-bar {
        height: 0.8rem;
        border-radius: 3rem;
        overflow: hidden;

        .progress {
          height: 100%;
          background: linear-gradient(90deg, #5699ff 1.23%, #1d6bf5 99.02%);
          border-radius: 3rem;
          width: 10%;
          border: none;
        }
      }
    }
    p {
      font-size: $normal;
      color: $normalColor;
    }
  }
}
</style>
