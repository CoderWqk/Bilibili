import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import { Field, Toast, Uploader, Dialog, ActionSheet, Tab, Tabs, List, Collapse, CollapseItem} from 'vant';
import http from '@/network/http.js';

Vue.use(Field).use(Toast).use(Uploader).use(Dialog).use(ActionSheet).use(Tab).use(Tabs).use(List).use(Collapse).use(CollapseItem);
Vue.prototype.$http = http;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
