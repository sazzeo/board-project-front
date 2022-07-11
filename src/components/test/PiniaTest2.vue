<template>
  <div>Test2</div>
</template>

<script setup lang="ts">
import { piniaTest } from "@/stores/modules/piniaTest";

const test = piniaTest();
test.push("test2-1");
test.push("test2-2");

console.log(test.list);
</script>

<style scoped></style>
