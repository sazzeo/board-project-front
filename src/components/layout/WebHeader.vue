<template>
  <div class="header-wrapper">
    <div class="header-nav">
      <div class="logo btn" @click="goBlog(url)">{{ title }}</div>
      <div class="menu-wrapper"></div>
      <div class="sign-wrapper">
        <div class="btn" @click="toggle">
          <el-icon style="vertical-align: middle" :size="20">
            <Search />
          </el-icon>
        </div>
        <div v-if="isLogged" class="logout-wrapper">
          <el-dropdown class="drop-down-login">
            <span class="el-dropdown-link">
              {{ sAuth.member.name }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="goMYBlog(sAuth.member.id)"
                  >내블로그</el-dropdown-item
                >
                <el-dropdown-item @click="$router.push('/setting/category')"
                  >카테고리 설정</el-dropdown-item
                >
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item
                  divided
                  @click="$router.push('/setting/profile')"
                  >내정보</el-dropdown-item
                >
                <el-dropdown-item
                  @click="
                    () => {
                      sAuth.deleteAuthToken();
                      $router.push('/login');
                    }
                  "
                  >로그아웃</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div v-else class="login-wrapper">
          <button class="btn-sign-in btn" @click="$router.push('/login')">
            로그인
          </button>
          <button class="btn-sign-up btn">회원가입</button>
        </div>
      </div>
    </div>
  </div>
  <div class="space"></div>
  <transition name="fade">
    <div class="search-bar-wrapper" v-if="false">
      <el-select class="select-bar" v-model="value" placeholder="Select">
        <el-option :key="'all'" :value="'전체'" />
        <el-option :key="'title'" :value="'제목'" />
        <el-option :key="'content'" :value="'내용'" />
        <el-option :key="'tag'" :value="'태그'" />
        <el-option :key="'member'" :value="'작성자'" />
      </el-select>
      <input
        class="search-bar"
        v-model="inputTag"
        @keyup.enter="searchEnter"
        placeholder="검색어를 입력하세요"
      />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { blog } from "@/stores/modules/blog";
import { computed, onMounted, ref } from "vue";
import { auth } from "@/stores/modules/auth";

const url = $utils.getPathVariable("id");
const sBlog = blog();
const sAuth = auth();

const title = computed<string>(() => {
  return sBlog.blogInfo.title || "Byulog";
});

const isLogged = computed<boolean>(() => {
  return sAuth.isLogged;
});

console.dir(isLogged.value);

const blogInfo = async () => {
  try {
    await sBlog.initBlogInfo(url);
  } catch (e) {
    //
  }
};

const goBlog = (url: string) => {
  $router.push("/" + url);
};

const goMYBlog = (url: string) => {
  $router.push("/" + url);
};

onMounted(() => {
  blogInfo();
});
</script>

<style scoped>
.header-wrapper {
  background-color: #f3f1ed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: fixed;
  width: 100%;
  z-index: 100;
}

.header-nav {
  display: flex;
  width: 1100px;
  justify-content: space-between;
  align-items: center;
  /*border: blue thin solid;*/
}

.header-nav > * {
  display: flex;
}

/* 서치바 */
.search-wrapper {
  width: 230px;
  height: 36px;
  border-color: transparent;
  display: flex;
  align-items: center;
}

.select-bar {
  width: 120px;
  margin-right: 10px;
  border-color: transparent;
}

.search-bar-wrapper {
  margin-left: 5px;
  height: 90%;
  background-color: transparent;
  border-color: transparent;
  border-radius: 2px;
}

/*로그인 바 */

.sign-wrapper > * > * {
  color: #c17546;
  margin: 0px 5px;
}

.drop-down-login {
  margin: 4px 10px;
}

.logout-wrapper {
  display: flex;
  line-height: 20px;
}

.btn-sign-in {
  border-color: transparent;
  flex-shrink: 0;
}

.btn-sign-up {
  border: #c17546 solid thin;
  border-radius: 20px;
  padding: 6px 15px;
  flex-shrink: 0;
}

.space {
  height: 80px;
}

.search-bar-wrapper {
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-bar {
  border: none;
  font-size: 20px;
  height: 40px;
}

.search-bar:focus {
  outline: none;
}

.fade-enter-active {
  height: 0px;
}

.fade-enter-to {
  height: 120px;
  transition-duration: 0.5s;
}

.fade-leave-active {
  height: 0px;
  transition: ease;
  transition-duration: 0.5s;
}
</style>
