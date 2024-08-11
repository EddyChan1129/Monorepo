import { defineStore } from "pinia";

export const useOverlayStore = defineStore("overlay", {
  actions: {
    ToggleOverlay() {
      const registerContainer = document.querySelector(
        ".main-container"
      ) as HTMLElement;
      registerContainer.classList.toggle("overlay");
      window.scrollTo(0, 0);
      console.log("Pinia overlay store ToggleOverlay.");
    },
  },
});
