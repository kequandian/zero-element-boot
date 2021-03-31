import React from 'react';

const filterMethod = require("../utils/filter");
/**
 * 过滤数据, 默认获取后将数据展开
 * @param {string} dataField  过滤的数据域 
 * @param {number} itemIndex  数据传入的数据是数组，即过滤具体的数据项
 */


export default function Filter({
  filter = {},
  children,
  ...rest
}) {
  const data = filterMethod(rest, filter); // 需要测试跟以下的区别

  return /*#__PURE__*/React.cloneElement(children, { ...data,
    ...rest
  }); // or
  // return React.Children.toArray(children).map(child => React.cloneElement(child, {
  //   ...data,
  //   //...rest,
  // }))
}