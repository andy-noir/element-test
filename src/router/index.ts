import Vue from 'vue';
import Router from 'vue-router';

import AuthLayout from '@/layouts/AuthLayout/AuthLayout.vue';

import PageSignIn from '@/views/PageSignIn/PageSignIn.vue';
import PageSignUp from '@/views/PageSingUp/PageSignUp.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: AuthLayout,
      children: [
        {
          path: 'sign-in',
          name: 'sign-in',
          component: PageSignIn,
        },
        {
          path: 'sign-up',
          name: 'sign-up',
          component: PageSignUp,
        },
      ],
    },
  ],
});
