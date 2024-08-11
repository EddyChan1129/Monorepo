<template>
  <div id="home">
    <div>
      <DownloadApp />
      <section id="mainContent">
        <UserStatus />
        <div class="home-row">
          <Wallet />
        </div>
        <div class="home-row">
          <HelpCenter />
        </div>
        <div class="home-row">
          <HomeNav />
        </div>
      </section>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts" name="Home">
import Footer from '@/components/Home/components/Footer.vue';
import DownloadApp from './components/DownloadApp.vue';
import UserStatus from './components/UserStatus.vue';
import Wallet from './components/Wallet.vue';
import HelpCenter from './components/HelpCenter.vue';
import HomeNav from './components/HomeNav.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

$mainBgColor: linear-gradient(
  180deg,
  #d9e6ff 0%,
  rgba(214, 228, 255, 0.27) 100%
);

$rowColor: rgba(255, 255, 255, 0.6);

#home {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #mainContent {
    background: $mainBgColor;
    padding: 5%;

    .home-row {
      position: relative;
      margin-top: 5%;
      background: $rowColor;
      border-radius: 1.5rem;
    }
  }
}
</style>
