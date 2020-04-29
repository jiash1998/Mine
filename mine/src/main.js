import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Axios from "axios";
import VueAxios from "vue-axios";
//
import apiConfig from '../api.config';

Vue.config.productionTip = false;

Vue.use(VueAxios, Axios);
Axios.defaults.baseURL = apiConfig.baseUrl;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
