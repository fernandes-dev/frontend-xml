import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './store';

Vue.config.productionTip = false;

Vue.filter('formatCNPJ', (documentId) => {
  documentId = typeof documentId !== 'string' ? documentId.toString() : documentId;
  if (documentId.length === 14) {
    documentId = documentId.padStart(14, '0');
    documentId = documentId.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  } else {
    documentId = documentId.padStart(11, '0');
    documentId = documentId.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
  return documentId;
});

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
