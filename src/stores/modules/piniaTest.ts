import { defineStore } from "pinia";

export const piniaTest = defineStore(
  "piniaTest",
  () => {
    const list = ref<string[]>(new Array<string>());
    const push = (item: string) => {
      list.value.push(item);
    };

    return { list, push };
  },
  {
    persist: {
      key: "test",
    },
  }
);
