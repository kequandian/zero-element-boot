import React, { useState } from 'react';
import NextIndicator from '@/components/NextIndicator';
import { get as DefaultIndicatorSet } from '@/components/config/NamedIndicatorConfig';


/**
 * @param {Component} Indicator  Indicator 组件
 * @param {Object} indicator     Indicator 组件参数
 * @param {Component} indicatorSet  Indicator 组件集
 * @param {Object} indicatorData  Indicator 数据
 * @param {{'hover','always','none'}} trigger 触发 indicator 的事件, 不配置为 hover
 * @returns 
 */
export default function NamedIndicator( { children, Indicator, xname, props, trigger='hover', indicator = {xname, props, trigger}, 
    indicatorData, indicatorSet,  onItemClick} ) {

    const [onHover, setOnHover] = useState(false);

    // const toggleHover = () => {
    //     const result = !onHover;
    //     setOnHover(result)
    // }
    const toggleHoverEntered = () => {
      setOnHover(true)
    }
    const toggleHoverLeaved = () => {
      setOnHover(false)
    }

    const _IndicatorSet = indicatorSet ? indicatorSet : DefaultIndicatorSet()

    const indicatorName = Indicator ? '' : ( (typeof indicator=='string')? indicator : indicator.xname )
    // 1. both Indicator & indicator, means  indicator for Indicator
    // 2. only Indicator, none 
    // 3. only indicator, indicator.props
    const _indicator =  (Indicator && indicator) ? indicator : ( Indicator ? {} : (indicator ? ( (typeof indicator=='string')?{} : (indicator.props?indicator.props:{}) ) : {}) )

    const _Indicator = Indicator || _IndicatorSet[indicatorName] || tips(indicatorName)

    const _trigger = indicator.trigger || trigger
    const triggered = (_trigger=='hover' && onHover) || _trigger=='always'
    const ___Indicator = triggered ? _Indicator : NextIndicator

    return React.Children.map(children, child => {
      return (_trigger=='hover')?
      (
        <div style={{flex: 1}} onMouseEnter={() => toggleHoverEntered()} onMouseLeave={() => toggleHoverLeaved()}>
          <___Indicator {..._indicator} indicatorData={indicatorData} onItemClick={onItemClick}>
              {child}
          </___Indicator>
        </div>
      ) : 
      (
        <div style={{flex: 1}}>
          <___Indicator {..._indicator} indicatorData={indicatorData}>
              {child}
          </___Indicator>
        </div>
      )
      })
}


function tips(name) {
  return _ => `NamedIndicator ${name} 未定义`;
}
