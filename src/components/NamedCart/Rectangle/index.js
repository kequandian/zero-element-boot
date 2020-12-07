import React, { useImperativeHandle, forwardRef } from 'react';

require('./index.less');

export default forwardRef(function Rectangle(props, ref) {

  /**
   * corner     圆角半径
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   */

  const { children, corner = '0px', fill = '#ffffff', stroke = '#ccc', lineWidth = '1px', outline= 'solid' } = props;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `C-Shape`;
    }
  }));

  return React.Children.map(children, child => {
    return <div style={{ borderStyle:`${outline}`, borderRadius: `${corner}`, background: `${fill}`, borderColor:`${stroke}`, borderWidth:`${lineWidth}` }}>
      {child}
    </div>
  })
})