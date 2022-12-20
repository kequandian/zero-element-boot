import React, { useState, useEffect } from 'react';
import queryMethod from '@/components/utils/promiseAjax';
const useLayout = require('@/components/hooks/useLayout');

/**
 * @param {string} api 获取数据源的 API
 * @param {object} queryData 访问参数
 * @param {string} token 授权凭证
 */
export default function APIContainer(props) {
  const { API, api=API, queryData={}, token, children, ...rest } = props;

  const [layoutRef, { getClassName }] = useLayout();

  const [data, setData] = useState({});

  useEffect(_ => {
    queryMethod(api, queryData, token)
      .then(responseData => {
        if (responseData && responseData.code === 200) {
          setData(responseData.data || responseData);
        }
      })
  }, [api]);

  return <div
      className={getClassName()}
    >
      {React.Children.toArray(children).map(child => {
        return React.cloneElement(child, {
          ref: layoutRef, 
          dataSource: data,
          ...rest
        })
      })}
  </div>
}


function regQueryMethod(func) {
  queryMethod = func;
}

export {
  regQueryMethod,
}

