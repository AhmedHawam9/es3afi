import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
// import {createWebHashHistory} from "vue-router";
import routes from "../routes";
import VueI18n from "vue-i18n";
import i18n from "./plugins/i18n";
import FlagIcon from "vue-flag-icon";
// import axios from 'axios'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "toastify-js/src/toastify.css";
import VueStringFilter from "vue-string-filter";
Vue.use(VueStringFilter);


import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)


Vue.use(FlagIcon);
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueI18n);

const router = new VueRouter({
  mode: "html5",
  routes: routes,
  // history: createWebHashHistory(),
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  i18n,
}).$mount("#app");
