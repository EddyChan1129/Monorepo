import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state() {
    return {
      languageList: [
        {
          lang: '简体中文',
          img: 'images/language/zn.png',
        },
        {
          lang: '繁体中文',
          img: '/images/language/cn.png',
        },
        {
          lang: 'English',
          img: 'images/language/en.png',
        },
      ],
      language: '简体中文',
    };
  },
});
