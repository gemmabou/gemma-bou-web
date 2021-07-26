import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./components/shared";
import "./styles/common.scss";
import VueWindowSize from "vue-window-size";

Vue.use(VueWindowSize);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
