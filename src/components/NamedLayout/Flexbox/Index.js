import React, { useImperativeHandle, forwardRef } from 'react';

require('./index.less');

/**
 * line 分割线
 * 参数
 * Seperator: Seperator, 组件名
   props:{
      lineType:'solid' 分割线类型
   }
 */

export default forwardRef(function Box(props, ref) {

  const { children, align = 'start', direction = 'row', line = {}, isValidLine } = props;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-Box ${align} ${direction}`;
    }
  }));

  //分割线
  const Seperator = line.Seperator;

  console.log('isValidLine = ', isValidLine)

  return React.Children.map(children, child => {
    return (
      <>
        <div className="l-BoxItem" onClick={() => child.props.onItemClick(child.props)}>
          {child}
        </div>
        {Seperator && isValidLine ? <Seperator {...line.props} /> : null}
      </>

    )
  })
})