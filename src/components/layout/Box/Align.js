import React, { useImperativeHandle, forwardRef } from 'react';

export default forwardRef(function Box(props, ref) {
  const { children, align, direction } = props;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-Align ${align} ${direction}`;
    }
  }));

  return React.Children.map(children, child => {
    return <div className="l-AlignItem">
      {child}
    </div>
  })
})