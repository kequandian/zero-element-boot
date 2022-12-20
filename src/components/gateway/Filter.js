import React from 'react';
import doFilter from './doFilter.mjs'

/**
 * 过滤数据, 多种规侧
 * 规则#1 绑定, 变更数据源字段名称
 * {
 *    "gentle": "sex"
 * }
 * 规则#2 提取数据源数数据域不变
 * {
 *    "profile":”profile"
 * }
 * 规则#3 提取数据源数数据域数组不变
 * {
 *    "items":"items"
 * }
 * 规则#4 提取数据源数数据域并展开所有字段
 * {
 *    "profile":{}
 * }
 * 规则#5 提取数据源数数据域数组不变, 展开没有意义,与规则#3一致
 * {
 *    "items":[]
 * }
 * @param {object} filter  过滤的数据域 
 * @param {object} dataSource  过滤的数据源
 */
export default function Filter({ children, filter={}, dataSource, ...rest }) {
  const data = dataSource || rest || {}

  const filtereddata =  (typeof filter==='string') ? data[filter] : doFilter(filter, data)

  // dataSource present, just filter the dataSource,  no dataSource, filter the rest
  const finalData = dataSource ?  filtereddata :  {...rest, ...filtereddata}

  return React.Children.toArray(children).map(child => React.cloneElement(child, {
      ...finalData
  }))
}
