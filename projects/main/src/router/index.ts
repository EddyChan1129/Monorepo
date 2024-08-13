import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '%/Home/index.vue';
import Login from '@/Login/index.vue';
import Register from '@/Register/index.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      children: [
        {
          path: 'accountLogin',
          name: 'accountLogin',
          component: () => import('@/Login/components/AccountLogin.vue'),
        },
        {
          path: 'phonelogin',
          name: 'phonelogin',
          component: () => import('@/Login/components/phonelogin.vue'),
        },
      ],
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      children: [
        {
          path: 'accountRegister',
          name: 'accountRegister',
          component: () => import('@/Register/components/AccountReg.vue'),
        },
        {
          path: 'phoneRegister',
          name: 'phoneRegister',
          component: () => import('@/Register/components/PhoneReg.vue'),
        },
      ],
    },
    {
      path: '/findAccount',
      name: 'findAccount',
      component: () => import('@/FindAccount/index.vue'),
      children: [
        {
          path: '/findAccount',
          name: 'findAccount',
          component: () => import('@/FindAccount/index.vue'),
          children: [
            {
              path: '',
              name: 'findAccount',
              component: () =>
                import('@/FindAccount/components/verifyAccount.vue'),
            },
            {
              path: '/verifyPhone',
              name: 'verifyPhone',
              component: () =>
                import('@/FindAccount/components/verifyPhone.vue'),
            },
            {
              path: '/resetPassword',
              name: 'resetPassword',
              component: () =>
                import('@/FindAccount/components/resetPassword.vue'),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
