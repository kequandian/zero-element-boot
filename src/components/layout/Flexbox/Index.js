import React, { useImperativeHandle, forwardRef } from 'react';
import NamedSeperator from '@/components/NamedSeperator';

require('./index.less');

/**
 * line 分割线
 * 参数
 * Seperator: Seperator, 组件名
   props:{
      lineType:'solid' 分割线类型
   }
 */

export default forwardRef(function Flexbox(props, ref) {

  const { children, align='', direction='', itemStyle={}, seperator={}, isValidLine } = props;

  console.log('Flexbox:props=', props)

  // itemStyle 控制 child 样式
  const { itemWidth='', itemAlign='' } = itemStyle;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-Box ${align} ${direction}`;
    }
  }));

  // get named seperator
  var defaultSeperator = 'Divider'
  if (typeof seperator === 'string'){
    defaultSeperator = seperator
  }

  return React.Children.map(children, child => {
    return (
      <>
        <div className={`l-BoxItem ${itemWidth} ${itemAlign}`} onClick={() => child.props.onItemClick(child.props)}>
          {child}
        </div>
        {isValidLine ? <NamedSeperator name={defaultSeperator} /> : null}
      </>
    )
  })
})