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
 * @returns 
 */
export default function NamedSelector(props) {

  const { children, defaultIndicator={}, decorator={}, hoverIndicator = {}, indicator={}, selectedIndicator={}, selector={},  isSelected=false} = props;
  
  
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
    // indicator set
    const _IndicatorSet =  DefaultIndicatorSet()

    const hoverIndicatorName = indicator===undefined ? undefined : ( (typeof indicator === 'string') ? indicator : (typeof indicator === 'object') ? indicator.xname : undefined );
    const HoverIndicator =  (hoverIndicator===undefined && indicator===undefined) ? NextIndicator : 
                            (hoverIndicator===undefined ? (_IndicatorSet[hoverIndicatorName]) : hoverIndicator )

    const selectedIndicatorName = selector===undefined ? undefined : ( (typeof selector === 'string') ? selector : (typeof selector === 'object') ? selector.xname : undefined );
    const SelectedIndicator =  (selectedIndicator===undefined && selector===undefined) ? NextIndicator : 
                            (selectedIndicator===undefined ? (_IndicatorSet[selectedIndicatorName]) : selectedIndicator )

    const defaultIndicatorName = decorator===undefined ? undefined : ( (typeof decorator === 'string') ? decorator : (typeof decorator === 'object') ? decorator.xname : undefined );
    const DefaultIndicator =  (defaultIndicator===undefined && decorator===undefined) ? NextIndicator : 
                            (defaultIndicator===undefined ? (_IndicatorSet[defaultIndicatorName]) : defaultIndicator )

    return (

      <div style={{flex: 1}} onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}>
          <DefaultIndicator onHover={onHover} isSelected={isSelected} getHoverStyles={getHoverStyles} getSelectStyles={getSelectStyles}>
            <HoverIndicator indicate={onHover} ref={hoverRef}>
              <SelectedIndicator indicate={isSelected} ref={selectRef}>
              {child}
              </SelectedIndicator>
            </HoverIndicator>
          </DefaultIndicator>
      </div>
      
    )
  })
}
