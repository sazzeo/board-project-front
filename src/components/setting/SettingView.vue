<template>
  <div class="setting-wrapper">
    <WebHeader />
    <RouterView />
    <WebFooter />
  </div>
</template>

<script setup lang="ts">
import WebHeader from "@/components/layout/WebHeader.vue";
import WebFooter from "@/components/layout/WebFooter.vue";
</script>

<style scoped></style>
