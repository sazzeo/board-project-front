<template>
  <div class="category-box-wrapper">
    <div class="text-category">Categories</div>
  </div>
</template>

<script>
export default {
  name: "CategoryBox",
};
</script>

<style scoped>
.category-box-wrapper {
  border: 1px solid #e5e5e5;
  width: 240px;
  padding: 30px;
  border-radius: 2px;
  box-shadow: 0 3px 3px #fafafa;
}

.text-category {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 30px;
}
</style>
