import { defineStore } from "pinia";

export const post = defineStore("post", () => {
  const selectCategoryName = ref<string>();

  const setCategoryName = (url: string) => {
    selectCategoryName.value = $utils.getPathVariable(url);
  };

  return { selectCategoryName, setCategoryName };
});
