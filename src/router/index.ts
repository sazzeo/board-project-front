import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/stores/modules/auth";

const router = createRouter({
  scrollBehavior: () => {
    // always scroll to top
    return { top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
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
      path: "/write",
      name: "write",
      component: () => import("@/components/board/WritePost.vue"),
      meta: {
        auth: true,
      },
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
          children: [
            {
              path: "",
              alias: [
                "category/:parentCategory",
                "category/:parentCategory/:childCategory",
              ],
              name: "posts-of-category",
              component: () => import("@/components/board/PostView.vue"),
            },

            {
              path: "posts/:postsSeq",
              name: "read-post",
              component: () => import("@/components/board/ReadPost.vue"),
            },
          ],
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
          meta: {
            auth: true,
          },
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

//to : ?????? ?????????
router.beforeEach(async (to, from, next) => {
  //????????? 1?????? ????????????
  const sAuth = auth();
  const isLogged = sAuth.isLogged;
  const authPage = to.meta.auth;
  console.log(to);
  //?????? ????????? ????????? ????????? && ????????? ???????????? ??????????
  if (authPage && !isLogged) {
    next("login");
    return;
  }
  next();
});

export default router;
