import React, { useImperativeHandle, forwardRef } from 'react';

export default forwardRef(function Align(props, ref) {
  const { children, align } = props;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-Align ${align}`;
    }
  }));

  return React.Children.map(children, child => {
    return <div className="l-AlignItem">
      {child}
    </div>
  })
})