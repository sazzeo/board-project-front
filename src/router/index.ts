import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  scrollBehavior: () => {
    // always scroll to top
    return { top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "home",
      component: () => import("@/components/member/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/components/member/SignUpView.vue"),
    },
    {
      path: "/test1",
      name: "test1",
      component: () => import("@/components/test/PiniaTest1.vue"),
    },
    {
      path: "/test2",
      name: "test2",
      component: () => import("@/components/test/PiniaTest2.vue"),
    },
    {
      path: "/:catchAll(.*)",
      component: () => import("@/components/error/ErrorPage.vue"),
    },
    {
      path: "/",
      name: "id",
      component: () => import("@/components/layout/WebMain.vue"),
      children: [
        {
          path: "",
          name: "index",
          component: () => import("@/components/layout/WebIndexPage.vue"),
        },
        {
          path: ":id",
          name: "posts",
          component: () => import("@/components/board/BoardPage.vue"),
        },
      ],
    },
    {
      path: "/setting",
      name: "setting",
      component: () => import("@/components/setting/SettingView.vue"),
      children: [
        {
          path: "profile",
          name: "profile",
          component: () => import("@/components/setting/ProfileView.vue"),
        },
        {
          path: "category",
          name: "category",
          component: () => import("@/components/setting/CategoryView.vue"),
        },
      ],
    },
  ],
});

export default router;
