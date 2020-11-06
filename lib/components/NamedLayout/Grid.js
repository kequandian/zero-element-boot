import React, { useImperativeHandle, forwardRef, useRef } from 'react';
import { Col } from 'antd';
export default /*#__PURE__*/forwardRef(function Grid(props, ref) {
  const {
    children,
    col
  } = props;
  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return 'l-Grid';
    }
  }));
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement(Col, {
      span: computeSpan(col, child.props)
    }, child);
  });
});

function computeSpan(col, props) {
  const span = props.span || props.data && props.data.span || 0;
  return ~~(24 / col) * span || 24;
}