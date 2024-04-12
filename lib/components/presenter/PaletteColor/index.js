import React from 'react';
import { Center } from '@chakra-ui/react';

/**
 * @param {String} color 背景色
 * @param {String} name 文字
 * @param {String} dark 文字颜色
 */
export default function PaletteColor(props) {
  const {
    color,
    name,
    dark = 'white'
  } = props;
  return /*#__PURE__*/React.createElement(Center, {
    bg: color,
    w: "100%",
    h: "100%",
    fontSize: '18px',
    color: dark,
    fontWeight: 'bold'
  }, name);
}