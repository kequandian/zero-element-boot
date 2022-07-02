import React from 'react';

/**
 * 多次数据转换
 * @param {string} dataField 读取的 props
 * 
 **/

export default function Chain({ children, chain=[], dataSource, ...rest }) {
  const data = dataSource || rest || {}

  const chaindata = chain.length>0 ? (doChain(chain, data)) : {}
  
  const childrenList = React.Children.toArray(children);
  return childrenList.map(child => React.cloneElement(child, {
    ...chaindata,
    ...rest
  }))
}


function doChain(chain, data) {
  let chaindata = {}

  chain.map(item, {
        

  })

  
  return { ...chaindata };
}
