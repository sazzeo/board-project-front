import { request } from "@/api";
import type { Posts } from "@/types/posts";

export default {
  findPosts: (
    url: string,
    category1: string,
    category2: string
  ): Promise<any> => {
    const categoryUrl =
      category2 != null ? "/" + category1 + "/" + category2 : "/" + category1;

    return request({
      url: "/api/board/auth/posts/" + url + categoryUrl,
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

  addPosts: (post: Posts, tagNameList: Array<string>): Promise<any> => {
    return request({
      url: "/api/board/posts",
      method: "post",
      data: { posts: { ...post, tagsDto: { tagName: [...tagNameList] } } },
    });
  },

  deletePosts: (postsSeq: number): Promise<any> => {
    return request({
      url: "/api/board/posts/" + postsSeq,
      method: "delete",
    });
  },
};
