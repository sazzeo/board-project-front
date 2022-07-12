import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
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
      path: "/:id",
      name: "id",
      component: () => import("@/components/layout/WebMain.vue"),
      children: [
        {
          path: "posts",
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
          component: () => import("@/components/setting/Profile.vue"),
        },
        {
          path: "category",
          name: "category",
          component: () => import("@/components/setting/Category.vue"),
        },
      ],
    },
  ],
});

export default router;
