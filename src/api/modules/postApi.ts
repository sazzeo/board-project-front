import { request } from "@/api";
import type { Posts } from "@/types/posts";

export default {
  findPosts: (
    url: string,
    category1: string,
    category2: string
  ): Promise<any> => {
    let categoryUrl = url + "/category";
    if (category1 != null) {
      categoryUrl += "/" + category1;
    }
    if (category2 != null) {
      categoryUrl += "/" + category2;
    }
    console.dir(categoryUrl);

    return request({
      url: "/api/board/auth/posts/" + categoryUrl,
      method: "get",
    });
  },

  findPost: (postsSeq: string): Promise<any> => {
    return request(
      {
        url: "/api/board/auth/posts/" + postsSeq,
        method: "get",
      },
      true
    );
  },

  addPosts: (post: Posts): Promise<any> => {
    return request({
      url: "/api/board/posts",
      method: "post",
      data: { ...post },
    });
  },

  deletePosts: (postsSeq: number): Promise<any> => {
    return request({
      url: "/api/board/posts/" + postsSeq,
      method: "delete",
    });
  },
};
