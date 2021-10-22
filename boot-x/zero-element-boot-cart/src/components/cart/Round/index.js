import React, { useImperativeHandle, forwardRef, useRef } from 'react';
import { useSize } from 'ahooks';
import Shape from '../Shape'
require('./index.less');

export default forwardRef(function Round(props, ref) {

  const containerRef = useRef();
  const size = useSize(containerRef);

  /**
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   */

  const { children, fill = '#1ee', stroke = '#9bd', lineWidth = '1px'  } = props;


  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `c-Round`;
    }
  }));

  //获取height并计算圆角的值
  const radiusSize = parseInt(size.height / 2);


  return React.Children.map(children, child => {
    return  <div className="c-Rectangle-item" style={{
      background:`${fill}`,
      borderColor:`${stroke}`,
      borderWidth:`${lineWidth}`,
    }}>
      {child}
    </div>
    
    // const { fill = '#1ee', stroke = '#9bd', lineWidth = '1px' } = props.fill || props.stroke || props.lineWidth ? props : child.props.cart.props;

    // const config = {
    //   corner: radiusSize ? `${radiusSize}px` : '',
    //   fill, 
    //   stroke, 
    //   lineWidth
    // }

    // return (
    //   <div ref={containerRef}>
    //     <Shape 
    //       {...config}
    //     >
    //       {child}
    //     </Shape>
    //   </div>
    // )
  })
})

  /**
   *  <div 
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