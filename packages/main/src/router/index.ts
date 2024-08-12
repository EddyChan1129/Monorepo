import { createRouter, createWebHistory } from 'vue-router';
import AccountRegistrationView from '%/views/AccountRegistrationView.vue';
import PhoneRegistrationView from '%/views/PhoneRegistrationView.vue';
import PhoneLoginView from '%/views/PhoneLoginView.vue';
import AccountLoginView from '%/views/AccountLoginView.vue';
import FindAccountView from '%/views/FindAccountView.vue';
import verifyAccount from '@/components/FindAccount/verifyAccount.vue';
import VerifyPhone from '@/components/FindAccount/verifyPhone.vue';
import ResetPassword from '@/components/FindAccount/ResetPassword.vue';
import HomeView from '%/views/HomeView.vue';
import dashboard from '@/components/Home/Dashboard/index.vue';
import personalInfo from '@/components/Home/Dashboard/PersonalInfo/index.vue';
import personalIdentity from '@/components/Home/Dashboard/PersonalInfo/PersonalIdentity/index.vue';
import lucky from '@/components/Home/Dashboard/PersonalInfo/PersonalIdentity/index.vue';
import game from '@/components/Home/Dashboard/PersonalInfo/PersonalIdentity/index.vue';
import event from '@/components/Home/Dashboard/PersonalInfo/PersonalIdentity/index.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/AccountRegistrationView',
      name: 'AccountRegistrationView',
      component: AccountRegistrationView,
    },
    {
      path: '/phoneRegistrationView',
      name: 'PhoneRegistrationView',
      component: PhoneRegistrationView,
    },
    {
      path: '/phoneLoginView',
      name: 'PhoneLoginView',
      component: PhoneLoginView,
    },
    {
      path: '/accountLoginView',
      name: 'AccountLoginView',
      component: AccountLoginView,
    },
    {
      path: '/findAccount',
      name: 'FindAccountView',
      component: FindAccountView,
      children: [
        {
          path: '',
          name: 'verifyAccount',
          component: verifyAccount,
        },
        {
          path: '/verifyPhone',
          name: 'verifyPhone',
          component: VerifyPhone,
        },
        {
          path: '/resetPassword',
          name: 'resetPassword',
          component: ResetPassword,
        },
      ],
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
    {
      path: '/personalInfo',
      name: 'personalInfo',
      component: personalInfo,
    },
    {
      path: '/personalIdentity',
      name: 'personalIdentity',
      component: personalIdentity,
    },
    {
      path: '/game',
      name: 'game',
      component: game,
    },
    {
      path: '/event',
      name: 'event',
      component: event,
    },
    {
      path: '/lucky',
      name: 'lucky',
      component: lucky,
    },
  ],
});

export default router;
