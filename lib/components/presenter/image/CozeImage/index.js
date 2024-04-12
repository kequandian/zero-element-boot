import React from 'react';
import { Avatar, Box } from '@chakra-ui/react';
require("./index.less");

/**
 * 
 * @param { number or string } w 宽度
 * @param { number or string } h 高度
 * @param { string } url 图片链接
 * @param { number or string } corner 圆角
 * 
 */

const _url = 'https://bit.ly/dan-abramov';
export default function CozeImage(props) {
  const {
    w = 70,
    h = 70,
    url = _url,
    corner = '0px'
  } = props;
  const width = typeof w === 'number' ? w + 'px' : w.indexOf('%') > -1 ? w : w + 'px';
  const height = typeof h === 'number' ? h + 'px' : h.indexOf('%') > -1 ? h : h + 'px';
  const c = typeof corner === 'number' ? corner + 'px' : corner.indexOf('%') > -1 ? corner : corner + 'px';
  return /*#__PURE__*/React.createElement(Avatar, {
    background: 'transparent',
    w: width,
    h: height,
    borderRadius: c,
    src: url
  });
}