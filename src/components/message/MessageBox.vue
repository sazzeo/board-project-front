<template>
  <el-button text @click="open">Click to open Message Box</el-button>
</template>

<script lang="ts" setup>
import { ElMessageBox } from 'element-plus'

const open = () => {
  ElMessageBox.confirm(
      'It will permanently delete the file. Continue?',
      'Warning',
      {
        type: 'warning',
      }
  )
}
</script>