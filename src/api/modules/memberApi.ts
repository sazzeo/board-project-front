import type { Member } from "@/types/member";
import type { AxiosPromise } from "axios";
import type { LoginMember } from "@/types/member";
import { request } from "@/api";

export default {
  addMember: (member: Member): AxiosPromise => {
    return request({
      url: "/api/board/auth/join",
      method: "post",
      data: { ...member },
    });
  },
  loginMember: (member: LoginMember): AxiosPromise => {
    return request({
      url: "/api/board/auth/login",
      method: "post",
      data: { ...member },
    });
  },
};
