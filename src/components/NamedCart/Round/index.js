import React, { useImperativeHandle, forwardRef, useRef } from 'react';
import { useSize } from 'ahooks';

require('./index.less');

export default forwardRef(function Round(props, ref) {

  
  const containerRef = useRef();
  const size = useSize(containerRef);
  

  /**
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   */

  const { children, fill = '#1ee', stroke = '#9bd', lineWidth = '2' } = props;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `C-Round`;
    }
  }));

  const radiusSize = parseInt(size.height/2);
  
  return React.Children.map(children, child => {
    return <div 
      style={{ borderStyle:`solid`, borderRadius: `${radiusSize}px`, background: `${fill}`, borderColor:`${stroke}`, borderWidth:`${lineWidth}px` }}
      ref={containerRef}
      >
      {child}
    </div>
  })
})