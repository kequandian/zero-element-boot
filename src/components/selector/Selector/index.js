import React, { useState } from 'react';
import useLayout from '@/components/hooks/useLayout';

/**
 * 
 * @param {Object} hoverIndicator 响应Hover事件的Indicator ( type of Cart)
 * @param {Object} hoverIndicator 响应Selected事件的Indicator (type of Cart)
 * @returns 
 */
export default function Selector(props) {

  const { children, hoverIndicator = {}, selectedIndicator={}, isSelected=false} = props;
  
  
  const [hoverRef, { getHoverStyles }] = useLayout();
  const [selectRef, { getSelectStyles }] = useLayout();
  
  // TODO
  // 判断 hoverIndicator 是否有 hoverIndicator.props 属性
  // 1. 有则获取 hoverIndicator.indicator, hoverIndicator.props
  // 2. 否则直接获取 hoverIndicator 作为 indicator

  const [onHover, setOnHover] = useState(false);

  return React.Children.map(children, child => {

    const toggleHover = () => {
      const result = !onHover;
      setOnHover(result)
    }

    const HoverIndicator = hoverIndicator
    const SelectedIndicator = selectedIndicator
    
    const styles = {
      position: 'relative',
      margin: '6px',
      padding: '5px',
      backgroundColor: 'transparent',
      borderRadius: '8px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      boxShadow: '0 0px 6px rgba(255, 255, 255, 1)'
    }
    
    let changeStyle = styles;
    if(onHover){
      changeStyle = {
        ...styles,
        ...getHoverStyles()
      }
    }
    if(isSelected){
      changeStyle = {
        ...styles,
        ...getSelectStyles()
      }
    }
    
    return (
      <div
        style={changeStyle}
        onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}>
          <HoverIndicator indicate={onHover}>
            <SelectedIndicator indicate={isSelected}>
            {child}
            </SelectedIndicator>
          </HoverIndicator>
      </div>
    )
  })
}
