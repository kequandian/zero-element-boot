import React, { useImperativeHandle, forwardRef } from 'react';

require('./index.less');

export default forwardRef(function Shape(props, ref) {

  /**
   * corner     圆角半径
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   */

  const { children, corner = '5px', fill = '#F1F3F4', stroke = '#cccccc', lineWidth = '1px' } = props;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `C-Shape`;
    }
  }));

  return React.Children.map(children, child => {
    return <div style={{ borderStyle:`solid`, borderRadius: `${corner}`, background: `${fill}`, borderColor:`${stroke}`, borderWidth:`${lineWidth}` }}>
      {child}
    </div>
  })
})