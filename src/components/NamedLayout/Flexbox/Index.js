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

  const { children, align = '', direction = '', itemStyle={}, line = {}, isValidLine } = props;

  // console.log('align = ', align)
  
  // console.log('direction = ', direction)

  // itemStyle 控制 child 样式
  const { itemWidth='', itemAlign='' } = itemStyle;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      // console.log( "l-Box ${align} ${direction} = ", `l-Box ${align} ${direction}`)
      return `l-Box ${align} ${direction}`;
    }
  }));

  //分割线
  const Seperator = line.Seperator;

  return React.Children.map(children, child => {
    return (
      <>
        <div className={`l-BoxItem ${itemWidth} ${itemAlign}`} onClick={() => child.props.onItemClick(child.props)}>
          {child}
        </div>
        {Seperator && isValidLine ? <Seperator {...line.props} /> : null}
      </>

    )
  })
})