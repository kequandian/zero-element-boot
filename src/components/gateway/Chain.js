import React from 'react';
import doChain from   './doChain.mjs'

/**
 * 多次数据转换,并保留原数据不变
 * "_": 0,  如果数据源是数组, 值代表数据下标
 * “|”: {}, 过滤数据源, 仅传递过滤字段, 其他字段不传递
 * @param {array} chain 连续转换规则
 * @param {objec} dataSource 数据源
 **/

export default function Chain({ children, chain=[], dataSource, ...rest }) {
  const data = dataSource || rest || {}
  // console.log('Chain.dataSource=', dataSource)
  // console.log('Chain.rest=', rest)

  const chaindata = chain.length>0 ? (doChain(chain, data)) : {}
  const processedDataSource = dataSource ? {dataSource: chaindata} : chaindata

  return React.Children.toArray(children).map(child => React.cloneElement(child, {
    ...processedDataSource,
    ...rest
  }))
}
