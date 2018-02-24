import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import persistedState from './persistedState';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  plugins: [persistedState],
  mutations: {
    ...mutations,
  },
});
