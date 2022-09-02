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
      meta: {
        unAuth: true,
      },
      component: () => import("@/components/member/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      meta: {
        unAuth: true,
      },
      component: () => import("@/components/member/SignUpView.vue"),
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
              name: "posts-of-category1",
              component: () => import("@/components/board/PostView.vue"),
            },
            {
              path: "category/:parentCategory",
              name: "posts-of-category2",
              component: () => import("@/components/board/PostView.vue"),
            },
            {
              path: "category/:parentCategory/:childCategory",
              name: "posts-of-category3",
              component: () => import("@/components/board/PostView.vue"),
            },

            {
              path: "posts/:postsSeq",
              name: "read-post",
              component: () => import("@/components/board/ReadPost.vue"),
            },
            {
              path: "tags/:tagName",
              name: "posts-of-tags",
              component: () => import("@/components/board/PostView.vue"),
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
          meta: {
            auth: true,
          },
        },
      ],
    },
  ],
});

//to : 진입 페이지
router.beforeEach(async (to, from, next) => {
  //로그인 1차로 체크하기
  const sAuth = auth();
  const isLogged = sAuth.isLogged;
  const authPage = to.meta.auth || false;
  const unAuthPage = to.meta.unAuth || false;
  if (authPage && !isLogged) {
    //만약 인증이 필요한 페이지 && 로그인 되어있지 않으면?
    next("login");
    return;
  }
  if (unAuthPage && isLogged) {
    //만약 인증이 필요하지 않은 페이지에 로그인 되어있으면?
    next("/" + sAuth.member?.id || "");
    return;
  }
  next();
});

export default router;
