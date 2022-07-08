import React from 'react';

// 需要测试跟以下的区别
// return React.cloneElement(children, {
//     ...rest,
//     ...filtereddata
//   })

/**
 * 过滤数据, 默认获取后将数据展开
 * @param {string} filter  过滤的数据域 
 * @param {string} _  仅过虑数据

 */
export default function Filter({ children, filter={}, dataSource, _, ...rest }) {
  const data = dataSource || rest || {}
  const filtereddata =  (typeof filter === 'string') ? data[filter] : filterData(data, filter)

  if(_){
    return filtereddata
  }

  // if (Array.isArray(data)) {
  //   field = field[itemIndex];
  // }
  return React.Children.toArray(children).map(child => React.cloneElement(child, {
    ...filtereddata,
    ...rest,
  }))
}


function filterData(data={}, filter={}){
    let filterData = {}

    // const filter = {
    //   name: 'title',
    //   cities: [],
    //   orders: {}
    //}
  
    Object.keys(filter).forEach(key => {
      const filterValue = filter[key]

      // 1. the same as binding
      if(typeof filterValue === 'string'){
        // just convert the data field if normal value
        filterData[filterValue] = data[key];

      }else if(Array.isArray(filterValue)) {
        // just get its array, must be array, only get the fiel makes no sense
        filterData = data[key];

      }else if(typeof filterValue == 'object'){
        // expend the data if data object except array
        const filterObject = data[key]
        filterData = { ...filterObject, ...filterData }
      }
  
    })
    return { ...filterData };
}