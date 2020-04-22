import Vue from 'vue';
import App from './App.vue';
import Directives from './plugins/directives';
import vuetify from './plugins/vuetify';
import router  from './router/index';
import store  from './store/index';
import i18n from './i18n'
import './registerServiceWorker'
import './plugins/socketPlugin';

Vue.use(Directives);
Vue.use(vuetify);

new Vue({
  el: '#app',
  vuetify,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
