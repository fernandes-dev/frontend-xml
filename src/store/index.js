import Vue from "vue";
import Vuex from "vuex";
import client from "./modules/clientStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    exitModal: false,
    loading: false
  },
  mutations: {},
  actions: {},
  modules: { client }
});
