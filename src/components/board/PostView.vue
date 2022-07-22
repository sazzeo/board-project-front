<template>
  <div class="board-list-wrapper">
    포스트뷰 {{ route }}
    <div class="posts-subject">{{ postsSubject }}</div>
    <div class="posts-total" v-if="page">
      TOTAL {{ page.totalElements || 0 }}
    </div>
    <div class="line"></div>
    <div class="no-posts" v-if="page && page.totalElements == null">
      게시글이 존재하지 않습니다.
    </div>
    <div class="post-wrapper" v-for="post in postList">
      <div class="title btn" @click="clickPost(post.postsSeq)">
        {{ post.title }}
      </div>
      <div class="content btn" @click="clickPost(post.postsSeq)">
        {{ post.content }}
      </div>
      <TagListBtn :tagList="post.tagList" />
      <div class="bottom-wrapper">
        <div class="member">{{ post.member }}</div>
        <div>|</div>
        <div class="date">
          <el-icon style="vertical-align: middle">
            <Clock />
          </el-icon>
          {{ post.regDate }}
        </div>
        <div>|</div>
        <div class="views">
          <el-icon style="vertical-align: middle">
            <View />
          </el-icon>
          {{ post.views }}
        </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <el-button-group class="ml-4 btn-page-wrapper">
        <el-button
          color="#c17546"
          plain
          @click="clickPrePageBtn"
          v-bind:disabled="pageNum == 1"
          >이전</el-button
        >
        <el-button
          v-if="page"
          v-for="i in page.totalPages"
          :plain="!(page.page + 1 == i)"
          :style="{ color: page.page + 1 == i && 'white' }"
          color="#c17546"
          @click="clickPageNumBtn(i)"
          >{{ i }}</el-button
        >
        <el-button
          plain
          color="#c17546"
          v-if="page"
          @click="clickNextPageBtn"
          v-bind:disabled="pageNum == page.totalPages"
          >다음</el-button
        >
      </el-button-group>
      <div class="btn-write">
        <el-button style="color: white" color="#c17546" @click="clickWriteBtn"
          >글쓰기</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const postList = ref();

const clickWriteBtn = () => {
  $router.push("/write");
};
</script>

<style scoped>
.board-list-wrapper {
  width: 750px;
}

.posts-subject {
  font-size: 30px;
  font-weight: bold;
  color: #fdb814;
  margin-bottom: 10px;
}

.posts-total {
  font-size: 15px;
  margin-bottom: 10px;
}

.post-wrapper {
  display: flex;
  flex-direction: column;
  margin: 50px 0px;
  /*border: black thin solid;*/
  padding: 5px;
}

.post-wrapper > * {
  margin: 10px 0px;
}

.title {
  font-size: 25px;
  font-weight: 700;
}

.content {
  color: #666666;
}

.bottom-wrapper {
  display: flex;
}

.bottom-wrapper > * {
  margin-right: 10px;
  color: #b5b5b5;
  font-size: 12px;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
  position: relative;
}

.btn-page-wrapper {
}

.btn-write {
  position: absolute;
  right: 5px;
}
</style>
