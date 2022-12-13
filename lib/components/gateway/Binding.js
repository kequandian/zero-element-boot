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
  //旧代码
  const data = doBind(binding, dataSource ? dataSource : rest); //只获取 binding数据 或 数据源
  // const data = binding && JSON.stringify(binding) !== '{}' ? doBind(binding, (dataSource ? dataSource : rest) ) : rest

  const childrenList = React.Children.toArray(children);
  return childrenList.map(child => /*#__PURE__*/React.cloneElement(child, { ...rest,
    ...data
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