<template>
  <div id="home">
    <Status />
    <GameContent />
  </div>
  <Footer></Footer>
</template>
<script setup lang="ts" name="index">
import Footer from './components/Footer.vue';
import Status from './components/Status.vue';
import GameContent from './components/GameContent.vue';
</script>
<style lang="scss" scoped>
#home {
  margin: 5%;
  height: 90vh;
  overflow-y: auto;
}
</style>
