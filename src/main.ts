import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import router from "./routers"

createApp(App)
  .use(router)
  .mount("#app");
