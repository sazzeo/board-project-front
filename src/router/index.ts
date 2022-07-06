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
  ],
});

export default router;
