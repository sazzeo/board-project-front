<template>
  <div class="tag-list-wrapper">
    <span class="tag" v-for="tag in tagList">
      <a>#</a>
      <a>{{ tag.tagName }}</a>
      <a class="icon" @click="popTag(tag.tagName)"
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

<script setup>
const tag = ref("");
const count = ref(0);

const props = defineProps({
  tagList: {
    type: Array,
  },
});

const pushTag = () => {
  const tagValue = tag.value;
  if (props.tagList.findIndex((e) => e.tagName == tagValue) == -1) {
    props.tagList.push({ tagName: tagValue });
    count.value = props.tagList.length;
    emits("update:tagList", props.tagList);
  }
  tag.value = "";
};

const popTag = (tag) => {
  const index = props.tagList.findIndex((e) => e.tagName == tag);
  props.tagList.splice(index, 1);
  count.value = props.tagList.length;
  emits("update:tagList", props.tagList);
};

const emits = defineEmits(["update:tagList"]);
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
