<template>
  <div class="tag-list-wrapper">
    <span class="tag" v-for="tag in tagList">
      <a>#</a>
      <a>{{ tag }}</a>
      <a class="icon" @click="popTag(tag)"
        ><el-icon class="icon" :size="15"><Close /></el-icon
      ></a>
    </span>
    <div class="input-tags-wrapper" v-if="count < 10">
      #<input
        v-model="tag"
        @keyup.enter="pushTag"
        class="input-tags"
        type="text"
        placeholder="태그"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Tag } from "@/types/tag";

const tag = ref("");
const count = ref(0);
const tagList = ref<Array<string>>();

//const props = defineProps<{ tagList: Array<Tag> }>();
tagList.value = []; //props.tagList || []; //tagList 초기셋팅

const emits = defineEmits(["update:tagList"]);

const pushTag = () => {
  const tagValue = tag.value;
  if (tagList.value?.indexOf(tagValue) == -1) {
    tagList.value?.push(tagValue);
    emits("update:tagList", tagList.value);
  }
  tag.value = "";
};

const popTag = (tag: string) => {
  const index = tagList.value?.indexOf(tag);
  tagList.value?.splice(index || 0, 1);
  emits("update:tagList", tagList.value);
};
</script>

<style scoped>
.tag-list-wrapper {
  width: 920px;
  margin: 20px 0px;
  font-size: 13px;
  display: flex;
  flex-wrap: wrap;
}

.tag {
  margin: 0px 5px;
}

.input-tags {
  border: none;
}

.input-tags:focus {
  outline: none;
}

span {
  display: flex;
}

.icon {
  display: flex;
  align-items: center;
}
</style>
