import React from 'react';


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
 * @param {string} _  仅过滤数据, 用于测试目的
 */
export default function Filter({ children, filter={}, dataSource, __, ...rest }) {
  const data = dataSource || rest || {}
  const filtereddata =  (typeof filter==='string') ? data[filter] : doFilter(filter, data)

  // for test purpose
  if(__){
    return filtereddata
  }
  // end test

  // dataSource present, just filter the dataSource,  no dataSource, filter the rest
  const finalData = dataSource ? {...filtereddata, ...rest} : filtereddata

  return React.Children.toArray(children).map(child => React.cloneElement(child, {
      ...finalData
  }))
}


function doFilter(filter={}, data={}){
    let filterData = {}
  
    Object.keys(filter).forEach(key => {
      const filterValue = filter[key]

      // 1. the same as binding
      if(typeof filterValue==='string'){
        // just convert the data field if normal value
        filterData[filterValue] = data[key];

      }else if(Array.isArray(filterValue)) {
        // just get its array without change, only get the array makes no sense

        // filterValue can be any type of value, string or empty array []
        filterData[key] = data[key];

      }else if(typeof filterValue == 'object'){

        // check if filterValue is empty object:{} or string
        if(typeof filterValue==='string'){
            filterData[key] = data[key];
        }else if(Object.keys(filterValue).length==0){
            // expand the data within {}
            const filteredObject = data[key]
            Object.assign(filterData, {...filteredObject})
        }
      }
    })

    return filterData
}