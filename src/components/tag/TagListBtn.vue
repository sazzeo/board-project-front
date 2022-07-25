<template>
  <div v-if="tagList.length != 0" class="tag-list-wrapper">
    <div v-for="tag in tagList" class="tags">
      <span class="tag btn" @click="clickTag(tag.tagName)">
        #{{ tag.tagName }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  tagList: {
    type: Array,
  },
});

const clickTag = (tagName: string) => {
  $router.push("/posts/tags/" + tagName);
};
</script>

<style scoped>
.tag-list-wrapper {
  display: flex;
}

.tag {
  color: #fdb814;
  margin-right: 15px;
  font-weight: bold;
  font-size: 15px;
}
</style>
