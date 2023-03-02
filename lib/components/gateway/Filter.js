import React from 'react';
import doFilter from "./doFilter.mjs";
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
 * 规则#5 提取数据源数数据域数组,并返回数据
 * {
 *    "items":[]
 * }
 * 规则#6 过滤掉所有数据,仅传递"|"键值filter过滤的数据
 * {
 *    "_": {"profile":{}}
 * }
 * @param {object} filter  过滤的数据域 
 * @param {object} dataSource  过滤的数据源
 */

export default function Filter({
  children,
  filter = {},
  dataSource,
  ...rest
}) {
  const data = dataSource || rest || {}; // console.log('Filter.dataSource=', dataSource)
  // console.log('Filter.rest=', rest)

  const isPureFilter = filter["_"];

  const _filter = filter["_"] || filter;

  const filtereddata = typeof filter === 'string' ? data[_filter] : doFilter(_filter, data);
  const configData = isPureFilter ? filtereddata : { ...rest,
    ...filtereddata,
    dataSource: filtereddata
  };
  return React.Children.toArray(children).map(child => /*#__PURE__*/React.cloneElement(child, { ...configData
  }));
}