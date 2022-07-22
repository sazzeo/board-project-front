import { request } from "@/api";
import type { Posts } from "@/types/posts";

export default {
  findPosts(id: string, category: string) {},

  addPosts: (post: Posts): Promise<any> => {
    return request({
      url: "/api/board/posts",
      method: "post",
      data: { ...post },
    });
  },
};
