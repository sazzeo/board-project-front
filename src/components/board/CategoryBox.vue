<template>
  <div class="category-box-wrapper">
    <div class="text-category">Categories</div>
    <el-tree
      ref="treeRef"
      :data="data"
      :props="defaultProps"
      default-expand-all
      node-key="id"
      :expand-on-click-node="false"
      :highlight-current="true"
      @node-click="goCategory"
    >
      <template #default="{ node, data }">
        <div :class="{ 'parent-node': node.level <= 2 }">
          {{ node.data.title }}
        </div>
        <span v-if="node.data.totalCnt != null">
          &nbsp({{ node.data.totalCnt }})</span
        >
      </template>
    </el-tree>
  </div>
</template>

<script setup lang="ts">
import blogApi from "@/api/modules/blogApi";
import type { Category } from "@/types/category";

const data = ref();
const defaultProps = {
  children: "children",
  label: "label",
};

const router = ref();
const findCategory = async () => {
  const router: any = $router.currentRoute.value.params;
  const res = await blogApi.findCategoryByUrl(router.id);
  data.value = [{ title: "전체보기", children: res, id: "all" }];
};

const goCategory = (node: Category, node2: any) => {
  let url = "/" + $router.currentRoute.value.params.id;
  if (node2.level == 3) {
    url += "/" + node2.parent.data.title;
  }
  url += "/" + node2.data.title;
  $router.push(url);
};

findCategory();
</script>

<style scoped>
.category-box-wrapper {
  border: 1px solid #e5e5e5;
  width: 240px;
  padding: 30px;
  border-radius: 2px;
  box-shadow: 0 3px 3px #fafafa;
}

.text-category {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 30px;
}

.parent-node {
  font-weight: bold;
}
</style>
