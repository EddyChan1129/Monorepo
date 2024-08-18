import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@package/Home/index.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/Login/index.vue"),
      children: [
        {
          path: "accountLogin",
          name: "accountLogin",
          component: () => import("@/Login/components/AccountLogin.vue"),
        },
        {
          path: "phonelogin",
          name: "phonelogin",
          component: () => import("@/Login/components/phonelogin.vue"),
        },
      ],
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/Register/index.vue"),
      children: [
        {
          path: "accountRegister",
          name: "accountRegister",
          component: () => import("@/Register/components/AccountReg.vue"),
        },
        {
          path: "phoneRegister",
          name: "phoneRegister",
          component: () => import("@/Register/components/PhoneReg.vue"),
        },
      ],
    },
    {
      path: "/findAccount",
      name: "findAccount",
      component: () => import("@/FindAccount/index.vue"),
      children: [
        {
          path: "",
          name: "verifyAccount",
          component: () => import("@/FindAccount/components/verifyAccount.vue"),
        },
        {
          path: "/verifyPhone",
          name: "verifyPhone",
          component: () => import("@/FindAccount/components/verifyPhone.vue"),
        },
        {
          path: "/resetPassword",
          name: "resetPassword",
          component: () => import("@/FindAccount/components/resetPassword.vue"),
        },
      ],
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("%/Dashboard/index.vue"),
    },
    {
      path: "/personalInfo",
      name: "personalInfo",
      component: () => import("%/PersonalInfo/index.vue"),
    },
    {
      path: "/PersonalIdentity",
      name: "PersonalIdentity",
      component: () => import("%/PersonalIdentity/index.vue"),
    },
    {
      path: "/comfirmIdentity",
      name: "comfirmIdentity",
      component: () => import("%/PersonalIdentity/comfirmIdentity.vue"),
      props(route) {
        return route.query;
      },
    },
    {
      path: "/my-wallet",
      name: "my-wallet",
      component: () => import("%/MyWallet/index.vue"),
    },
    {
      path: "/LuckysSpin",
      name: "LuckysSpin",
      component: () => import("@/components/LuckysSpin.vue"),
    },
  ],
});

export default router;
