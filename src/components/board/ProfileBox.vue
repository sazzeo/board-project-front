<template>
  <div class="profile-box-wrapper">
    <div class="profile-image">image</div>
    <div class="name">
      {{ blogInfo.name }}<span> ({{ blogInfo.id }})</span>
    </div>
    <div class="sub-title">{{ blogInfo.subTitle }}</div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import type { BlogInfo } from "@/types/blog";
import { blog } from "@/stores/modules/blog";
import { computed } from "vue";

const id = $utils.getPathVariable("id");
const sBlog = blog();

const blogInfo = computed<BlogInfo>(() => {
  return sBlog.blogInfo;
});
</script>

<style scoped>
.profile-box-wrapper {
  border: 1px solid #e5e5e5;
  width: 240px;
  padding: 20px 30px;
  border-radius: 2px;
  box-shadow: 0 3px 3px #fafafa;
}

.profile-box-wrapper > * {
  font-size: 13px;
  margin: 7px 0;
}

.profile-image {
  width: 180px;
  height: 180px;
  background-color: #fdb814;
  text-align: center;
  line-height: 180px;
  color: white;
  font-size: 39px;
}

.name {
  font-weight: bold;
}
</style>
