import React, { useImperativeHandle, forwardRef, useRef } from 'react';
import { Col } from 'antd';

require('./index.less');

export default forwardRef(function Grid(props, ref) {
  const { children, col } = props;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return 'l-Grid';
    }
  }));

  return React.Children.map(children, child => {
    return <Col span={computeSpan(col, child.props)}>
      {child}
    </Col>
  })
})

function computeSpan(col, props) {
  const span = props.span || props.data && props.data.span || 0;
  return ~~(24 / col) * span || 24;
}