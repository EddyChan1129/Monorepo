<template>
  <div id="test">
    <div class="wheel-wrapper">
      <div class="wheel-pointer" @click="onClickRotate"></div>
      <div class="wheel-bg" :style="`transform: rotate(${wheelDeg}deg)`">
        <div class="prize-list">
          <div
            class="prize-item-wrapper"
            v-for="(item, index) in prizeList"
            :key="index"
          >
            <div
              class="prize-item"
              :style="`transform: rotate(${
                (360 / prizeList.length) * index
              }deg);background: ${item.background}`"
            >
              <div class="prize-name">
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="LuckysSpin">
import { ref, computed, watch } from 'vue';

const rolling = ref(false);
const wheelDeg = ref(30);
const prizeNumber = ref(5);

const prizeListOrigin = ref([
  {
    name: '3元',
    background: 'linear-gradient(112.62deg, #9CA0FF 55.46%, #0E4BED 80.89%)',
  },
  {
    name: '1000元',
    background: 'linear-gradient(146.51deg, #62BEFF 39.25%, #2B65FF 82.34%)',
  },
  {
    name: '99元',
    background: 'linear-gradient(240.7deg, #D2DEFF 9.67%, #F9FAFF 46.08%);',
  },
  {
    name: '1元',
    background: 'linear-gradient(123.68deg, #5684FF 54.37%, #1652ED 91.59%);',
  },
  {
    name: '2元',
    background: 'linear-gradient(240.7deg, #D2DEFF 9.67%, #F9FAFF 46.08%);',
  },
]);

const prizeList = computed(() => {
  return prizeListOrigin.value.slice(0, prizeNumber.value);
});

const onClickRotate = () => {
  if (rolling.value) {
    return;
  }
  const result = Math.floor(Math.random() * prizeList.value.length);
  roll(result);
};

const roll = (result) => {
  rolling.value = true;
  wheelDeg.value =
    wheelDeg.value -
    (wheelDeg.value % 360) +
    6 * 360 +
    (360 - (360 / prizeList.value.length) * result);

  setTimeout(() => {
    rolling.value = false;
    alert('Result：' + prizeList.value[result].name);
  }, 2000);
};

watch(prizeNumber, () => {
  wheelDeg.value = 0;
});
</script>

<style lang="scss" scoped>
#test {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.wheel-wrapper {
  width: 300px;
  height: 300px;
  position: relative;
}

.wheel-pointer {
  width: 100px;
  height: 100px;
  background: url('/images/luckyspin/clickStart.png');
  background-size: 100%;
  position: absolute;
  left: 48%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  cursor: pointer;
}
.wheel-bg {
  height: 100%;
  border-radius: 50%;
  transition: transform 2s ease-in-out;
  overflow: hidden;
}

.prize-list {
  text-align: center;
}

.prize-item-wrapper {
  position: absolute;
  left: 38.5%;
  transform: translateX(-50%);
  width: 50%; // Responsive width
  aspect-ratio: 1; // Keep a square shape
}

.prize-item {
  position: absolute;
  width: 145%;
  height: 100%;
  transform-origin: bottom;
  clip-path: polygon(48% 100%, 0 0, 100% 0);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
