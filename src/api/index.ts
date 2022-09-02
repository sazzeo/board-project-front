import type { AxiosPromise, AxiosRequestHeaders } from "axios";
import { auth } from "@/stores/modules/auth";
import axios, { AxiosError } from "axios";
import type { AxiosParams } from "@/types/axios";

//요청하는 함수 자동으로 헤더를 붙여줌
export const request = async (
  axiosParams: AxiosParams,
  isAuth?: boolean
): Promise<any> => {
  const authorization = auth();
  const authToken: string = authorization.member?.authToken || "";
  const url = axiosParams.url;
  const method = axiosParams.method;
  const params = axiosParams.params;
  const data = axiosParams.data;

  // console.log(data);

  if (isAuth == null) {
    isAuth = false;
  }

  const defaultHeader = {
    "Content-Type": "application/json; charset=utf-8",
    //Authorization: authToken,
  };

  const defaultObject = {
    url: url,
    method: method,
  };

  let resParams;

  const authHeader = {
    ...defaultHeader,
    Authorization: authToken,
  };

  if (method == "get") {
    resParams = {
      headers:
        url.indexOf("/auth") == -1 || isAuth
          ? { ...authHeader }
          : { ...defaultHeader },
      ...defaultObject,
      params: params,
    };
  } else if (method == "post" || method == "delete" || method == "put") {
    resParams = {
      //만약 url에 auth가 안들어가면 authHeader로 셋팅
      headers:
        url.indexOf("/auth") == -1 || isAuth
          ? { ...authHeader }
          : { ...defaultHeader },
      ...defaultObject,
      data: data,
    };
  }

  try {
    const res = await axios({
      ...resParams,
    });
    return Promise.resolve(res.data);
  } catch (e: any) {
    //만약 401 인가 에러가 나면?
    if (e.response.status == 401) {
      authorization.deleteAuthToken();
      await $router.push("/login");
      return;
    }
    return Promise.reject(e.response.data);
  }
};
