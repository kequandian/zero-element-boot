const React = require('react');
const { forwardRef } = require('react');
const useLayout = require('@/components/hooks/useLayout');
// const DefaultCartSet = require('../cart');
import { get as DefaultCartSet } from '@/components/config/NamedCartConfig';

// indicator 属于 CART, 这里考虑分开管理
import { get as DefaultIndicatorSet } from '@/components/config/NamedIndicatorConfig';

//
import Selector from '@/components/selector/Selector';


/**
 * NamedCart [,NamedLayout] 负责处理数据传递，具体的Cart[ItemCart, ...] 不负责处理数据传递
 * 区别于 NamedGateway 数据传递由具体的 Gateway 处理
 */
export default function NamedCart({ children, xname, indicator, selector, defaultIndicator, props, cart = { xname, props }, cartSet, indicatorSet, ...rest }) {

  
  const _CartSet = cartSet ? cartSet : DefaultCartSet()
  const cartName = (typeof cart === 'string') ? cart : cart.xname
  const _Cart = _CartSet[cartName] || tips(cartName);

  //2021-03-27 新增 indicator 模块
  //const  _Indicator  = _CartSet[indicator];
  
  //2021-10-28 新增 selector 模块
  const _IndicatorSet = indicatorSet ? indicatorSet : DefaultIndicatorSet()
  // get indicator
  const indicatorName = (typeof indicator === 'string') ? indicator : (typeof indicator === 'object') ? indicator.xname : '';
  const    _Indicator  = _IndicatorSet[indicatorName];
  // get selector
  const selectorName = (typeof selector === 'string') ? selector : (typeof selector === 'object') ? selector.xname : '';
  const    _Selector  = _IndicatorSet[selectorName];

  //2021-10-28 新增 defaultIndicator 模块
  // get defaultIndicator
  const defaultIndicatorName = (typeof defaultIndicator === 'string') ? defaultIndicator : (typeof defaultIndicator === 'object') ? defaultIndicator.xname : '';
  const    _DefaultIndicator  = _IndicatorSet[defaultIndicatorName];

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
            <Selector hoverIndicator={_Indicator} selectedIndicator={_Selector} defaultIndicator={_DefaultIndicator}  {...rest} >
              <_CartModule children={children} Cart={_Cart} props={cart.props} data={rest} />
            </Selector>
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