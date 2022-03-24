import React from 'react';
/**
 * 读取 props 的数据并展开传递到子组件
 * 如果 props 数据为列表，通过 itemIndex 指定获取的数据项索引
 * 其他数据不往下传
 * @param {string} dataField 读取的 props
 * 
 * const demo = { test: 123, foo: 456 }
 * 
 * <GetField dataField="data" data={demo}>
 *   <Child /> // get props test = 123 foo = 456
 * </GetField>
 */

export default function GetField({
  children,
  dataField,
  itemIndex = 0,
  ...rest
}) {
  let data = rest[dataField] || {};

  if (Array.isArray(data)) {
    data = data[itemIndex];
  }

  const childrenList = React.Children.toArray(children);
  return childrenList.map(child => /*#__PURE__*/React.cloneElement(child, { ...data //...rest,

  }));
}