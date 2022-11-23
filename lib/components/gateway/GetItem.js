import React from 'react';

/**
 * 读取 props 的数据并展开传递到子组件
 * 如果 props 数据为列表，通过 itemIndex 指定获取的数据项索引
 * 其他数据不往下传
 * @param {array} items 数据源
 * @param {int} itemIndex 索引
 * @param {int} _ 索引，同itemIndex
 * 
 */
export default function GetItem({
  children,
  dataSource,
  items = dataSource,
  _,
  itemIndex = _,
  ...rest
}) {
  const data = (items ? items[itemIndex] : rest[itemIndex]) || {};
  const childrenList = React.Children.toArray(children);
  return childrenList.map(child => /*#__PURE__*/React.cloneElement(child, {
    ...data,
    ...rest
  }));

  // do not work below ...
  // React.Children.map(children, child => {
  //   return React.cloneElement(child, {
  //       ...data,
  //       ...rest
  //   })  
  // })
}