import React, { useState } from 'react';
import selectedIcon from "../../../assets/selected-icon.svg";
import undSelectedIcon from "../../../assets/unselected-icon.svg";
require("./index.less");

/**
 * line 分割线
 * 参数
 * Seperator: Seperator, 组件名
   props:{
      lineType:'solid' 分割线类型
   }
 */

export default function LeftCheckboxSelector(props) {
  const {
    children,
    isSelected = false,
    selected = false,
    line = {},
    state = 'unselected'
  } = props;
  const [onSelected, setSelected] = useState(false);
  const toggleSelected = () => {
    if (selected === true || selected === 'true') {
      const result = !onSelected;
      setSelected(result);
    }
  };
  const _isSelected = selected === true || selected === 'true' ? onSelected : isSelected === true || isSelected === 'true' ? true : false;
  return React.Children.map(children, child => {
    const fill = 'transparent';
    const margin = '';
    const padding = '0';
    let linewidth = '';
    let activeLeftLine = line.activeLeftLine ? line.activeLeftLine : '3px';
    const hoverColor = '#EAEAEA';
    const activeColor = hoverColor;
    const lineColor = '#4285F4';
    let bgColor = `${fill}`;

    // if (onHover) {
    //   bgColor = `${hoverColor}80`;
    // } else {
    //   bgColor = `${fill}ff`;
    // }

    const styles = {
      position: 'relative',
      margin: `${margin}`,
      padding: `${padding}`,
      backgroundColor: `${bgColor}`,
      borderRadius: '8px',
      // borderWidth: '2px',
      // borderStyle: 'solid',
      // borderColor: 'transparent',
      paddingLeft: '30px'
    };

    // if(_isSelected){
    //   bgColor = activeColor;
    //   // linewidth = activeLeftLine;
    //   styles.borderColor = '#aab1dc';
    //   styles.boxShadow = '0 0px 6px rgba(170, 177, 220, 1)';
    // }

    return /*#__PURE__*/React.createElement("div", {
      className: `i-LeftCheckboxSelector`,
      style: styles,
      onClick: () => toggleSelected()
    }, _isSelected ? /*#__PURE__*/React.createElement("div", {
      className: "leftCenterIcon"
    }, /*#__PURE__*/React.createElement("img", {
      src: selectedIcon
    })) : /*#__PURE__*/React.createElement("div", {
      className: "leftCenterIcon"
    }, /*#__PURE__*/React.createElement("img", {
      src: undSelectedIcon
    })), child);
  });
}