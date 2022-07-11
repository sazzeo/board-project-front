<template>
  <div>test1</div>
  <input v-model="var1" />
  <div>{{ var1 }}</div>
</template>

<script setup lang="ts">
import { piniaTest } from "@/stores/modules/piniaTest";

const test = piniaTest();
test.push("test1-1");
test.push("test1-2");

console.log(test.list);
</script>

<style scoped></style>
