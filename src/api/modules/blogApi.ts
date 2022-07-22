import type { Member } from "@/types/member";
import type { AxiosPromise } from "axios";
import type { LoginMember } from "@/types/member";
import { request } from "@/api";
import type { Category } from "@/types/category";

export default {
  findBlogProfile: (url: string): Promise<any> => {
    return request({
      url: "/api/board/auth/" + url + "/blog-profile",
      method: "get",
    });
  },
  findUserBlogProfile: (): Promise<any> => {
    return request({
      url: "/api/board/user/blog-profile",
      method: "get",
    });
  },
  modifyBlog: (blog: any): Promise<any> => {
    return request({
      url: "/api/board/blog",
      method: "put",
      data: { ...blog },
    });
  },
  findCategory: (): Promise<any> => {
    return request({
      url: "/api/board/category",
      method: "get",
    });
  },
  findCategoryByUrl: (url: string): Promise<any> => {
    return request({
      url: "/api/board/auth/" + url + "/category",
      method: "get",
    });
  },
  findCategoryForSelectBox: (): Promise<any> => {
    return request({
      url: "/api/board/category/select-box",
      method: "get",
    });
  },
  modifyCategory: (category: Array<Category>): Promise<any> => {
    return request({
      url: "/api/board/category",
      method: "put",
      data: [...category],
    });
  },
};
