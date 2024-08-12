<template>
  <section id="downloadApp" v-show="displayDownload">
    <div class="download-left">
      <div class="logo">
        <img src="/assets/welcome/klogo.png" alt="" />
      </div>
      <div class="appDesc">
        <h4>官方APP</h4>
        <span>吉时下注 一手掌控</span>
      </div>
    </div>
    <div class="download-right">
      <div class="download-btn">下载APP</div>
      <img
        @click="displayDownload = !displayDownload"
        src="/assets/home/remove.png"
        alt="remove"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const displayDownload = ref(true);
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
#downloadApp {
  background: linear-gradient(180deg, #b8deff 0%, #f0faff 100%);
  min-height: 4rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .download-left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .download-right {
    margin-right: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    .download-btn {
      background: $ActiveColor;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      color: white;
    }
  }

  .logo {
    margin-left: 1rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 30%;
    padding: 0.5rem 0.9rem 0.1rem 0.9rem;
    img {
      width: 1.5rem;
    }
  }

  .appDesc {
    display: flex;
    flex-direction: column;
    h4 {
      color: rgba(0, 0, 0, 1);
    }
    span {
      color: $normalColor;
      font-size: 0.75em;
    }
  }
}
</style>
