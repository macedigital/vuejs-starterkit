import Vue from 'vue';
import Vuex from 'vuex';
import persistedState from './persistedState';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  plugins: [persistedState],
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
