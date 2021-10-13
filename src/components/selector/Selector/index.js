import React, { useState } from 'react';

/**
 * 
 * @param {Object} hoverIndicator 响应Hover事件的Indicator ( type of Cart)
 * @param {Object} hoverIndicator 响应Selected事件的Indicator (type of Cart)
 * @returns 
 */
export default function Selector(props) {

  const { children, hoverIndicator = {}, selectedIndicator={}, isSelected=false} = props;
  // TODO
  // 判断 hoverIndicator 是否有 hoverIndicator.props 属性
  // 1. 有则获取 hoverIndicator.indicator, hoverIndicator.props
  // 2. 否则直接获取 hoverIndicator 作为 indicator

  const [onHover, setOnHover] = useState(false);

  const toggleHover = () => {
    const result = !onHover;
    setOnHover(result)
  }

  return React.Children.map(children, child => {
    const HoverIndicator = hoverIndicator
    return <div onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}>
      {onHover? (
        <HoverIndicator>
          {child}
        </HoverIndicator>
      )
       : child
      }
    </div>
  })
}
