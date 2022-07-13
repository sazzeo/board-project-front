<template>
  <div class="error-wrapper">
    <div class="error-box">
      <div style="font-size: 300px">404</div>
      <div>페이지를 찾을 수 없습니다.</div>
      <button class="btn-back">돌아가기</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.error-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #f3f1ed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-box > * {
  font-weight: bold;
  color: #c17546;
  font-size: 30px;
}

.btn-back {
  border: #c17546 solid thin;
  border-radius: 20px;
  padding: 6px 15px;
  flex-shrink: 0;
  font-size: 20px;
  margin: 20px;
}
</style>
