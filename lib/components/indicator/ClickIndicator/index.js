import React from 'react';

/**
 * 使用例子
 * container：'',
   presenter -> children
   [{
        xname: 'JarItem',
        indicator:{
            xname:'ClickIndicator',
            binding: {
                "value":"value"
            }
        },
    }]
 * 
 * @param { object } indicatorData 为上述 binding 处理的参数
 * 
 */

export default function Index(props) {
  const {
    children,
    onItemClick,
    indicatorData,
    ...rest
  } = props;
  function itemClick() {
    if (onItemClick) {
      onItemClick(indicatorData);
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    },
    onClick: () => itemClick()
  }, React.Children.map(children, child => child));
}