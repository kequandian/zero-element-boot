import React, { useImperativeHandle, forwardRef, useRef } from 'react';
// import { Col } from 'antd';

require('./index.less');

export default forwardRef(function Grid(props, ref) {
  const { children, col } = props;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return 'l-Grid';
    }
  }));

  /**
   * antd 组件
   */
  // return React.Children.map(children, child => {
  //   return <Col span={computeSpan(col, child.props)}>
  //     {child}
  //   </Col>
  // })

  return React.Children.map(children, child => {
    const align = child.props.span || child.props.data && child.props.data.align || 'start';
    return <div style={{width:`${computeWidth(col)}%`}} className={`l-grid-item ${align}`}>
      {child}
    </div>
  })
})

function computeWidth(col) {
  return ~~(100 / col) || 100;
}

//适用于于antd -> col 组件 span 参数
function computeSpan(col, props) {
  const span = props.span || props.data && props.data.span || 0;
  return ~~(24 / col) * span || 24;
}