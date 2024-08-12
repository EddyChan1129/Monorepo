<template>
  <!-- v-show="isSuccess"  -->
  <div class="success" v-bind="$attrs" v-show="isSuccess && open">
    <div class="success_content">
      <img src="/images/success/success.png" alt="succesful image" />
    </div>
    <div class="success_content">{{ title }}</div>
    <hr />
    <div class="success_content">
      <a @click="successpopup">{{ action }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useOverlayStore } from '@/store/overlay';
import { ref } from 'vue';

const router = useRouter();
const ToggleOverlayStore = useOverlayStore();
const open = ref(true);

const props = defineProps({
  title: String,
  action: String,
  isSuccess: Boolean,
  path: {
    type: String,
    default: '/phoneLoginView',
  },
});

const successpopup = () => {
  ToggleOverlayStore.ToggleOverlay();
  open.value = false;
  router.push(props.path);
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.success {
  position: absolute;
  background: rgba(255, 255, 255, 1);
  padding: 20px;
  border-radius: 25px;
  width: 80%;
  margin: 0 10%;
  min-height: 20%;
  left: 0;
  top: 40%;
  z-index: 999;
  text-align: center;
  font-weight: bold;

  .success_content {
    margin: 1rem;
  }

  a {
    color: #007bff;
    cursor: pointer;
    font-weight: 700;
    text-align: center;
  }
}
</style>
