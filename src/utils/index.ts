/*전역함수 설정*/
const globalFunction = {
  //경로 구하는 함수
  getPathVariable: (path: string) => {
    const params: any = $router.currentRoute.value.params;
    const pathVariable = params[path];
    return pathVariable;
  },
  //url 만들어 주는 함수
  makeUrl: (urlList: Array<string>) => {
    let resUrl = "";
    _.forEach(urlList, (url) => {
      resUrl += "/" + url;
    });
    return resUrl;
  },
};

export default globalFunction;
