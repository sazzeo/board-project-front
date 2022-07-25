<template>
  <div class="tag-list-wrapper">
    <div class="text-tags">Tags</div>
    <div class="tag-list" v-for="tag in tagCountList">
      <span class="hash">#</span>
      <span class="tag btn" @click="clickTag(tag.tagName)"
        >{{ tag.tagName }} ({{ tag.count }})</span
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
  margin: 15px 0px;
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
</style>
