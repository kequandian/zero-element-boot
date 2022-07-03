import React from 'react';

/**
 * 多次数据转换
 * @param {string} dataField 读取的 props
 * 
 **/

export default function Chain({ children, chain=[], dataSource, ...rest }) {
  const data = dataSource || rest || {}

  const chaindata = chain.length>0 ? (doChain(chain, data)) : {}

  //
  return React.Children.toArray(children).map(child => React.cloneElement(child, {
    ...chaindata,
    ...rest
  }))
}


function doChain(chain, dataSource) {
  let chaindata = {}

  chain.map(item =>{
    // 
    let itemData = {}

    Object.keys(item).forEach(key => {
       const data = (Object.keys(chaindata).length>0 ? chaindata : undefined) || dataSource

      // if key == _, means get item
      if(key === '_' && Array.isArray(data)){
        const dataIndex = item[key]
        const dataItem = data[dataIndex]
        itemData = {...dataItem, ...itemData}
        chaindata = itemData

      } else {
        const keyValue = item[key]

        if(Array.isArray(keyValue) && keyValue.length==0){
          // if empty [], means only get the array expand the array 
          itemData = data[key]
          // clean up chaindata
          chaindata = Array.isArray(chaindata) ?  (chaindata.concat(itemData)) : itemData
          
        }else if(typeof keyValue === 'object' && Object.keys(keyValue).length==0){
          // if empty {}, means get all the object
          const dataKey = data[key]
          itemData = {...dataKey, ...itemData}

        }else if(typeof keyValue === 'string'){
           // doBinding
           itemData[keyValue] = data[key]

           delete chaindata[key];
        }
      }

    })

    // end up array for chaindata
    chaindata =  Array.isArray(chaindata) ?  chaindata : {...itemData, ...chaindata}
  })

  
  return { ...chaindata };
}
