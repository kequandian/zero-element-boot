import React, { useState } from 'react';
import NextIndicator from '@/components/NextIndicator';
import { get as DefaultIndicatorSet } from '@/components/config/NamedIndicatorConfig';


/**
 * @param {Component} Indicator  Indicator 组件
 * @param {Component Object} indicator     Indicator 组件参数
 * @param {{onhover, overlay}} 触发 indicator 的事件, 不配置即默认为正常; overlay: _isSelected为真时触发; onhover: _isSelected=true不触发
 * @param {boolean} _isSelected  组件内部传递参数，用于selector选中状态下, indicator的状态
 * @returns
 */
export default function NamedIndicator(NamedIndicatorProps) {
    const { children, Indicator, xname, props, __indicator = {xname, props}, indicator = __indicator,  
            _isSelected, onhover, overlay, 
            onItemClick, onItemDeleted, onItemAdded, onItemChanged, // from cart pass down
            onIndicatorClick, 
            ...rest } = NamedIndicatorProps;

    const [onHoverState, setOnHoverState] = useState(false);

    const toggleHoverEntered = () => {
      setOnHoverState(true)
    }
    const toggleHoverLeaved = () => {
      setOnHoverState(false)
    }

    // console.log('NamedIndicator.onIndicatorClick: ', onIndicatorClick)

    //2024-01-24 新增代码
    // const __indicator_ = {...__indicator, ...indicator }

    // const indicatorName = Indicator ? '' : ( (typeof __indicator_=='string')? __indicator_ : __indicator_.xname )
    // 1. both Indicator & indicator, means  indicator for Indicator
    // 2. only Indicator, none 
    // 3. only indicator, indicator.props
    // const _indicator =  (Indicator && __indicator_) ? __indicator_ : ( Indicator ? {} : (__indicator_ ? ( (typeof __indicator_=='string')?{} : (__indicator_.props?{...__indicator_.props, ...indicatorProps}:{}) ) : {}) )
    const triggered = !onhover || (onhover && onHoverState && !_isSelected) || (overlay && onHoverState && _isSelected)

    const indicatorData = getComponent(indicator)
    const _Indicator = Indicator || indicatorData.Component || NextIndicator
    const __Indicator = triggered ? _Indicator : NextIndicator
    const _indicator = indicatorData.props
    // console.log('NamedIndicator._Indicator: ', _Indicator)

    return React.Children.map(children, child => {
      return (onhover)?
      (
        <div onMouseEnter={() => toggleHoverEntered()} onMouseLeave={() => toggleHoverLeaved()}>
          <__Indicator {..._indicator} {...rest}
            onItemClick={onItemClick}
            onItemDeleted={onItemDeleted}
            onItemAdded={onItemAdded} 
            onItemChanged={onItemChanged} 
            __onIndicatorClick={onIndicatorClick}
          >
              {child}
          </__Indicator>
        </div>
      ) : 
      (
          <_Indicator {..._indicator} {...rest}
            onItemClick={onItemClick}
            onItemDeleted={onItemDeleted}
            onItemAdded={onItemAdded} 
            onItemChanged={onItemChanged} 
            __onIndicatorClick={onIndicatorClick}
          >
              {child}
          </_Indicator>
      )
      })
}


function getComponent(data) {
  const xname = data ? (typeof data == 'string' ? data : data.xname) : undefined
  if(!xname){
    return {}
  }
  const props = (data && typeof data == 'object') ? data.props : undefined
  const Component = xname ? (DefaultIndicatorSet()[xname] || tips(xname)) : undefined
  if(!Component){
    return {}
  }
  return { Component, props }
}

function tips(name) {
  return _ => `NamedIndicator ${name} 未定义`;
}
