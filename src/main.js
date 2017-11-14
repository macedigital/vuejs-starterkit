import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  functional: true,
  router,
  render(h) {
    return h(App);
  },
});
