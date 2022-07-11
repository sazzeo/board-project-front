import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import ko from "element-plus/es/locale/lang/ko";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "/public/css/common.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(ElementPlus, {
  locale: ko,
});
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(createPinia().use(piniaPluginPersistedState));
app.use(router);

app.mount("#app");
