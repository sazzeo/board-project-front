<template>
  <div v-if="props.data" class="tag-list-wrapper">
    <div class="text-tags">Tags</div>
    <div v-if="props.data.length == 0" class="tag-message">
      태그가 존재하지 않습니다.
    </div>
    <div class="tag-list" v-for="tag in props.data">
      <span class="hash">#</span>
      <span class="tag btn" @click="clickTag(tag.tagName)"
        >{{ tag.tagName }} ({{ tag.count }})</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogApi from "@/api/modules/blogApi";
import type { Tag } from "@/types/tag";
import { defineProps } from "vue";

const props = defineProps<{
  data: Array<Tag>;
}>();

const url = ref<string>("");
url.value = $utils.getPathVariable("id");

const clickTag = (tagName: string) => {
  $router.push($utils.makeUrl([url.value, "tags", tagName]));
};
</script>

<style scoped>
.tag-list-wrapper {
  border: 1px solid #e5e5e5;
  width: 240px;
  padding: 30px;
  border-radius: 2px;
  box-shadow: 0 3px 3px #fafafa;
}

.text-tags {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 30px;
}

.tag-list {
  margin: 7px 0px;
}

.tag-list > span {
  margin-right: 6px;
  font-weight: bold;
}

.hash {
  color: #fdb814;
}

.tag:hover {
  color: #fdb814;
  transition-duration: 0.1s;
}

.tag-message {
  font-size: 13px;
  color: #666666;
}
</style>
