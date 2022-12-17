// const React = require('react');
import React from 'react';
// const { forwardRef } = require('react');
// import { forwardRef } from 'react';
// const useLayout = require('@/components/hooks/useLayout');
// import useLayout from 'lib/components/hooks/useLayout';

// const DefaultCartSet = require('../cart');
import { get as DefaultCartSet } from '@/components/config/NamedCartConfig';

// indicator 属于 CART, 这里考虑分开管理
import { get as DefaultIndicatorSet } from '@/components/config/NamedIndicatorConfig';

import OverlaySelector from '@/components/OverlaySelector';
import NamedIndicator from '@/components/NamedIndicator';
import NextIndicator from '@/components/NextIndicator';


/**
 * NamedCart [,NamedLayout] 负责处理数据传递，具体的Cart[ItemCart, ...] 不负责处理数据传递
 * 区别于 NamedGateway 数据传递由具体的 Gateway 处理
 * @param {string} xname 引用的Cart的名称
 * @param {object} props 引用的Cart的属性
 * @param {xname:'', props:{}} cart 参数格式 car={xname:'Cart', props: {}}
 * @param {xname:'', props:{}} indicator 响应鼠标hover时的Cart的属性
 * @param {xname:'', props:{}} selector  选中的状态的Cart的属性
 * @param {xname:'', props:{}} unselector  未选中的状态的Cart的属性
 * @param {ComponentSet} cartSet  cart 组件集
 * @param {ComponentSet} indicatorSet  indicator 组件集
 * @param {boolean} isSelected  传递是否选中状态
 * @param {boolean} selected 代表 OverlaySelector 的 selected 参数, 仅用于单组件测试，由AutoLayout的配置决定
 * indicated
 */
export default function NamedCart(nameCartPropsx) {
    const { children, xname, props, indicator, selector, unselector, selected, cart = { xname, props, indicator, selector, unselector}, cartSet, indicatorSet, 
    indicatorData={}, onItemClick, isSelected,
    onItemDeleted, onItemAdded, onItemChanged, onItemIndicated,
    ...rest } = nameCartPropsx

  const _CartSet = cartSet ? cartSet : DefaultCartSet()
  //2021-10-28 新增 selector 模块
  const _IndicatorSet = indicatorSet ? indicatorSet : DefaultIndicatorSet()

  const cartName = (typeof cart === 'string') ? cart : cart.xname
  const _Cart = cartName ? (_CartSet[cartName] || tips(cartName)) : NextIndicator;
  const _cart = cart.props || {}

  // get indicator
  const _indicator = cart.indicator
  const indicatorName = _indicator ? ((typeof _indicator === 'string') ? _indicator : (typeof _indicator === 'object') ? _indicator.xname : '') : ''
  const _Indicator  = indicatorName ? (_IndicatorSet[indicatorName] || tips(indicatorName) ) : undefined  
  const indicatorProps = (_indicator && typeof _indicator === 'object') ? _indicator.props : {}
  const _indicatorData = (_indicator && _indicator.binding) ? doBind(_indicator.binding, rest) : {}

  // get selector
  const _selector = selector || cart.selector
  const selectorName =  _selector ? ((typeof _selector === 'string') ? _selector : (typeof _selector === 'object') ? _selector.xname : '') : ''
  const _Selector  = selectorName ? _IndicatorSet[selectorName] : undefined
  const selectorProps = (_selector && typeof _selector === 'object') ? _selector.props : {}

  // 2022-11-24 defaultIndicator 更名为 unselector
  // //2021-10-28 新增 defaultIndicator 模块
  // //2022-07-05 不一定需要 defaultIndicator
  // // get defaultIndicator, the same as _Cart
  // const defaultIndicatorName = defaultIndicator ? ((typeof defaultIndicator === 'string') ? defaultIndicator : ((typeof defaultIndicator === 'object') ? defaultIndicator.xname : '')) : ''
  // const _DefaultIndicator  = defaultIndicatorName ? _IndicatorSet[defaultIndicatorName] : undefined
  // const defaultIndicatorProps = (defaultIndicatorName && (typeof defaultIndicator === 'object')) ? defaultIndicator.props : {}
  const _unselector = unselector || cart.unselector
  const unselectorName = _unselector ? ((typeof _unselector === 'string') ? _unselector : ((typeof _unselector === 'object') ? _unselector.xname : '')) : ''
  const _Unselector  = unselectorName ? _IndicatorSet[unselectorName] : undefined
  const unselectorProps = (unselectorName && (typeof _unselector === 'object')) ? _unselector.props : {}

  return (
    <>
      {
        (_selector) ?  // (indicator || selector) ? only selector require OverlaySelector
        (
            // <_Indicator {...rest}>
            //    <_Cart {...cart.props}>
            //     {React.Children.toArray(children).map(child => {
            //       return React.cloneElement(child, {
            //         ...rest
            //       })
            //     })}
            //   </_Cart>
            // </_Indicator>

            <OverlaySelector defaultIndicator={_Unselector} defaultIndicatorProps={unselectorProps} 
                             selectedIndicator={_Selector}  selectedIndicatorProps = {selectorProps} 
                             hoverIndicator={_Indicator}  hoverIndicatorProps = {indicatorProps}
                             indicatorData={_indicatorData} 
                             selected={selected}
                      isSelected={isSelected} >
                <_CartModule children={children} Cart={_Cart} props={_cart} data={rest} /> 
            </OverlaySelector>
        ) : 
        (
            (_indicator) ? 
            (
              <NamedIndicator indicator={_indicator} indicatorData={_indicatorData} onItemClick={onItemClick}
                onItemDeleted={onItemDeleted}
                onItemAdded={onItemAdded} 
                onItemChanged={onItemChanged} 
                onItemIndicated={onItemIndicated}
              >
                  <_CartModule children={children} Cart={_Cart} props={_cart} data={rest} /> 
              </NamedIndicator>
            ):
            (
              <_CartModule children={children} Cart={_Cart} props={_cart} data={rest} /> 
            )
        )
      }
    </>
  )
}

function _CartModule({children, Cart, props, data}){
  return (<Cart {...props}>
            {React.Children.toArray(children).map(child => {
              return React.cloneElement(child, {
                ...data
              })
            })}
        </Cart>)
}


function doBind(binding, data={}) {
  let bindingData = {}
  Object.keys(binding).forEach(key => {
    //binding[key] = target field
    bindingData[binding[key]] = data[key];
  })
  return { ...bindingData };
}


function tips(name) {
  return _ => `NamedCart ${name} 未定义`;
}
