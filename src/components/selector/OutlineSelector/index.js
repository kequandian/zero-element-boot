import React, { useState } from 'react';

/**
 * @param {Boolean} isSelected          是否选中状态，由父组件传递此参数
 * @param {Boolean} selected            是否响应Click事件切换选中状态, 默认值为选中状态
 * @param {Number} lineWidth            线宽
 * @param {String} selected            边框颜色
 * @returns 
 */
export default function OutlineSelector(props) {

  const { children, isSelected = false, selected = false, lineWidth = 2, lineColor = '#D9FF00' } = props
  const [onSelected, setSelected] = useState(false);

  const toggleSelected = () => {
    if (selected === true || selected === 'true') {
      const result = !onSelected;
      setSelected(result)
    }
  }

  const _isSelected = (selected === true || selected === 'true') ? onSelected : (isSelected === true || isSelected === 'true' ? true : false)

  const styles = {
    flex: 1,
    border: `${lineWidth}px solid ${_isSelected ? lineColor : 'transparent'}`,
  }

  return React.Children.map(children, child => {
    return (
      <div style={{ ...styles }} onClick={(e) => toggleSelected(e)}>
        {child}
      </div>
    )
  })
}


