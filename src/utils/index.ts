/*전역함수 설정*/
const globalFunction = {
  getPathVariable: (path: string) => {
    const params: any = $router.currentRoute.value.params;
    const pathVariable = params[path];
    return pathVariable;
  },
};

export default globalFunction;
