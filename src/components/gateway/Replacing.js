import React from 'react';
import _ from 'lodash';
import { formatParams } from '@/components/utils/tools'

/**
 * 
 */
export default function Replacing({ children, dataSource, ...rest}) {
  
  const data = dataSource || rest || {}

  const convertData = doReplace(data)

  const childrenList = React.Children.toArray(children);
  return childrenList.map(child => React.cloneElement(child, {
      ...rest,
      ...convertData
  }))
}

export const useReplacing = (data) => {
    return doReplace(data)
}

// doBind
function doReplace(data) {
  const convertData = {}

  Object.keys(data).forEach(key => {
    if(data[key] && typeof data[key] === 'string' && data[key].indexOf('(') != -1 && data[key].indexOf(')') != -1){
        convertData[key] = formatParams(data[key], data);
    } else if(data[key] && typeof data[key] === 'object'){
        const childObject = {}
        Object.keys(data[key]).forEach(k => {
            if(data[key][k] && typeof data[key][k] === 'string' && data[key][k].indexOf('(') != -1 && data[key][k].indexOf(')') != -1){
              const childConvertValue = formatParams(data[key][k], data);
              childObject[k] = childConvertValue
              convertData[key] = childObject
            }
        })
    }
  })

  return { ...data, ...convertData  };
}

