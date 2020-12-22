import React, { useImperativeHandle, forwardRef, useRef } from 'react';

require('./index.less');

export default forwardRef(function Grid(props, ref) {
  const { children, col } = props;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return 'l-Grid';
    }
  }));

  /**
   * 使用 flex 样式
   * 参数 (可选)
   * span 控制列宽比例， 数值越大 宽度越小
   * align 内容位置(左、中、右)
   */
  return React.Children.map(children, child => {
    const align = child.props.align || child.props.data && child.props.data.align || 'start';
    return (
        <div style={{ width: `${computeWidth(col, child.props)}%` }} className={`l-grid-item ${align}`}>
          {child}
        </div>
    )


  })
})

function computeWidth(col, props) {
  const span = props.span || props.data && props.data.span || 0;
  if (span) {
    return ~~((100 / col) / span);
  }
  return ~~(100 / col) || 100;
}
