import Vue from 'vue';
import Vuex from 'vuex';
import customers from './modules/customers';
import count from './modules/count';
import mutations from './mutations';
import actions from './actions';
import utils from './modules/UtilsStore';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: null,
    exitModal: false,
    loading: false,
    timezone: 'America/Cuiaba',
  },
  mutations: {
    ...mutations,
    loading(state, data) {
      state.loading = data;
    },
  },
  actions: { ...actions },
  modules: { customers, count, utils },
});
