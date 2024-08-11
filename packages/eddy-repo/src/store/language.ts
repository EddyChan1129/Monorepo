import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state() {
    return {
      languageList: [
        {
          lang: '简体中文',
          img: 'assets/language/zn.png',
        },
        {
          lang: '繁体中文',
          img: 'assets/language/cn.png',
        },
        {
          lang: 'English',
          img: 'assets/language/en.png',
        },
      ],
      language: '简体中文',
    };
  },
});
