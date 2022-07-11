import { defineStore } from "pinia";

export const auth = defineStore(
  "auth",
  () => {
    const authToken = ref<string>();

    const setAuthToken = (token: string) => {
      authToken.value = token;
    };

    return { authToken, setAuthToken };
  },
  {
    persist: {
      key: "auth",
    },
  }
);
