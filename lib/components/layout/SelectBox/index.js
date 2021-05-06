import React, { useImperativeHandle, forwardRef, useState } from 'react';

require("./index.less");
/**
 * line 分割线
 * 参数
 * Seperator: Seperator, 组件名
   props:{
      lineType:'solid' 分割线类型
   }
 */


export default /*#__PURE__*/forwardRef(function SelectBox(props, ref) {
  const {
    children,
    align = '',
    direction = '',
    justify = '',
    line = {},
    isLastItem
  } = props;
  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-SelectBox ${align} ${direction}`;
    }
  })); //分割线

  const Seperator = line.Seperator;

  function clickItem(props) {
    const {
      itemIndex
    } = props;
    props.onSelected(itemIndex);
    props.onItemClick(props);
  }

  const [onHover, setOnHover] = useState(false);
  return React.Children.map(children, child => {
    const childProps = child.props;
    const {
      isSelected
    } = childProps;

    const toggleHover = () => {
      const result = !onHover;
      setOnHover(result);
    };

    const fill = '#ffffff'; // const margin = '6px';
    // const padding = '10px'
    // let linewidth = '';
    // let activeLeftLine = line.activeLeftLine ? line.activeLeftLine : '3px';

    const hoverColor = '#EAEAEA'; // const activeColor = hoverColor;
    // const lineColor = '#4285F4';

    let bgColor = `${fill}`;

    if (onHover) {
      bgColor = `${hoverColor}80`;
    } else {
      bgColor = `${fill}ff`;
    } // if(isSelected){
    //   bgColor = activeColor;
    //   linewidth = activeLeftLine;
    // }


    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      onClick: () => clickItem(childProps),
      onMouseEnter: () => toggleHover(),
      onMouseLeave: () => toggleHover()
    }, child));
  });
});