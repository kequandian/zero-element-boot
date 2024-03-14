import React from 'react';
import _ from 'lodash';
import { formatParams } from '@/components/utils/tools'

/**
 * 
 */
export default function Replacing({ children, dataSource, ...rest}) {
  
  const data = dataSource || rest || {}
  const convertData = doReplace(data)

  console.log('Replacing data = ', data)
  console.log('Replacing convertData = ', convertData)

  const childrenList = React.Children.toArray(children);
  return childrenList.map(child => React.cloneElement(child, {
      ...rest,
      ...convertData
  }))
}

// doBind
function doReplace(data) {
  const convertData = {}

  Object.keys(data).forEach(key => {
    
    if(data[key].indexOf('(') != -1){
        convertData[key] = formatParams(data[key], data);
    }
      
  })

  return { ...data, ...convertData  };
}

