<template>
  <!--  헤더랑 붙어있는 페이지-->
  <div class="main-wrapper">
    <WebHeader />
    <RouterView />
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
</style>
