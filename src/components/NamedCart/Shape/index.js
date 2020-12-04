import React, { useImperativeHandle, forwardRef } from 'react';

require('./index.less');

export default forwardRef(function Shape(props, ref) {
  const { children, corner = '0px', fill = '#F1F3F4', stroke = '', lineWidth = '', hover = {}, pressed = {} } = props;

  console.log('corner = ', corner)
  console.log('fill = ', fill)
  console.log('stroke = ', stroke)
  console.log('lineWidth = ', lineWidth)

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