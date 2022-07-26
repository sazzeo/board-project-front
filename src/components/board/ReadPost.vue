<template>
  <div class="read-post-wrapper">
    <div class="post-wrapper" v-if="post">
      <div class="title">{{ post.title }}</div>
      <!--    post? || "value "-->
      <div class="top-wrapper">
        <div class="member">{{ post.id }}</div>
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
      <div class="content" v-html="post.content"></div>
      <TagListBtn :tagList="post.tagList" />
      <div v-if="userId == post.id" class="btn-wrapper">
        <div class="btns">
          <el-button
            color="#c17546"
            plain
            @click="clickUpdateBtn(post.postsSeq)"
            >수정</el-button
          >
          <el-button color="#c17546" plain @click="deletePost(post.postsSeq)"
            >삭제</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Posts } from "@/types/posts";
import postApi from "@/api/modules/postApi";
import { auth } from "@/stores/modules/auth";
import TagListBtn from "@/components/tag/TagListBtn.vue";
const sAuth = auth();

const userId = ref<string>();

userId.value = sAuth.member?.id;

const post = ref<Posts>();

const findPost = async () => {
  const postSeq = $utils.getPathVariable("postsSeq");
  const res = await postApi.findPost(postSeq);
  console.dir(res);
  post.value = res;
};

const deletePost = async (postSeq: number) => {
  const res = await postApi.deletePosts(postSeq);
  await $router.go(-1);
};

findPost();
</script>

<style scoped>
.read-post-wrapper {
  display: flex;
  width: 750px;
  flex-direction: column;
}

.title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
}

.top-wrapper {
  display: flex;
}

.top-wrapper > * {
  margin-right: 10px;
  color: #b5b5b5;
  font-size: 12px;
}

.content {
  margin: 30px 0px;
  min-height: 200px;
}

.btn-wrapper {
  display: flex;
  justify-content: end;
  margin-top: 10px;
}
</style>
