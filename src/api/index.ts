import type { AxiosPromise, AxiosRequestHeaders } from "axios";
import { auth } from "@/stores/modules/auth";
import axios, { AxiosError } from "axios";
import type { AxiosParams } from "@/types/axios";

//요청하는 함수 자동으로 헤더를 붙여줌
// export const request = (axiosParams: AxiosParams): AxiosPromise => {
//   const authorization = auth();
//   const authToken: string = authorization.authToken || "";
//   const url = axiosParams.url;
//   const method = axiosParams.method;
//   const params = axiosParams.params;
//   const data = axiosParams.data;
//
//   const defaultHeader = {
//     "Content-Type": "application/json; charset=utf-8",
//     //Authorization: authToken,
//   };
//
//   const defaultObject = {
//     url: url,
//     method: method,
//   };
//
//   let resParams;
//
//   if (method == "get") {
//     resParams = {
//       headers: { ...defaultHeader },
//       ...defaultObject,
//       params: params,
//     };
//   } else if (method == "post" || method == "delete" || method == "update") {
//     const authHeader = {
//       ...defaultHeader,
//       Authorization: authToken,
//     };
//
//     resParams = {
//       //만약 url에 auth가 들어가면 authHeader로 셋팅
//       headers:
//         url.indexOf("/auth") > -1 ? { ...authHeader } : { ...defaultHeader },
//       ...defaultObject,
//       data: data,
//     };
//   }
//
//   return axios({
//     ...resParams,
//   });
// };

//요청하는 함수 자동으로 헤더를 붙여줌
export const request = async (axiosParams: AxiosParams): Promise<any> => {
  const authorization = auth();
  const authToken: string = authorization.authToken || "";
  const url = axiosParams.url;
  const method = axiosParams.method;
  const params = axiosParams.params;
  const data = axiosParams.data;

  const defaultHeader = {
    "Content-Type": "application/json; charset=utf-8",
    //Authorization: authToken,
  };

  const defaultObject = {
    url: url,
    method: method,
  };

  let resParams;

  if (method == "get") {
    resParams = {
      headers: { ...defaultHeader },
      ...defaultObject,
      params: params,
    };
  } else if (method == "post" || method == "delete" || method == "update") {
    const authHeader = {
      ...defaultHeader,
      Authorization: authToken,
    };

    resParams = {
      //만약 url에 auth가 들어가면 authHeader로 셋팅
      headers:
        url.indexOf("/auth") > -1 ? { ...authHeader } : { ...defaultHeader },
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
    return Promise.reject(e.response.data);
  }
};
