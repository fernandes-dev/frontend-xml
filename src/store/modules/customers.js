import actionsGlobal from '../actions';
import mutationsGlobal from '../mutations';

const client = {
  namespaced: true,
  state: () => ({
    customers: null,
    customerSelected: null,
  }),
  getters: {
    getYears(state) {
      if (state.customerSelected) {
        return state.customerSelected.children.map((item) => item.name);
      }
    },
  },
  mutations: { ...mutationsGlobal },
  actions: { ...actionsGlobal },
};

export default client;
