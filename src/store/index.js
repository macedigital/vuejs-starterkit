import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      if (state.count < 10) {
        // eslint-disable-next-line no-plusplus,no-param-reassign
        state.count++;
      }
    },
    decrement(state) {
      if (state.count > 0) {
        // eslint-disable-next-line no-plusplus,no-param-reassign
        state.count--;
      }
    },
  },
});
