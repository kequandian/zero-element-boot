import React, { useImperativeHandle, forwardRef, useRef } from 'react';
import { useSize } from 'ahooks';

require("./index.less");

export default /*#__PURE__*/forwardRef(function Round(props, ref) {
  const containerRef = useRef();
  const size = useSize(containerRef);
  /**
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   */

  const {
    children,
    fill = '#1ee',
    stroke = '#9bd',
    lineWidth = '2'
  } = props;
  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `c-Round`;
    }
  })); //获取height并计算圆角的值

  const radiusSize = parseInt(size.height / 2);
  /**
   * <div 
      style={{ 
        borderStyle:`solid`, borderRadius: `${radiusSize}px`, background: `${fill}`, borderColor:`${stroke}`, borderWidth:`${lineWidth}px`,
        fontSize: '16px' }}
      ref={containerRef}
      >
      {child}
    </div>
      <svg ref={containerRef}>
        <rect x="5" y="5" rx={radiusSize} ry={radiusSize} width={size.width} height={size} style="fill:red;stroke:black;stroke-width:5;opacity:0.5">
         {child}
        </rect>
      </svg>
   */

  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        borderStyle: `solid`,
        borderRadius: `${radiusSize}px`,
        background: `${fill}`,
        borderColor: `${stroke}`,
        borderWidth: `${lineWidth}px`,
        fontSize: '16px'
      },
      ref: containerRef
    }, child));
  });
});