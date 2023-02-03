import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// import MyBtn from "../components/MyBtn";
// import Demo from "../components/Demo";
// console.log(MyBtn, "MyBtn----");
// Vue.use(MyBtn);
// Vue.use(Demo);

// import pengUI from "../components/index";
// import PengUi from "../dist/index.umd.js";
// Vue.use(PengUi);
import { Demo, MyBtn } from "../components/index";
Vue.use(Demo);
Vue.use(MyBtn);

// import PengUi from "peng-mui";
// import { Demo, MyBtn } from "peng-mui";
// Vue.use(Demo);
// Vue.use(MyBtn);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
