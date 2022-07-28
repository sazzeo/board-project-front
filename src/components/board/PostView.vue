<template>
  <div class="board-list-wrapper">
    <div class="posts-subject">{{ categoryName || "전체보기" }}</div>
    <div class="posts-total" v-if="page">TOTAL</div>
    <div class="line"></div>
    <div class="no-posts" v-if="postList && postList.length == 0">
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
      <div v-if="urlParams.params.id == userId" class="btn-write">
        <el-button style="color: white" color="#c17546" @click="clickWriteBtn"
          >글쓰기</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PostApi from "@/api/modules/postApi";
import type { Posts } from "@/types/posts";
import { post } from "@/stores/modules/post";
import { auth } from "@/stores/modules/auth";
import TagListBtn from "@/components/tag/TagListBtn.vue";

const urlParams = computed(() => $router.currentRoute.value);
const categoryName = ref<string>();
const postList = ref<Array<Posts>>();
const sPost = post();
const sAuth = auth();

const page = ref(false);

const userId = ref<string>();
userId.value = sAuth.member?.id;

const setCategoryName = () => {
  const urlParams: any = $router.currentRoute.value.params;
  const category =
    urlParams.childCategory == null
      ? urlParams.parentCategory
      : urlParams.childCategory;
  categoryName.value = category;
};

const findPosts = async () => {
  const pathArray = $router.currentRoute.value.path.split("/");
  const path = pathArray.length > 2 ? pathArray[2] : "";

  const url = $utils.getPathVariable("id");

  if (path == "category" || path == "") {
    const category1 = $utils.getPathVariable("parentCategory") || null;
    const category2 = $utils.getPathVariable("childCategory") || null;
    setCategoryName();
    const res = await PostApi.findPosts(url, category1, category2);
    postList.value = res;
  } else if (path == "tags") {
    const tagName = $utils.getPathVariable("tagName");
    const res = await PostApi.findPostWithTags(url, tagName);
    postList.value = res;
  }

  console.dir(postList.value);
};

const clickPost = (postsSeq: string) => {
  const id = $utils.getPathVariable("id");
  const url = $utils.makeUrl([id, "posts", postsSeq]);
  $router.push(url);
};

const clickWriteBtn = () => {
  sPost.setCategoryName(categoryName.value || "");
  $router.push("/write");
};

watch(urlParams, () => {
  findPosts();
});

watchEffect(() => {});

onMounted(() => {
  findPosts();
});
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
