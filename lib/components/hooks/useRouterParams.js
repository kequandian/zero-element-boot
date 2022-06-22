import { useState, useEffect } from 'react';
/**
 * 返回当前路由
 * @param {} location 从 umi 框架获取的 location 参数 
 * @returns 
 */

export default function useRouterParams({
  location
}) {
  const [params, setParams] = useState({});
  useEffect(_ => {
    if (location && location.query) {
      setParams(location.query);
    } else {
      setParams({});
    }
  }, [location]);
  return [params];
}