import React from 'react';
import _ from 'lodash';
import doBind from './doBind.mjs'

/**
 * @param {string} binding 数据绑定
 * 
 */
export default function Binding({ children, binding={}, dataSource, ...rest}) {
  
  const data = dataSource || rest || {}
  const bindindData = doBind(binding, data)

  // const finalData = dataSource ? {...rest, ...bindindData} : bindindData

  const childrenList = React.Children.toArray(children);
  return childrenList.map(child => React.cloneElement(child, {
      ...rest,
      ...bindindData
  }))
}

export const bindingConvert = (binding, data) => {
  if(!binding){
    return data
  }
  if(binding && Array.isArray(data)) {
    return data.map(item => doBind(binding, item))
  }
  return doBind(binding, data)
}
