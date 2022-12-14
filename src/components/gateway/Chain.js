import React from 'react';

/**
 * 多次数据转换
 * @param {array} chain 连续转换规则
 * @param {objec} dataSource 数据源
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
  // final result
  let chaindata = {}
  //let skipBinding = {}

  chain.map(rule =>{
    // 
    const itemData = {}

    Object.keys(rule).forEach(key => {

      // use new chaindata instead of dataSource
      const data = (Object.keys(chaindata).length>0 ? chaindata : undefined) || dataSource

      // if key == _, means get item, and general the first rule
      if(key === '_' && Array.isArray(data)){
         //e.g.  "_": 0
        const dataIndex = rule['_']
        const dataItem = data[dataIndex]
        itemData = {...dataItem, ...itemData}
        chaindata = itemData

      } else {
        const keyValue = rule[key]

          if(Array.isArray(keyValue) && keyValue.length==0){
              //
              // if empty [], means only get the array expand the array 

              itemData = data[key]
              // clean up chaindata
              chaindata = Array.isArray(chaindata) ?  (chaindata.concat(itemData)) : itemData
          
        }else if(typeof keyValue === 'object' && Object.keys(keyValue).length==0){
              //
              // if empty {}, means get all the object

              const dataKey = data[key]
              itemData = {...dataKey, ...itemData}
  
        }else if(typeof keyValue === 'string'){
              
              // 
              // do binding

              // if index from chain data is null, then index from dataSource
              itemData[keyValue] = data[key] || dataSource[key]
  
              if(chaindata[key]){
                  delete chaindata[key];
              }

              // record skipBinding
              //skipBinding[key] = key
        }
      }
    })

    // end up array for chaindata
    chaindata =  Array.isArray(chaindata) ?  chaindata : Object.assign(itemData, chaindata)
  })

  // // return { ...chaindata, ...dataSource };
  // let lastDataSource = dataSource
  // Object.keys(skipBinding).forEach(key => {
  //     delete lastDataSource[key]
  // })
  // return Object.assign(chaindata, lastDataSource)
  return Object.assign(chaindata, dataSource)
}
