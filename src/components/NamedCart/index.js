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


/**
 * NamedCart [,NamedLayout] 负责处理数据传递，具体的Cart[ItemCart, ...] 不负责处理数据传递
 * 区别于 NamedGateway 数据传递由具体的 Gateway 处理
 * @param {} xname 引用的Cart的名称
 * @param {} props 引用的Cart的属性
 * @param {} cart 参数格式 car={xname:'Cart', props: {}}
 * @param {} indicator 鼠标hover时的Cart的名称
 * @param {} selector 选中的时候的Cart的名称
 * @param {} defaultIndicator 默认状态下的叠加的Cart
 */
export default function NamedCart({ children, xname, props, cart = { xname, props }, cartSet,  /*multi indicator*/ indicator, selector, defaultIndicator, indicatorSet, isSelected, /* end indicator*/    ...rest }) {

  const _CartSet = cartSet ? cartSet : DefaultCartSet()
  const cartName = (typeof cart === 'string') ? cart : cart.xname
  const _Cart = _CartSet[cartName] || tips(cartName);

  //2021-10-28 新增 selector 模块
  const _IndicatorSet = indicatorSet ? indicatorSet : DefaultIndicatorSet()
  

  // get indicator
  const indicatorName = (typeof indicator === 'string') ? indicator : (typeof indicator === 'object') ? indicator.xname : ''
  const    _Indicator  = _IndicatorSet[indicatorName] || tips(indicatorName)
  const indicatorProps = (typeof indicator === 'object') ? indicator.props : {}

  // get selector
  const selectorName = (typeof selector === 'string') ? selector : (typeof selector === 'object') ? selector.xname : ''
  const    _Selector  = _IndicatorSet[selectorName] || tips(selectorName)
  const selectorProps = (typeof selector === 'object') ? selector.props : {}

  //2021-10-28 新增 defaultIndicator 模块
  // get defaultIndicator, the same as _Cart
  const defaultIndicatorName = (typeof defaultIndicator === 'string') ? defaultIndicator : (typeof defaultIndicator === 'object') ? defaultIndicator.xname : ''
  const _DefaultIndicator  = _IndicatorSet[defaultIndicatorName] || tips(defaultIndicatorName)
  const defaultIndicatorProps = (typeof defaultIndicator === 'object') ? defaultIndicator.props : {}

  return (
    <>
      {
        (indicator || selector || defaultIndicator) ? 
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

            <OverlaySelector defaultIndicator={_DefaultIndicator} defaultIndicatorProps={defaultIndicatorProps} 
                           hoverIndicator={_Indicator}  hoverIndicatorProps = {indicatorProps}
                           selectedIndicator={_Selector}  selectedIndicatorProps = {selectorProps}   {...rest} >
                <_CartModule children={children} Cart={_Cart} props={cart.props} data={rest} /> 
            </OverlaySelector>
        ) : 
        (
            <_CartModule children={children} Cart={_Cart} props={cart.props} data={rest} /> 
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


function tips(name) {
  return _ => `NamedCart ${name} 未定义`;
}
