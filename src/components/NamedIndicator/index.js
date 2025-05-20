import React, { useState } from 'react';
import NextIndicator from '@/components/NextIndicator';
import { get as DefaultIndicatorSet } from '@/components/config/NamedIndicatorConfig';


/**
 * @param {Component} Indicator  Indicator 组件
 * @param {Object} indicator     Indicator 组件参数
 * @param {{'hover','always','none','overlay'}} xtrigger 触发 indicator 的事件, 不配置即默认为 hover， xtrigger='overlay': _isSelected为真时触发，当 xtrigger='hover'，_isSelected=true不触发
 * @param {boolean} _isSelected  组件内部传递参数，用于selector选中状态下, indicator的状态
 * @returns
 */
export default function NamedIndicator(namedIndicatorProps) {
    const { children, Indicator, xname, props, xtrigger='hover',  __indicator = {xname, props, xtrigger}, indicator = __indicator,  
            _isSelected, 
            onItemClick, onItemDeleted, onItemAdded, onItemChanged, onItemIndicated, ...rest } = namedIndicatorProps;

    const [onHover, setOnHover] = useState(false);

    const toggleHoverEntered = () => {
      setOnHover(true)
    }
    const toggleHoverLeaved = () => {
      setOnHover(false)
    }

    //2024-01-24 新增代码
    // const __indicator_ = {...__indicator, ...indicator }

    // const indicatorName = Indicator ? '' : ( (typeof __indicator_=='string')? __indicator_ : __indicator_.xname )
    // 1. both Indicator & indicator, means  indicator for Indicator
    // 2. only Indicator, none 
    // 3. only indicator, indicator.props
    // const _indicator =  (Indicator && __indicator_) ? __indicator_ : ( Indicator ? {} : (__indicator_ ? ( (typeof __indicator_=='string')?{} : (__indicator_.props?{...__indicator_.props, ...indicatorProps}:{}) ) : {}) )

    const indicatorData = getComponent(indicator)
    const _Indicator = Indicator || indicatorData.Component || NextIndicator
    const _indicator = indicatorData.props


    const _trigger = indicator.xtrigger
    const triggered = (_trigger=='hover' && onHover && !_isSelected) || (_trigger=='overlay' && onHover && _isSelected) || _trigger=='always'
    const ___Indicator = triggered ? _Indicator : NextIndicator

    return React.Children.map(children, child => {
      return (_trigger=='hover')?
      (
        <div style={{flex: 1}} onMouseEnter={() => toggleHoverEntered()} onMouseLeave={() => toggleHoverLeaved()}>
          <___Indicator {..._indicator} 
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
        // <div style={{flex: 1}}>
          <___Indicator {..._indicator}>
              {child}
          </___Indicator>
        // </div>
      )
      })
}


function getComponent(data) {
  const xname = data ? (typeof data == 'string' ? data : data.xname) : undefined
  if(!xname){
    return {}
  }
  const props = (data && typeof data == 'object') ? data.props : undefined
  const Component = xname ? (DefaultSelectorSet()[xname] || tips(xname)) : undefined
  if(!Component){
    return {}
  }
  return { Component, props }
}

function tips(name) {
  return _ => `NamedIndicator ${name} 未定义`;
}
