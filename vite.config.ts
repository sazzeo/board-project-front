import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

//auto import
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        //api로 시작하는 요청에 대해 8081 포트 자동 지정해주는 것 같음
        target: "http://localhost:8081",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        "vue",
        "vuex",
        "vue-router",
        {
          vue: ["withDefaults"],
          lodash: ["_"],
          "@/hooks/element-plus": [
            "elLoading",
            "$miniMsg",
            "$confirm",
            "$message",
            "$notify",
          ],
          "@/utils": [["default", "$utils"]],
          "@/router": [["default", "$router"]],
          "@/store": [["default", "$store"]],
          "@/hooks/dayjs": ["$dayjs"],
          "@/hooks/store-service": ["$dialog", "$toast"],
          "@/types/common/search": [
            ["SearchForm", "$searchForm"],
            ["PageOptions", "$pageOptions"],
          ],
        },
      ],
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
      dts: true,
      /* options */
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
