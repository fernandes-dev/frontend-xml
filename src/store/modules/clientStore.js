import actionsGlobal from "../actions";
import mutationsGlobal from "../mutations";

const client = {
  namespaced: true,
  state: () => ({
    all: [
      {
        name: "JTesta",
        cnpj: "00000000000"
      },
      {
        name: "Paco Paco",
        cnpj: "11111111111"
      },
      {
        name: "Vovó Neda",
        cnpj: "22222222222"
      }
    ]
  }),

  getters: {},
  mutations: { ...mutationsGlobal },
  actions: { ...actionsGlobal }
};

export default client;
