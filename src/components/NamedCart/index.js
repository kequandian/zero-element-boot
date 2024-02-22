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
import { get as DefaultSelectorSet } from '@/components/config/NamedSelectorConfig';

import OverlaySelector from '@/components/OverlaySelector';
import NamedIndicator from '@/components/NamedIndicator';
import NextIndicator from '@/components/NextIndicator';
import CssCart from '../cart/CssCart';
import NamedSelector from '../NamedSelector';


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
 * @param {object} __cart 用于接收由api传递过来的数据
 * @param {object} __indicator 用于接收由api传递过来的应用于Indicator的数据
 * @param {object} __selector 用于接收由api传递过来的应用于Selector的数据
 * @param {object} bounding 用于限定组件的渲染区域, 支持css属性, 默认为 margin, e.g. margin: '10px'; bounding: {marginLeft: '10px', marginTop: '5px', padding: '10px'}
 * indicated
 */
export default function NamedCart(nameCartPropsx) {
    const { children, xname, props, indicator, selector, unselector, bounding, selected, 
            cartSet, indicatorSet, selectorSet, 
            __cart = { xname, props, indicator, selector, unselector, bounding}, cart = __cart,
            __indicator, indicatorData={}, onItemClick, isSelected, onItemDeleted, onItemAdded, onItemChanged, onItemIndicated, 
            __selector, selectorData={},
            ...rest } = nameCartPropsx

  const _CartSet = cartSet ? cartSet : DefaultCartSet()
  //2021-10-28 新增 selector 模块
  const _IndicatorSet = indicatorSet ? indicatorSet : DefaultIndicatorSet()
  //2024-02-19 增加 selectorSet
  const _SelectorSet = selectorSet ? selectorSet : DefaultSelectorSet()

  const cartName = (typeof cart === 'string') ? cart : cart.xname ? cart.xname : __cart.xname
  const _Cart = cartName ? (_CartSet[cartName] || tips(cartName)) : NextIndicator;
  const _cart = cart.props || __cart.props || {}
  
  // get indicator
  const _indicator = cart.indicator 
  const indicatorName = _indicator ? ((typeof _indicator === 'string') ? _indicator : (typeof _indicator === 'object') ? _indicator.xname : '') : ''
  const _Indicator  = indicatorName ? (_IndicatorSet[indicatorName] || tips(indicatorName) ) : undefined  
  const indicatorProps = (_indicator && typeof _indicator === 'object') ? _indicator.props : {}
  const _indicatorData = (_indicator && _indicator.binding) ? doBind(_indicator.binding, rest) : {}
  
  // get selector
  const _selector = cart.selector
  const selectorName =  _selector ? ((typeof _selector === 'string') ? _selector : (typeof _selector === 'object') ? _selector.xname : '') : ''
  const _Selector  = selectorName ? (_SelectorSet[selectorName] || tips(selectorName) ) : undefined
  const selectorProps = (_selector && typeof _selector === 'object') ? _selector.props : {}

  //@when 2024-01-30
  //@what add bounding
  // get bounding
  const _bounding = (typeof cart.bounding == 'string') ? {margin: cart.bounding} : cart.bounding;
  const _Bounding = _bounding ? CssCart : NextIndicator;
  
  // console.log('cart = ', cart)
  // console.log('bounding = ', bounding, cart, __cart)

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

  // 2024-02-19, no OverlaySelector, NamedSelector instead.
  const _NamedIndicator = _indicator ? NamedIndicator : NextIndicator
  const _NamedSelector = _selector ? NamedSelector : NextIndicator

  return (
    <_Bounding style={_bounding}>
      {
        (_selector && _unselector) ? 
        (
          //both selector and unselector require OverlaySelector
          <OverlaySelector defaultIndicator={_Unselector} defaultIndicatorProps={unselectorProps} 
                       selectedIndicator={_Selector}  selectedIndicatorProps = {selectorProps} 
                       hoverIndicator={_Indicator}  hoverIndicatorProps = {indicatorProps}
                       indicatorData={_indicatorData} 
                       selected={selected}
                 isSelected={isSelected} >
               <_CartModule children={children} Cart={_Cart} props={_cart} data={rest} __indicator={__indicator} /> 
          </OverlaySelector>
        )
        : 
        ( (_indicator || _selector) ?
          (
                // only indicator handle item event
                <_NamedIndicator indicator={_indicator} __indicator={__indicator} indicatorData={_indicatorData} 
                        onItemClick={onItemClick}
                        onItemDeleted={onItemDeleted}
                        onItemAdded={onItemAdded} 
                        onItemChanged={onItemChanged} 
                        onItemIndicated={onItemIndicated}
                        _isSelected={isSelected}
                >
                    <_NamedSelector selector={_selector} selected={selected} __selector={__selector} isSelected={isSelected}>  
                         <_CartModule children={children} Cart={_Cart} props={_cart} data={rest} __indicator={__indicator}  __selector={__selector}/> 
                    </_NamedSelector>
               </_NamedIndicator>
            )
            :
            (
                <_CartModule children={children} Cart={_Cart} props={_cart} data={rest} /> 
            )
       )
      }
    </_Bounding>
  )
}


function _CartModule({children, Cart, props, data, __indicator,  __selector}){
  
  return (<Cart {...props}>
            {React.Children.toArray(children).map(child => {
              return React.cloneElement(child, {
                ...data,
                __indicator:__indicator,
                __selector: __selector
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
