import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';
import routes from "./routes";
import store from './store';
import VueCookies from 'vue-cookies';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueCookies);
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
