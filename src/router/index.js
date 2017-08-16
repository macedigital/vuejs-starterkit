import Vue from 'vue';
import Component from 'vue-class-component';
import Router from 'vue-router';
import Hello from '../components/Hello';

Vue.use(Router);

// https://github.com/vuejs/vue-class-component#adding-custom-hooks
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
]);

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Hello',
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
