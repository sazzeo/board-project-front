<template>
  <el-button :plain="true" @click="open">Show message</el-button>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";

const open = () => {
  ElMessage("this is a message.");
};
</script>

<style scoped></style>
