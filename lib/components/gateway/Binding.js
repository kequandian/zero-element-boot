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
  const data = dataSource || rest || {};
  const bindindData = doBind(binding, data); // const finalData = dataSource ? {...rest, ...bindindData} : bindindData

  const childrenList = React.Children.toArray(children);
  return childrenList.map(child => /*#__PURE__*/React.cloneElement(child, { ...rest,
    ...bindindData
  }));
} // doBind

function doBind(binding, data) {
  const bindingData = {};
  Object.keys(binding).forEach(key => {
    const bindingKey = binding[key];
    bindingData[bindingKey] = data[key];
    delete data[key];
  });
  return { ...bindingData,
    ...data
  };
}