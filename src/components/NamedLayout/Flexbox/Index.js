import React, { useImperativeHandle, forwardRef } from 'react';

require('./index.less');

export default forwardRef(function Box(props, ref) {

  const { children, align = 'start', direction='row' } = props;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-Box ${align} ${direction}`;
    }
  }));

  return React.Children.map(children, child => {
    return <div className="l-BoxItem" onClick={() => child.props.onItemClick(child.props)}>
      {child}
    </div>
  })
})