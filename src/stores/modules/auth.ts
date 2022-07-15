import { defineStore } from "pinia";
import { computed } from "vue";
import type { LoginMember } from "@/types/member";
import memberApi from "@/api/modules/memberApi";
import type { Member } from "@/types/member";

export const auth = defineStore(
  "auth",
  () => {
    const member = ref<Member>();

    const isLogged = computed<boolean>(() => {
      return Boolean(member.value && true);
    });

    const initAuthToken = async (loginMember: LoginMember): Promise<any> => {
      try {
        const res = await memberApi.loginMember(loginMember);
        member.value = res;
      } catch (e) {
        return Promise.reject(e);
      }
    };

    const deleteAuthToken = () => {
      member.value = undefined;
    };

    return {
      isLogged,
      member,
      initAuthToken,
      deleteAuthToken,
    };
  },
  {
    persist: {
      key: "test-byulog",
      paths: ["member"],
    },
  }
);
