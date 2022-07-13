<template>
  <!--  헤더랑 붙어있는 페이지-->
  <div class="main-wrapper">
    <WebHeader />
    <div class="router-wrapper">
      <RouterView />
    </div>
    <WebFooter />
  </div>
</template>

<script setup lang="ts">
import WebHeader from "./WebHeader.vue";
import WebFooter from "./WebFooter.vue";
</script>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
}

.router-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
}
</style>
