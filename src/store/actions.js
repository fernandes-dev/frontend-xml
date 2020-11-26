import axios from 'axios';
// import Idb from "./IndexedDb";
axios.defaults.baseURL = process.env.VUE_APP_BACKEND;

function message(method) {
  let msg;
  switch (method) {
    case 'post':
      msg = 'Adicionado com sucesso!';
      break;
    case 'put':
      msg = 'Alterado com sucesso!';
      break;
    case 'delete':
      msg = 'Deletado com sucesso!';
      break;
    default:
      break;
  }
  return { msg };
}

const actions = {
  async request(context, payload) {
    context.commit('loading', true, { root: true });

    axios.defaults.headers = null || {
      Authorization: `${localStorage.getItem('token')}`,
    };

    const config = {
      url: payload.url,
      method: payload.method,
      params: null || payload.params,
      data: null || payload.data,
    };
    if (payload.responseType) {
      config.responseType = payload.responseType;
    }
    const { msg } = message(payload.method);
    const resp = axios(config);
    resp.then((response) => {
      if (payload.state) { context.commit('request', [payload.state, response.data]); }
      context.commit('loading', false, { root: true });
      if (!payload.noMsg && payload.method !== 'get') { context.commit('message', [msg, 'success'], { root: true }); }
    });
    resp.catch(() => context.commit('loading', false, { root: true }));

    return resp;
  },
};

export default actions;
