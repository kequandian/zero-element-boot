import React, { useState } from 'react';
import useLayout from '@/components/hooks/useLayout';
import { get as DefaultIndicatorSet } from '@/components/config/NamedIndicatorConfig';
import NextIndicator from '@/components/indicator/NextIndicator';


/**
 * 
 * @param {Object} defaultIndicator 默认样式组件 ( type of Cart)
 * @param {String} decorator        命名的默认样式的名称 ( type of Cart)
 * @param {Object} hoverIndicator   响应Hover事件的Indicator ( type of Indicator)
 * @param {String} indicator        命名的响应Hover事件的Indicator的名称 ( type of Indicator)
 * @param {Object} selectedIndicator 响应Selected事件的Indicator (type of Indicator)
 * @param {Object} selector         命名的 响应Selected事件的Indicator的名称 (type of Indicator)
 * @param {Boolean} isSelected      是否选中状态，由父组件决定
 * @returns 
 */
export default function NamedSelector(props) {

  const { children, defaultIndicator={}, decorator={}, hoverIndicator = {}, indicator={}, selectedIndicator={}, selector={},  isSelected=false} = props;
  
  const [hoverRef, { getHoverStyles }] = useLayout();
  const [selectRef, { getSelectStyles }] = useLayout();

  
  const [onHover, setOnHover] = useState(false);
  
  const toggleHover = () => {
    const result = !onHover;
    setOnHover(result)
  }

  // indicator set
  const _IndicatorSet =  DefaultIndicatorSet()

  // default, hover, selected style
  const hoverIndicatorName = indicator===undefined ? undefined : ( (typeof indicator === 'string') ? indicator : (typeof indicator === 'object') ? indicator.xname : undefined );
  const HoverIndicator =  ( (hoverIndicator===undefined && indicator===undefined) || onHover==false ) ? NextIndicator : 
                          (hoverIndicator===undefined ? (_IndicatorSet[hoverIndicatorName]) : hoverIndicator )

  const selectedIndicatorName = selector===undefined ? undefined : ( (typeof selector === 'string') ? selector : (typeof selector === 'object') ? selector.xname : undefined );
  const SelectedIndicator = ( (selectedIndicator===undefined && selector===undefined) || isSelected == false )? NextIndicator : 
                          (selectedIndicator===undefined ? (_IndicatorSet[selectedIndicatorName]) : selectedIndicator )

  const defaultIndicatorName = decorator===undefined ? undefined : ( (typeof decorator === 'string') ? decorator : (typeof decorator === 'object') ? decorator.xname : undefined );
  const DefaultIndicator =  (defaultIndicator===undefined && decorator===undefined) ? NextIndicator : 
                          (defaultIndicator===undefined ? (_IndicatorSet[defaultIndicatorName]) : defaultIndicator )

  return React.Children.map(children, child => {
    
    return (
      <div style={{flex: 1}} onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}>
          <DefaultIndicator getHoverStyles={getHoverStyles} getSelectStyles={getSelectStyles}>
            <HoverIndicator ref={hoverRef}>
              <SelectedIndicator ref={selectRef}>
              {child}
              </SelectedIndicator>
            </HoverIndicator>
          </DefaultIndicator>
      </div>
      
    )
  })
}
