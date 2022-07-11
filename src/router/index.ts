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
  ],
});

export default router;
