import React from 'react';
import _ from 'lodash';

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


// doBind
function doBind(binding, data) {
  const bindingData = {}

  // console.log('binding == ', binding)
  let arrDataKey = []
  Object.keys(binding).forEach(key => {
      const bindingKey = binding[key]
      if(bindingKey.indexOf('.') > -1){
        const ls = bindingKey.split('.')
        const dataKey = ls.shift()
        const childKey = ls[ls.length - 1]
        
        const findItem = arrDataKey.find((item,index) => item === dataKey)
        if(!findItem){
          arrDataKey.push(dataKey)
          const newObj = bindingData[dataKey] = {}
          newObj[childKey] = data[key]
          bindingData[dataKey] = newObj
        }else{
          bindingData[dataKey][childKey] = data[key]
        }
      }else{
        if(data[key]){
          bindingData[bindingKey] = data[key];
        }
      }
      // delete data[key]
  })

  // console.log('bindingData == ', binding, bindingData, data)

  return { ...bindingData, ...data };
}

