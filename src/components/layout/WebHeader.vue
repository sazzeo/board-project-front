<template>
  <div class="header-wrapper">
    <div class="header-nav">
      <div class="logo btn" @click="clickLogo">Blog</div>
      <div class="menu-wrapper">
        <!--        <div class="btn-tech">Tech</div>-->
      </div>

      <div class="sign-wrapper">
        <div class="btn" @click="toggle">
          <el-icon style="vertical-align: middle" :size="20">
            <Search />
          </el-icon>
        </div>
        <button class="btn-sign-in">로그인</button>
        <button class="btn-sign-up">회원가입</button>
      </div>
    </div>
  </div>
  <div class="space"></div>
  <transition name="fade">
    <div class="search-bar-wrapper" v-if="t">
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

<script setup></script>

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

.btn-tech {
  color: #c17546;
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

.sign-wrapper > * {
  color: #c17546;
  margin: 0px 5px;
}

.sign-wrapper > *:hover {
  cursor: pointer;
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
