import React from 'react';
import { Button, Layout } from 'antd';
export default function (props) {
  const {
    name,
    type
  } = props;
  return /*#__PURE__*/React.createElement(Button, {
    type: type,
    style: {
      margin: '0 8px'
    }
  }, name);
}