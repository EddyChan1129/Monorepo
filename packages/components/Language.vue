<template>
  <div class="language-toggle" @click="toggleLanguage">
    <div class="selected-language">
      <img :src="image" alt="Traditional Chinese" />
      <span>{{ language }}</span>
      <div class="toggled" v-show="toggleLang">
        <div
          class="pop-lang"
          v-for="(languageItem, index) in languageStore.languageList"
          :key="index"
          @click="selectLang(languageItem.lang)"
          :class="languageItem.lang == language ? 'isSelected' : ''"
        >
          <div>
            <img :src="languageItem.img" alt="zn" width="15" height="15" />
            <span>{{ languageItem.lang }}</span>
          </div>
          <img
            src="/images/language/tick.png"
            alt="tick"
            v-show="languageItem.lang == language"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLanguageStore } from '@/store/language';

const languageStore = useLanguageStore();

const language = ref('简体中文');
const image = ref('images/language/zn.png');
const toggleLang = ref(false);
const toggleLanguage = () => {
  toggleLang.value = !toggleLang.value;
};

const selectLang = (lang: string) => {
  language.value = lang;
  if (lang === '简体中文') {
    image.value = 'images/language/zn.png';
    languageStore.language = '简体中文';
  } else if (lang === 'English') {
    image.value = 'images/language/en.png';
    languageStore.language = 'English';
  } else {
    image.value = 'images/language/cn.png';
    languageStore.language = '繁體中文';
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.language-toggle {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .selected-language {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.35rem 0.7rem;
    border: 1px solid rgba(235, 238, 245, 1);
    color: rgba(133, 144, 162, 1);
    border-radius: 10px;
    font-size: 0.8em;

    img {
      margin-right: 0.5rem;
      width: 1rem;
    }

    .toggled {
      position: absolute;
      right: 0;
      top: 100%;
      background: #ffffff;
      border-radius: 55px;
      z-index: 2;
    }
  }
}

.pop-lang {
  display: flex;
  align-items: center;
  width: 130px;
  justify-content: space-between;
  background: #ffffff;
  padding: 5px 10px;
  text-align: left;
  font-size: 0.78rem;
  color: rgb(127, 138, 157);
  cursor: pointer;
  padding: 0.2rem 0.2rem;

  div {
    display: flex;
    align-items: center;
  }

  img {
    margin: 5px 8px;
  }
}

.isSelected {
  background: rgb(215, 229, 255);
  color: $ActiveColor;
  font-weight: bold;
}
</style>
