import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@package/Home/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@project/Login/index.vue'),
      children: [
        {
          path: 'accountLogin',
          name: 'accountLogin',
          component: () => import('@project/Login/components/AccountLogin.vue'),
        },
        {
          path: 'phonelogin',
          name: 'phonelogin',
          component: () => import('@project/Login/components/phonelogin.vue'),
        },
      ],
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@project/Register/index.vue'),
      children: [
        {
          path: 'accountRegister',
          name: 'accountRegister',
          component: () =>
            import('@project/Register/components/AccountReg.vue'),
        },
        {
          path: 'phoneRegister',
          name: 'phoneRegister',
          component: () => import('@project/Register/components/PhoneReg.vue'),
        },
      ],
    },
    {
      path: '/findAccount',
      name: 'findAccount',
      component: () => import('@project/FindAccount/index.vue'),
      children: [
        {
          path: '',
          name: 'verifyAccount',
          component: () =>
            import('@project/FindAccount/components/verifyAccount.vue'),
        },
        {
          path: '/verifyPhone',
          name: 'verifyPhone',
          component: () =>
            import('@project/FindAccount/components/verifyPhone.vue'),
        },
        {
          path: '/resetPassword',
          name: 'resetPassword',
          component: () =>
            import('@project/FindAccount/components/resetPassword.vue'),
        },
      ],
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@package/Dashboard/index.vue'),
    },
    {
      path: '/personalInfo',
      name: 'personalInfo',
      component: () => import('@package/PersonalInfo/index.vue'),
    },
    {
      path: '/PersonalIdentity',
      name: 'PersonalIdentity',
      component: () => import('@package/PersonalIdentity/index.vue'),
    },
    {
      path: '/comfirmIdentity',
      name: 'comfirmIdentity',
      component: () => import('@package/PersonalIdentity/comfirmIdentity.vue'),
      props(route) {
        return route.query;
      },
    },
    {
      path: '/my-wallet',
      name: 'my-wallet',
      component: () => import('%/MyWallet/index.vue'),
    },
    {
      path: '/LuckysSpin',
      name: 'LuckysSpin',
      component: () => import('@/components/LuckysSpin.vue'),
    },
  ],
});

export default router;
