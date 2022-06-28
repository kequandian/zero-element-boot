import React from 'react'; // require('./index.less');

/**
 * 
 * @param {color} fill 背景
 * @param {borderWidth} borderWidth 边框宽度
 * @param {stroke} stroke 边框颜色
 * 
 */

export default function no(props) {
  const {
    fill = '#ffffff',
    borderWidth = '0',
    stroke
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      backgroundColor: `${fill}`,
      height: '100%',
      borderRadius: '50%',
      borderWidth: `${borderWidth}`,
      borderColor: `${stroke}`,
      borderStyle: 'solid'
    }
  });
}