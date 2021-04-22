import React from 'react';
/**
 * @param {string} dataField 读取的 props
 * 
 * const demo = { test: 123, foo: 456 }
 * 
 * <GetField dataField="data" data={demo}>
 *   <Child /> // get props test = 123 foo = 456
 * </GetField>
 */

export default function Binding({
  children,
  binding = {},
  ...rest
}) {
  let data = doBind(binding, rest);
  const childrenList = React.Children.toArray(children);
  return childrenList.map(child => /*#__PURE__*/React.cloneElement(child, { ...data,
    ...rest
  }));
}

function doBind(binding, data = {}) {
  let bindingData = {};
  Object.keys(binding).forEach(key => {
    //binding[key] = target field
    bindingData[binding[key]] = data[key];
  });
  return { ...bindingData
  };
}