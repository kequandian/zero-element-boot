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
export default function NamedIndicator( { children, Indicator, xname, props, trigger='hover',  __indicator = {xname, props, trigger}, indicator = __indicator,
    indicatorData, indicatorSet,  onItemClick, onItemDeleted, onItemAdded, onItemChanged, onItemIndicated } ) {

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

    //2024-01-24 新增代码
    const __indicator_ = {...__indicator, ...indicator }

    const indicatorName = Indicator ? '' : ( (typeof __indicator_=='string')? __indicator_ : __indicator_.xname )
    // 1. both Indicator & indicator, means  indicator for Indicator
    // 2. only Indicator, none 
    // 3. only indicator, indicator.props
    const _indicator =  (Indicator && __indicator_) ? __indicator_ : ( Indicator ? {} : (__indicator_ ? ( (typeof __indicator_=='string')?{} : (__indicator_.props?__indicator_.props:{}) ) : {}) )

    const _Indicator = Indicator || _IndicatorSet[indicatorName] || tips(indicatorName)

    const _trigger = indicator.trigger || trigger
    const triggered = (_trigger=='hover' && onHover) || _trigger=='always'
    const ___Indicator = triggered ? _Indicator : NextIndicator

    return React.Children.map(children, child => {
      return (_trigger=='hover')?
      (
        <div style={{flex: 1}} onMouseEnter={() => toggleHoverEntered()} onMouseLeave={() => toggleHoverLeaved()}>
          <___Indicator {..._indicator} indicatorData={indicatorData} 
            onItemClick={onItemClick}
            onItemDeleted={onItemDeleted}
            onItemAdded={onItemAdded} 
            onItemChanged={onItemChanged} 
            onItemIndicated={onItemIndicated}
          >
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
