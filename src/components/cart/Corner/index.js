import React, { useImperativeHandle, forwardRef } from 'react';

require('./index.less');

export default forwardRef(function Corner(props, ref) {

  /**
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框宽度
   * outline    边界线类型
   */

  const { children, corner='4px', fill='transparent', stroke = '#e1e4ea', linewidth='1px', outline='solid' } = props;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `c-Corner`;
    }
  }));

  return React.Children.map(children, child => {
    return <div style={{ border:`${linewidth} ${outline} ${stroke}`, borderRadius:`${corner}`, backgroundColor:`${fill}` }}>
      {child}
    </div>
  })
})