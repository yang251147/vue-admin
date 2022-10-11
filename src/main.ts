import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router/index";
import "@/assets/css/index.css";
import store from "./store/index";
createApp(App).use(router).use(store).use(ElementPlus).mount("#app");
