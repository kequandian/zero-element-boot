import { useSize } from 'ahooks';

import React from 'react';
import { useState, useEffect } from 'react';
import { NamedContainer, NamedLayout, NamedGateway, NamedCart, NextIndicator } from '@/components';

import DefaultContainer from '@/components/container/Container'

import { get as NamedPresenterGet } from '@/components/config/NamedPresenterConfig';
import { get as DefaultIndicatorGet } from '@/components/config/NamedIndicatorConfig';

import loadingPage from '@/components/loading';
import { Filter } from '../gateway';
import { bind } from 'lodash';

// import requireConfig from '@/components/AutoX/requireConfig';
// import { Container } from '@/components/container';

// change history
//CR.2020-12-26 init

//CR.2020-12-29 add Container


//CR.2021-01-13 merge AutoComponent and AutoLayout

// 2021-3-25 新增通过 fetch 获取 layoutJson 配置信息, 新增 loading 加载效果

// 2022-6-27 gateway simplify


// 2022-7-01 支持children 列表数据索引
// {
//   presenter: 'ItemPlaceholder',
//   gateway: {
//     _: 0
//   }
// }


export default function (props) {
  const { layout } = props;
  const { path } = layout ? layout : {};
  const [layoutJson, setLayoutJson] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (path) {
      fetchData();
    }
  }, [])

  //根据 path 异步获取 layout json
  const fetchData = async () => {
    const result = await fetch(path, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(function (layoutJson) {
        return layoutJson;
      });
    //保存layout json 数据
    setLayoutJson(result.layout);
    //更改loading状态
    setLoading(false);
  }

  if (path) {
    if (loading) {
      return loadingPage();
    } else {
      if (layoutJson && JSON.stringify(layoutJson) != '{}') {
        const p = { ...props, layout: layoutJson };
        return AutoLayout(p);
      } else {
        console.error('获取配置数据异常')
      }
    }
  } else {
    return AutoLayout(props);
  }

}


// AutoLayout update history
// CR.增加处理选中的 (Cart=> indicator)
// when: 2021-03-24

//2021-11-10
//新增 layout 新增 navigation 属性

function AutoLayout({ children, layout, binding, gateway, allComponents = {}, onItemClick = () => { console.log('未设置onItemClick点击事件') }, dataSource, ...rest }) {
  // handle layout, container, gateway, cart, presenter, navigation, children
  // xpresenter 子项组件数据多层传递问题，意义同 presenter
  const { xname, props, container, binding:layoutBinding, gateway:layoutGateway, cart, indicator, selector, unselector, presenter, navigation, children: layoutChildren } = sugarLayout(layout) || {};
  const data = dataSource || rest || {}
  // console.log('AutoLayout.container=', container)
  
  // Cart
  const _align_cart = ((cart && typeof cart === 'string') ? { xname: cart } : cart) || undefined
  const __cart = sugarCart({ cart: _align_cart, indicator: indicator, selector:selector, unselector:unselector})
  const _NamedCart = cart ? NamedCart : NextIndicator;

  // Gateway
  const _layoutBinding = layoutBinding || binding
  const _layoutGateway = layoutGateway || gateway
  const _gateway = _layoutGateway ? (typeof _layoutGateway==='string' ? { xname: _layoutGateway } : sugarGateway(_layoutGateway)) : undefined
  const _NamedGateway = _gateway ? NamedGateway : NextIndicator;

  // handle container
  const Container = container ? NamedContainer : DefaultContainer
  const _container = ((typeof container === 'string') ? { xname: container } : container) || {}

  // allComponents
  const defaultPresenterGet = NamedPresenterGet()
  const _allComponents = { ...allComponents, ...defaultPresenterGet}

  // Presenter,  means presenter is AutoLayout
  const Presenter = ((presenter && typeof presenter === 'string') ? _allComponents[presenter]: (isJsonObject(presenter)? AutoLayout : undefined)) || tips(presenter)
  const _presenter = isJsonObject(presenter)? {layout: {...presenter}} : {}

  // 处理item indicator
  // const _IndicatorSet = DefaultIndicatorGet()
  // const _ItemIndicator = indicator && typeof indicator === 'string' ? _IndicatorSet[indicator] : ''
  
  // indicator binding
  const indicatorBinding = (indicator && indicator.binding) ? indicator.binding : {}
  const indicatorData = doBind(indicatorBinding, rest)

  // handle simple presenter, from data
  if (!layoutChildren && !container){

      // support component from data, not from layout, with dash _  for xname,props,cart,binding,gateway,presenter
      const {_xname = xname, _props = {...props}, _cart, _binding = {..._layoutBinding}, _gateway, _presenter, ..._rest } = data
      const _data_cart = __cart || _cart || {}
      const _data_gateway = _layoutGateway || _gateway
      const _data_presenter = presenter || _presenter

      // all props (xname, props, binding, cart, indicator) from within presenter
      const _____presenterName = _data_presenter ? ((typeof _data_presenter === 'string')? _data_presenter : _data_presenter.xname) : undefined  //local presenter
      const _____presenter = ((_data_presenter && _data_presenter.props) ? _data_presenter.props : {}) || {}

      // TODO, should not support
      const _____presenterCart = ((_data_presenter && _data_presenter.cart) ? _data_presenter.cart : undefined) || undefined
      const _____presenterIndicator = ((_data_presenter && _data_presenter.indicator) ? _data_presenter.indicator : undefined) || undefined
      const _____presenterBinding = ((_data_presenter && _data_presenter.binding) ? _data_presenter.binding : {}) || {}
      const _____presenterGateway = ((_data_presenter && _data_presenter.gateway) ? _data_presenter.gateway : {}) || {}
      // const __presenterName = _xname || _____presenterName ||  tips(_xname);
      // const __presenter = _props || _____presenter || {};
      const __cart0 = _data_cart || (_____presenterCart||_____presenterIndicator)? {cart: {..._____presenterCart, indicator:_____presenterIndicator}} : {};
      const __binding = {..._binding, ..._____presenterBinding}
      const __gateway = _data_gateway ? ((typeof _data_gateway ==='string')? undefined : _data_gateway.props ) : undefined || _____presenterGateway
      // deprecated

      const __presenterName = _xname || _____presenterName ||  tips(_xname);
      const __presenter = _props || _____presenter || {};

      const __NamedCart = _data_cart ? NamedCart : NextIndicator;
      const __NamedGateway = (__binding || (__gateway && (typeof __gateway === 'string'))) ? NamedGateway : NextIndicator;

      const __Presenter = _allComponents[__presenterName] || tips(__presenterName)
      return (
        <__NamedGateway binding={_binding} gateway={_data_gateway} {..._rest}>
          <__NamedCart {..._data_cart}  indicatorData={indicatorData}>
              <__Presenter {...__presenter} allComponents={allComponents} />
          </__NamedCart>
        </__NamedGateway>
      )
 }

 // xname use for layout, use default VStack
  const __xname = xname || 'VStack'
  // console.log('AutoLayout.!cart=', _cart)


  return layoutChildren ? (
    <Container {..._container} {...data} navigation={navigation}>
        <NamedLayout xname={__xname} props={props} __>
          {layoutChildren ? layoutChildren.map((child, i) => {

            const __Presenter = ((typeof child === 'string') ? _allComponents[child] : AutoLayout) || tips(presenter)
            const __presenter = isJsonObject(child)? {layout: {...child}} : {}

            return (
                <__Presenter {...__presenter} allComponents={allComponents} onItemClick={onItemClick}  key={i} />
            )

          }) : (
            React.Children.map(children, (child, i) => {
                <_NamedCart key={i} {...__cart} >
                  {child}
                </_NamedCart>
            })
          )}
        </NamedLayout>
    </Container>
  ) : (
    <Container {..._container} {...data} onItemClick={onItemClick} navigation={navigation}>
      <NamedLayout xname={__xname} props={props} __>
          <_NamedGateway binding={_layoutBinding} gateway={_gateway}>
                <_NamedCart {...__cart} >
                  {
                  presenter ?<Presenter {..._presenter} allComponents={allComponents} />
                    :
                    React.Children.toArray(children)
                  }
                </_NamedCart>
          </_NamedGateway>
      </NamedLayout>    
    </Container>
  )
}


function tips(name) {
  return _ => `${name} 未定义`;
}

function isJsonObject(obj) {
  return (obj && typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]")
}

/**
 * if filter gateway
 * @param {object} gateway 
 */
function isFilter(gateway){
  let filtered = undefined
  if(Object.keys(gateway).length===1){
    Object.keys(gateway).map(key => {
      const filterValue = gateway[key]
      if(Array.isArray(filterValue) && filterValue.length===0){
        filtered = 1
      }
    })
    return filtered
  }
}


/**
 * cart 参数必须是 xname
 * @param {xname: cart} cart 
 * @returns 
 */
function sugarCart({cart, indicator, selector, unselector}){
    if(indicator || selector){
      return {
        cart: {
          ...cart, 
          indicator: indicator,
          selector: selector,
          unselector: unselector
        }
      }
    }
    return cart
}


/**
 * layout is array without children
 * @param {object} layout 
 * @returns 
 */
function sugarLayout(layout){
    // layout is array
    if(Array.isArray(layout)){
        return {
          children: layout
        }
    }
    return layout
}

function sugarGateway(gateway){
  const {xname, _,  props } = gateway  
  // named gateway, just return for NamedGateway
  if(xname){
    return gateway
  }

  if(typeof gateway === 'object' && Object.keys(gateway).length===0){
    return gateway
  }

  if(Array.isArray(gateway)){
    return {
      xname: 'Chain',
      props: {
         chain: gateway
      }
    }
  }

  // get item index
  if(_){
    return {
      xname: 'GetItem',
      props: {
        itemIndex: _
      }
    }
  }

  // filter 
  if(isFilter(gateway)){
    return {
        xname: 'Filter', 
        props: {
          filter: gateway
        }
    }
  }

  // rebuild gateway
  return {
    xname: 'Binding',
    props: {
      binding: {
        ...gateway
      }
    }
  }
}

// function isLayoutObject(obj) {
//   return (obj && typeof (obj) == "object" && obj.xname) && 
//          (obj.presenter || (obj.children && Object.prototype.toString.call(obj.children).toLowerCase() == "[object array]" && obj.children.length > 0 ))
// }


function doBind(binding, data={}) {
  let bindingData = {}
  Object.keys(binding).forEach(key => {
    //binding[key] = target field
    bindingData[binding[key]] = data[key];
  })
  return { ...bindingData };
}
