<template>
  <div class="write-post-wrapper">
    <div class="write-post">
      <div class="select-category">
        <el-select
          v-model="value"
          class="m-2"
          placeholder="Select"
          @change="setCategory"
        >
          <el-option
            v-for="item in categories"
            :key="item.categorySeq"
            :label="
              item.categorySeq != item.upCategory
                ? '- ' + item.title
                : item.title
            "
            :value="item.categorySeq"
            :class="{ child: item.categorySeq != item.upCategory }"
          />
        </el-select>
      </div>
      <div class="input-title">
        <input
          class="title"
          v-model="posts.title"
          placeholder="제목을 입력하세요"
        />
      </div>
      <el-input
        class="input-content"
        v-model="posts.content"
        :autosize="{ minRows: 23 }"
        type="textarea"
      />
      <InputTagList v-model:tagList="tagList" />
      <div class="btn-wrapper">
        <div class="btn">
          <el-button color="#c17546" plain @click="cancelBtn">취소</el-button>
          <el-button color="#c17546" plain @click="addPosts"> 등록 </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Posts } from "@/types/posts";
import BlogApi from "@/api/modules/blogApi";
import type { Category } from "@/types/category";
import PostApi from "@/api/modules/postApi";
import { post } from "@/stores/modules/post";
import InputTagList from "@/components/tag/InputTagList.vue";

const categories = ref<Array<Category>>();
const value = ref<number>();
const tagList = ref<Array<string>>([]);
const sPost = post();

const posts = ref<Posts>({
  title: "",
  content: "",
  categorySeq: 0,
});

const setCategory = (categorySeq: number) => {
  posts.value.categorySeq = categorySeq;
};

const findCategoryForSelectBox = async () => {
  const res: Array<Category> = await BlogApi.findCategoryForSelectBox();
  categories.value = res;
};

const cancelBtn = () => {
  $router.go(-1); //페이지 이동 함수
};

const addPosts = async () => {
  console.log("실행");
  const tagNameList: any = [];

  _.forEach(tagList.value, (tag) => {
    tagNameList.push({ tagName: tag });
  });

  posts.value.tagList = tagNameList;
  const res = await PostApi.addPosts(posts.value);
  console.log(res); //등록했으면 해당 포스트로 보내는 로직 추가예정
};

findCategoryForSelectBox();
</script>

<style scoped>
.write-post-wrapper {
  display: flex;
  justify-content: center;
  /*border: thin solid blue;*/
  align-items: center;
}

.write-post {
  width: 1000px;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin: 100px 0px;
}

.select-category {
  display: flex;
  width: 900px;
}

.input-title {
}

.title {
  font-size: 20px;
  margin: 30px 0px 20px 0px;
  border-color: transparent;
  border-bottom: darkgray thin solid;
  width: 900px;
  padding: 10px;
  display: flex;
}

.input-content {
  width: 900px;
  padding: 10px;
}

.btn-wrapper {
  margin: 10px 0px;
  width: 920px;
  display: flex;
  justify-content: right;
}

.child {
  margin-left: 10px;
}
</style>
