/**
 * 返回当前路由
 * @param {} location 从 umi 框架获取的 location 参数 
 * @returns 
 */
module.exports = function useRouterParams({
  location
}) {
  if (location && location.query) {
    return location.query;
  }

  return {};
};