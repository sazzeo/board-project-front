import type { Member } from "@/types/member";
import type { AxiosPromise } from "axios";
import type { LoginMember } from "@/types/member";
import { request } from "@/api";

export default {
  findBlogProfile: (url: string): Promise<any> => {
    return request({
      url: "/api/board/auth/" + url + "/blog-profile",
      method: "get",
    });
  },
};
