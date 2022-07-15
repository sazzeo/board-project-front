import type { Member } from "@/types/member";
import type { AxiosPromise } from "axios";
import type { LoginMember } from "@/types/member";
import { request } from "@/api";

export default {
  addMember: (member: Member): Promise<any> => {
    return request({
      url: "/api/board/auth/join",
      method: "post",
      data: { ...member },
    });
  },
  loginMember: (member: LoginMember): Promise<any> => {
    return request({
      url: "/api/board/auth/login",
      method: "post",
      data: { ...member },
    });
  },
  modifyMember: (member: any): Promise<any> => {
    return request({
      url: "/api/board/user",
      method: "put",
      data: { ...member },
    });
  },
};
