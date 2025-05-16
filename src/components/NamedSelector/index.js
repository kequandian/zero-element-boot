import React, { useState } from 'react';
import NextIndicator from '@/components/NextIndicator';
import { get as DefaultSelectorSet } from '@/components/config/NamedSelectorConfig';

/** 负责组件的选中逻辑
 * @param {Component} Selector    组件
 * @param {String}  xname         selector 名称
 * @param {Object}  props         selector 参数
 * @param {Object}  selector      selector 参数,包括 {xname,props}, 也可以是 string 类型
 * @param {Object}  __selector    接收由api传递过来的参数
 * @param {Boolean} isSelected    是否选中状态，由父组件传递此参数
 * @param {Boolean} selected      是否响应Click事件切换选中状态, 用于测试
 * @returns 
 */
export default function NamedSelector(NamedSelectorProps) {

  const { children, Selector, xname, props, __selector = { xname, props }, selector = __selector,
    isSelected = false, selected, ...rest } = NamedSelectorProps;

  const [onSelected, setSelected] = useState(false);

  const toggleSelected = () => {
    if (selected) {
      const result = !onSelected;
      setSelected(result)
    }
  }

  // const _isSelected = selected ? onSelected : isSelected
  const { Component : _Selector, props: _selector } = getComponent(selector);
  const __Selector = Selector || _Selector || NextIndicator

  return (
    React.Children.map(children, child => {
    return (
      !selected ? (
        <div style={{ flex: 1 }} >
          <__Selector {..._selector} isSelected={isSelected} >
            { child }
          </__Selector>
        </div>
      ):(
        <div style={{ flex: 1 }} onClick={toggleSelected} >
          <__Selector {..._selector} selected={onSelected}>
          { child }
          </__Selector>
        </div>
      )
    )
  })
)
}


function getComponent(data) {
  const xname = data ? (typeof data == 'string' ? data : data.xname) : undefined
  if(xname===undefined){
    return {}
  }
  const props = (data && typeof data == 'object') ? data.props : {}
  const Component = xname ? (DefaultSelectorSet()[xname] || tips(xname)) : undefined
  if(Component===undefined){
    return {}
  }
  return { Component, props }
}

function tips(name) {
  return _ => `NamedSelector ${name} 未定义`;
}

