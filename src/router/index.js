import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.ROUTER_PREFIX,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hello,
    },
    {
      path: '*',
      component: {
        template: '<h1>Page not found!</h1>',
      },
    },
  ],
});

export default router;
