<template>
  <div class="board-page-wrapper">
    <div class="post-view">
      <RouterView />
    </div>
    <div class="side-wrapper">
      <div>
        <ProfileBox />
      </div>
      <div>
        <CategoryBox :data="categoryBoxData" />
      </div>
      <div>
        <TagBox :data="tagBoxData" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TagBox from "@/components/tag/TagBox.vue";
import ProfileBox from "@/components/board/ProfileBox.vue";
import CategoryBox from "@/components/board/CategoryBox.vue";
import type { Category } from "@/types/category";
import type { Tag } from "@/types/tag";
import blogApi from "@/api/modules/blogApi";
import { computed } from "vue";
import postApi from "@/api/modules/postApi";

const routerValue = computed(() => $router.currentRoute.value);
const urlId = ref<string>();
urlId.value = $utils.getPathVariable("id");
const categoryBoxData = ref<any>([{ title: "전체보기", id: "all" }]);
const tagBoxData = ref<Array<Tag>>();

const findData = async (url: string) => {
  console.dir(url);
  const categoryData = await blogApi.findCategoryByUrl(url);
  const tagData = await blogApi.findTopOfTags(url);
  categoryBoxData.value[0].children = categoryData;
  tagBoxData.value = tagData;
};

onMounted(async () => {
  const url: any = routerValue.value.params.id;
  console.dir("온마운트 실행");
  await findData(url);
});

watch(routerValue, async (router) => {
  const url: any = await router.params.id;
  if (url) {
    console.dir("이거실행!!!!!!!!!>_<");
    await findData(url);
  }
});

//게시글 스토어 init
// 저런 정보로 init..
</script>

<style scoped>
.board-page-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  width: 1100px;
  padding: 100px 0;
}

.side-wrapper {
  display: flex;
  flex-direction: column;
}

.side-wrapper > * {
  margin: 10px 0;
}
</style>
