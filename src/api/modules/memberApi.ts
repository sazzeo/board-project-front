import type { Member } from "@/types/member";
import axios, { type AxiosPromise } from "axios";
import { LoginMember } from "@/types/member";

export default {
  addMember: (member: Member) => {
    return axios({
      url: "/api/board/auth/join",
      method: "post",
      data: { ...member },
    });
  },
  loginMember: (member: LoginMember): AxiosPromise => {
    return axios({
      url: "/api/board/auth/login",
      method: "post",
      data: { ...member },
    });
  },
};
