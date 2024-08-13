import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '%/Home/index.vue';
import Login from '@/Login/index.vue';
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
  ],
});

export default router;
