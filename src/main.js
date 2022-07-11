import { createApp } from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router/router";
import components from "@/components";
import store from "./store";
const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(Vuex).use(router).use(store).mount("#app");
