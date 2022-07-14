<template>
  <div class="board-page-wrapper">
    <div class="post-view">
      <PostView />
    </div>
    <div class="side-wrapper">
      <div>
        <ProfileBox />
      </div>
      <div>
        <CategoryBox />
      </div>
      <div>
        <TagBox />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PostView from "@/components/board/PostView.vue";
import TagBox from "@/components/board/TagBox.vue";
import ProfileBox from "@/components/board/ProfileBox.vue";
import CategoryBox from "@/components/board/CategoryBox.vue";
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
