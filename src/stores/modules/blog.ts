import { defineStore } from "pinia";
import { BlogInfo } from "@/types/blog";
import blogApi from "@/api/modules/blogApi";
export const blog = defineStore("blog", () => {
  const blogInfo = ref<BlogInfo>(new BlogInfo());

  const initBlogInfo = async (url: string): Promise<any> => {
    const res = await blogApi.findBlogProfile(url);
    console.dir(res);
    blogInfo.value = res;
  };

  return { blogInfo, initBlogInfo };
});
