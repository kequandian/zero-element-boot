import React, { useState, useEffect } from 'react';
import { bindingConvert } from '@/components/gateway/Binding'
import { handleFilter } from '@/components/gateway/doFilter.mjs';
import queryMethod from '@/components/utils/request';
const useLayout = require('@/components/hooks/useLayout');

/**
 * @param {string} api 获取数据源的 API
 * @param {object} queryData 访问参数
 * @param {string} token 授权凭证
 * @param {object} converter 转换数据
 * @param {string} converterOption 转换类型 [ binding, filter ]
 */
export default function APIContainer(props) {
  const { children, API, api = API, queryData = {}, token, 
    converter,
    converterOption = 'binding',
    ...rest 
  } = props;

  const [layoutRef, { getClassName }] = useLayout();

  const [data, setData] = useState([]);
  let _newData = {}

  useEffect(_ => {
    if (!api) {
      console.error('APIContainer api 为空')
      return
    }
    queryMethod(api, queryData, token)
      .then(responseData => {
        if (responseData && responseData.code === 200) {
          const originData = responseData.data || responseData
          if(converterOption === 'binding' && converter){
            _newData = bindingConvert(converter, originData)
          }else if(converterOption === 'filter' && converter){
            _newData = handleFilter(converter, originData)
          }else{
            _newData = originData
          }
          setData(_newData);
        }
      })
  }, [api]);

  return <div
    className={getClassName()}
  >
    {
      
      React.Children.toArray(children).map(child => {
        if(data && JSON.stringify(data) != "{}" && JSON.stringify(data) != "[]"){
          return React.cloneElement(child, {
            ref: layoutRef,
            ...rest,
            dataSource: data,
          })
        }else{
          return React.cloneElement(child, {
            ref: layoutRef,
            ...rest
          })
        }
        
      }
      )
    }
  </div>
}


function regQueryMethod(func) {
  queryMethod = func;
}

export {
  regQueryMethod,
}

