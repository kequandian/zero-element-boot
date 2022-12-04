import React, { useState } from 'react';
import NextIndicator from '@/components/NextIndicator';
import { get as DefaultIndicatorSet } from '@/components/config/NamedIndicatorConfig';

/**
 * @param {Component} Indicator   鼠标响应组件
 * @param {Component} Selector    选中组件
 * @param {Component} Unselector  默认状态组件
 * @param {Object} indicator      indicator 参数
 * @param {Object} selector       selector 参数
 * @param {Object} unselector     unselector 参数
 * @param {Object} indicatorData  响应 indicator 事件(hover,selected) 的参数数据，由AutoLayout往下传递
 * @param {Boolean} isSelected    是否选中状态，由父组件传递此参数
 * @param {Boolean} selected      是否响应Click事件切换选中状态, 用于测试
 * @param {Boolean} overlay       如果有传入indicator, selected是否叠加hover效果, 没有配置为不叠加
 * @returns 
 */
 export default function NamedSelector( { children, Indicator, Selector, Unselector, 
                                                      indicator, selector, unselector,
                                                      indicatorData={},
                                                      isSelected=false, selected=false, overlay=false}) {

const [onHover, setOnHover] = useState(false);
const [onSelected, setSelected] = useState(false);

const toggleHoverEntered = () => {
  setOnHover(true)
}
const toggleHoverLeave = () => {
  setOnHover(false)
}

// 用于测试
const toggleSelected = () => {
  if(selected){
    const result = !onSelected;
    setSelected(result)
  }
}

const _isSelected = selected ? onSelected : isSelected

// selector
const {__Selector, __selector} = getComponent(selector);
const _Selector = _isSelected ? (Selector||__Selector) : NextIndicator
const _selector = Selector ? (selector||{}): (__selector||{})

// unselector
const {__Unselector, __unselector} = getComponent(unselector);
const _Unselector =  _isSelected ? NextIndicator : (Unselector || __Unselector);
const _unselector = Unselector ? (unselector||{}): (__unselector||{})

// indicator
const {__Indicator, __indicator} = getComponent(indicator);
//const _Indicator = _isSelected ? (Selector||__Selector) : NextIndicator
const _Indicator =  ( !onHover || (_isSelected && !overlay) ) ? NextIndicator : (Indicator||__Indicator)
const _indicator = Indicator ? (indicator||{}): (__indicator||{})

return React.Children.map(children, child => {
  return (
    <div style={{flex: 1}} onClick={()=>toggleSelected()} onMouseEnter={() => toggleHoverEntered()} onMouseLeave={() => toggleHoverLeave()}>
      <_Indicator {..._indicator} indicatorData={indicatorData}>
          <_Unselector {..._unselector}>
              <_Selector {..._selector}>
                {child}
              </_Selector>
          </_Unselector>
      </_Indicator>
    </div>
    )
  })
}

function getComponent(data){
    const xname = data? (typeof data == 'string' ? data : data.xname ) : undefined
    const Component = xname ? (DefaultIndicatorSet[xname] || tips(xname)) : undefined
    const props = (data && typeof data =='object') ? data.props : undefined

    return {Component, props}
}

function tips(name) {
  return _ => `NamedSelector ${name} 未定义`;
}

