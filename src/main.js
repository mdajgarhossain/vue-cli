import Vue from "vue";
import App from "./App.vue";
import Topics from "./components/Topics.vue";

Vue.config.productionTip = false;

//register component globally
Vue.component("topics", Topics);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
