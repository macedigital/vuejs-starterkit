import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Counter from '@/components/Counter';

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
      path: '/vuex',
      name: 'vuex',
      component: Counter,
    },
    {
      path: '*',
      component: {
        functional: true,
        render(h) {
          return h('h1', 'Page not found!');
        },
      },
    },
  ],
});

export default router;
