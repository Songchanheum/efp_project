import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router  from './router/index';
import store  from './store/index';
import './registerServiceWorker'
import i18n from './i18n'

Vue.use(vuetify);

new Vue({
  el: '#app',
  vuetify,
  router,
  store,
  i18n,
  render: h => h(App)
});
