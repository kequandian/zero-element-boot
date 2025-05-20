import React, { useState } from 'react';

/**
 * @param {Boolean} isSelected          是否选中状态，由父组件传递此参数
 * @param {Boolean} selected            是否响应Click事件切换选中状态, 默认值为选中状态
 * @param {Number} lineWidth            线宽
 * @param {String} selected            边框颜色
 * @returns 
 */
export default function OutlineSelector(props) {

  const { children, selected, lineWidth = 2, lineColor = '#D9FF00' } = props

  const styles = {
    flex: 1,
    border: `${lineWidth}px solid ${selected ? lineColor : 'transparent'}`,
    borderRadius: '8px'
  }

  return React.Children.map(children, child => {
    return (
      <div style={{ ...styles }}>
        {child}
      </div>
    )
  })
}
