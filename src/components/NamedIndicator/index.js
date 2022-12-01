import React, { useState } from 'react';
import NextIndicator from '@/components/NextIndicator';
import { get as DefaultIndicatorSet } from '@/components/config/NamedIndicatorConfig';


/**
 * @param {Component} Indicator  Indicator 组件
 * @param {Object} indicator     Indicator 组件参数
 * @param {Component} indicatorSet  Indicator 组件集
 * @param {Object} indicatorData  Indicator 数据
 * @returns 
 */
export default function NamedIndicator( { children, Indicator, xname, props, indicator = {xname, props}, indicatorSet, indicatorData} ) {

    const [onHover, setOnHover] = useState(false);

    const toggleHover = () => {
        const result = !onHover;
        setOnHover(result)
    }


    const _IndicatorSet = indicatorSet ? indicatorSet : DefaultIndicatorSet()

    const indicatorName = Indicator ? '' : ( (typeof indicator=='string')? indicator : indicator.xname )
    // 1. both Indicator & indicator, means  indicator for Indicator
    // 2. only Indicator, none 
    // 3. only indicator, indicator.props
    const _indicator =  (Indicator && indicator) ? indicator : ( Indicator ? {} : (indicator ? ( (typeof indicator=='string')?{} : (indicator.props?indicator.props:{}) ) : {}) )

    const _Indicator = Indicator || _IndicatorSet[indicatorName] || tips(indicatorName)

    const ___Indicator = onHover ? _Indicator : NextIndicator

    return React.Children.map(children, child => {
      return (
        <div style={{flex: 1}} onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}>
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
