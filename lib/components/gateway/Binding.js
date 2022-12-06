import React from 'react';
/**
 * @param {string} binding 数据绑定
 * 
 */

export default function Binding({
  children,
  binding = {},
  dataSource,
  ...rest
}) {
  const data = doBind(binding, dataSource ? dataSource : rest);
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