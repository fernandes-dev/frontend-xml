import actionsGlobal from '../actions';
import mutationsGlobal from '../mutations';

const count = {
  namespaced: true,
  state: () => ({
    profile: null,
  }),
  getters: {},
  mutations: { ...mutationsGlobal },
  actions: { ...actionsGlobal },
};

export default count;
