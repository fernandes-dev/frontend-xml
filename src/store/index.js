import Vue from "vue";
import Vuex from "vuex";
import customers from "./modules/customers";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    exitModal: false,
    loading: false,
    timezone: "America/Cuiaba",
  },
  mutations: {},
  actions: {},
  modules: { customers },
});
