import React from 'react';

/**
 * 
 * @param { string } color 遮罩层样色
 * @param { string } opcity 遮罩层透明度
 * 
 */

export default function Index(props) {
  const {
    children,
    color = '#909090',
    opacity = '50%'
  } = props;
  let opacityValue = opacity.indexOf('%') != -1 || opacity.indexOf('.') != -1 ? opacity : `${opacity}%`;
  const styles = {
    position: 'relative',
    background: color,
    opacity: opacityValue,
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...styles
    }
  }, React.Children.map(children, child => child));
}