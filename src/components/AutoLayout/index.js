import { useSize } from 'ahooks';

import React from 'react';
import { useState, useEffect } from 'react';
import { NamedContainer, NamedLayout, NamedGateway, NamedCart, NextIndicator, NamedIndicator } from '@/components';

import DefaultContainer from '@/components/container/Container'
import AutoPreviewIndicator from '@/components/indicator/AutoPreviewIndicator'
import { useReplacing } from '../gateway/Replacing';

import { get as NamedPresenterGet } from '@/components/config/NamedPresenterConfig';
import { get as DefaultIndicatorGet } from '@/components/config/NamedIndicatorConfig';

import LoadingPage from '@/components/loading';
import OutlineCart from '../cart/OutlineCart';
const { getEndpoint, getToken } = require('@/components/config/common');

// import { Filter } from '../gateway';
// import { bind } from 'lodash';

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
  const { dataset } = layout ? layout : {};
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof dataset === 'string') {
      fetchData();
    }
  }, [])

  //根据 dataset 异步获取列表数据
  const fetchData = async () => {
    const url = dataset.indexOf('http') != -1 ? dataset : getEndpoint() + dataset;
    const result = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        return data;
      });
    //保存列表数据
    const datasource = result.data ? (result.data.records || result.data) : []
    setDataSource(datasource);
    //更改loading状态
    setLoading(false);
  }

  if (typeof dataset === 'string') {
    if (loading) {
      return <LoadingPage />;
    } else {
      if (dataSource && dataSource.length > 0) {
        const p = { ...props, dataSource: dataSource };
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

//2024-02-22 新增 tag 属性，用于调试跟踪数据流

function AutoLayout(autoLayoutProps) {

  const { children, layout, tag, binding, filter, chain, gateway, allComponents = {}, onItemClick = () => { console.log('AutoLayout-未设置onItemClick点击事件') }, dataSource,
  onItemDeleted, onItemAdded, onItemChanged, onItemIndicated, ___, onAutoPreview,
  // alternative, alternativeActive, onAlternativeBack,   // use container instead. e.g. AlternativeContainer
  ...rest } = autoLayoutProps;

  // handle layout, container, gateway, cart, presenter, navigation, children
  // xpresenter 子项组件数据多层传递问题，意义同 presenter
  const { xname, props, container, binding: layoutBinding, filter: layoutFilter, chain: layoutChain, gateway: layoutGateway,
    cart, indicator, selector, unselector, bounding,
    presenter, navigation, children: layoutChildren, mock, tag: layoutTag,
    alternative: layoutAlternative, xseq
  } = sugarLayout(layout) || {};

  // show tag for AutoLayout, layoutTag first
  const _tag = layoutTag || tag || 'UNDEFINED-TAG'
  tagged(_tag, rest)

  const _dataSource = (Array.isArray(dataSource) ? { items: dataSource } : dataSource) || (Array.isArray(mock) ? { items: mock } : mock) || {}
  //const data = dataSource || rest || {}

  // @when 2023-03-18 
  // @what no alternative, use container instead.
  if (undefined && alternativeActive) {
    const notnull_alternative = (alternative && JSON.stringify(alternative) !== '{}' && alternative) || (layoutAlternative && JSON.stringify(layoutAlternative) !== '{}' && layoutAlternative) || tips('alternative')
    const alternative_layout = (typeof notnull_alternative === 'string') ? ({ xname: notnull_alternative }) : (notnull_alternative.layout ? notnull_alternative.layout : notnull_alternative)

    // exclude layout
    const { layout, ...alternativeOthers } = notnull_alternative

    // add tag 
    const alternativeTag = tag ? { tag: `${tag}-alternative` } : {}
    const config = { ...alternative_layout, ...alternativeTag }
    const layoutConfig = { layout: config }

    // alternativeBack
    const { _Component: _AlternativeBack, _component: _alternativeBack } = getComponent(notnull_alternative.alternativeBack, DefaultIndicatorGet())

    return (
      <_AlternativeBack {..._alternativeBack} onBack={onAlternativeBack} >
        <AutoLayout {...layoutConfig} {..._dataSource} {...rest} {...alternativeOthers} />
      </_AlternativeBack>
    )
  }

  const PreviewIndicator = ({children}) => {
    return (
      <NamedIndicator Indicator={AutoPreviewIndicator}>
          {
            children
          }
      </NamedIndicator>
    )
  }

  //最外层indicator
  const ___previewIndicator = ___ ? AutoPreviewIndicator : NextIndicator

  // Cart
  const _align_cart = ((cart && typeof cart === 'string') ? { xname: cart } : cart) || undefined
  const __cart = sugarCart({ cart: _align_cart, indicator: indicator, selector: selector, unselector: unselector, bounding: bounding })
  const _NamedCart = cart ? NamedCart : NextIndicator;
  const _cartName = cart ? 'NamedCart' : 'NextIndicator'

  // Gateway
  const _layoutBinding = layoutBinding || binding
  const _layoutFilter = layoutFilter || filter
  const _layoutChain = layoutChain || chain
  const _layoutGateway = layoutGateway || gateway
  const _1_gateway = _layoutGateway ? (typeof _layoutGateway === 'string' ? { xname: _layoutGateway }
    : sugarGateway(_layoutGateway)) : undefined
  const _gateway = _1_gateway || (_layoutBinding ? { xname: "Binding" } : (_layoutFilter ? { xname: "Filter" } : (_layoutChain ? { xname: "Chain" } : undefined)))
  const _NamedGateway = (_layoutBinding || _layoutFilter || _layoutChain || _gateway) ? NamedGateway : NextIndicator;
  const _gatewayName = (_layoutBinding || _layoutFilter || _layoutChain || _gateway) ? 'NamedGateway' : 'NextIndicator'
  const _useReplacing = _gateway && typeof _gateway === 'object' && _gateway.xname === 'Replacing' ? useReplacing : null

  // handle container
  const Container = container ? NamedContainer : DefaultContainer
  const _container = ((typeof container === 'string') ? { xname: container } : container) || {}
  const _containerName = _container.xname || 'DefaultContainer'

  // allComponents
  const defaultPresenterGet = NamedPresenterGet()
  const _allComponents = { ...allComponents, ...defaultPresenterGet }

  // Presenter,  means presenter is AutoLayout
  const _presenterName = presenter ? (typeof presenter === 'string' ? presenter : 'AutoLayout') : undefined
  const Presenter = (presenter && typeof presenter === 'string') ? (_allComponents[presenter] || tips(presenter)) : (isJsonObject(presenter) ? AutoLayout : undefined)
  const _presenter = (Presenter && isJsonObject(presenter)) ? { layout: { ...presenter, ...rest.___presenter } } : {}

  // handle simple presenter, from {xname,props}
  if (!Presenter && !layoutChildren && !container) {
    // support component from data, not from layout, with dash _  for xname,props,cart,binding,gateway,presenter
    /**
     * ___presenter 由外部api 提供的参数
     */

    const { ___presenter = {}, _xname = xname, _props = { ...props }, _cart, _binding = { ..._layoutBinding }, _filter = { ..._layoutFilter }, _chain = { ..._layoutChain }, _gateway, ..._rest } = rest
    const _data_cart = __cart || _cart || {}
    const _data_gateway = _layoutGateway || _gateway
    const _data_binding = _layoutBinding || _binding
    const _data_filter = _layoutFilter || _filter
    const _data_chain = _layoutChain || _chain

    // all props (xname, props) from within presenter
    // const _____presenterName = _presenter ? ((typeof _presenter === 'string')? _presenter : _presenter.xname) : undefined  //local presenter
    // const _____presenter = ((_presenter && _presenter.props) ? _presenter.props : undefined) || undefined

    // TODO, should not support, keep it
    // const _____presenterCart = ((_data_presenter && _data_presenter.cart) ? _data_presenter.cart : undefined) || undefined
    // const _____presenterIndicator = ((_data_presenter && _data_presenter.indicator) ? _data_presenter.indicator : undefined) || undefined
    // const _____presenterBinding = ((_data_presenter && _data_presenter.binding) ? _data_presenter.binding : {}) || {}
    // const _____presenterGateway = ((_data_presenter && _data_presenter.gateway) ? _data_presenter.gateway : {}) || {}
    // const __presenterName = _xname || _____presenterName ||  tips(_xname);
    // const __presenter = _props || _____presenter || {};
    // const __cart0 = _data_cart || (_____presenterCart||_____presenterIndicator)? {cart: {..._____presenterCart, indicator:_____presenterIndicator}} : {};
    // const __binding = {..._binding, ..._____presenterBinding}
    // const __gateway = _data_gateway ? ((typeof _data_gateway ==='string')? undefined : _data_gateway.props ) : undefined || _____presenterGateway
    // deprecated

    // const __presenterName = _xname || _____presenterName ||  tips(_xname);
    // const __presenter = _____presenter || _props;

    const _t_presenterName = _xname || ___presenter.xname || tips(_xname);
    const nextTag = tag ? { tag: `${tag}-native-${_t_presenterName}` } : {}
    const _t_presenter = (_t_presenterName === 'autolayout' ? { layout: { ...___presenter.props, ...nextTag } } : ___presenter.props) || _props || tips(_props);

    // selected={true} 仅用于单组件测试
    const __NamedCart = _data_cart ? NamedCart : NextIndicator;
    const __NamedGateway = (_data_binding || _data_filter || _data_chain || _data_gateway) ? NamedGateway : NextIndicator;
    const __Presenter = _allComponents[_t_presenterName] || (_t_presenterName === 'autolayout' && AutoLayout) || tips(_t_presenterName)

    // <__Presenter/> 新增onItemClick 
    return (
      <__NamedGateway tag={`${_tag}-__NamedGateway__[${_gatewayName}]`} binding={_data_binding} filter={_data_filter} chain={_data_chain} gateway={_data_gateway} {..._rest}>
        <__NamedCart tag={`${_tag}-__NamedCart__`} {..._data_cart}>
          <__Presenter tag={`${_tag}-__Presenter__`} {..._t_presenter} allComponents={allComponents} onItemClick={onItemClick} />
        </__NamedCart>
      </__NamedGateway>
    )
  }

  // xname use for layout, use default VStack
  // __ means NamedLayout used internal within AutoLayout, or be used seperately
  const __xname = xname || 'VStack'

  return layoutChildren ? (
    
    <___previewIndicator xseq={xseq} onAutoPreview={onAutoPreview}>
      <Container  {..._container}  {..._dataSource} {...rest}
        navigation={navigation}
        onAutoPreview={onAutoPreview}
        tag={`${_tag}-children-container[${_containerName}]`}
      >

        <NamedLayout xname={__xname} props={props}
          tag={`${_tag}-children-layout[${__xname}]`}>


          {layoutChildren.map((child, i) => {

            // show tag to trace the data flow
            const itemTag = `${_tag}-children[${i}]`

            const __Presenter = ((typeof child === 'string') ? _allComponents[child] : AutoLayout) || tips(presenter)
            const __presenter = isJsonObject(child) ? { layout: { ...child } } : {}

            return (
              <_NamedGateway key={i} binding={_layoutBinding} filter={_layoutFilter} chain={_layoutChain} gateway={_gateway}
                tag={`${itemTag}-gateway[${_gatewayName}]`} >

                <_NamedCart {...__cart}
                  onItemDeleted={onItemDeleted}
                  onItemAdded={onItemAdded}
                  onItemChanged={onItemChanged}
                  onItemIndicated={onItemIndicated}
                  tag={`${_tag}-cart[${_cartName}]`}
                >
                  <__Presenter ___={___} xseq={xseq} {...__presenter} allComponents={allComponents} key={i}
                    tag={`${itemTag}-presenter[${_presenterName}]`}
                    onItemClick={onItemClick}
                  />

                </_NamedCart>
              </_NamedGateway>
            )

          })}
        </NamedLayout>
      </Container>
    </___previewIndicator>
  ) : (
    <___previewIndicator xseq={xseq} onAutoPreview={onAutoPreview}>
      <Container  {..._container}  {..._dataSource} {...rest} navigation={navigation}
        useReplacing={_useReplacing}
        tag={`${_tag}-presenter-container[${_containerName}]`}
        onItemClick={onItemClick}
        onAutoPreview={onAutoPreview}
      // onItemClick={onItemClick} 
      // onItemDeleted={onItemDeleted}
      // onItemAdded={onItemAdded}
      // onItemChanged={onItemChanged}
      // onItemIndicated={onItemIndicated}
      >
        <NamedLayout xname={__xname} props={props}
          tag={`${_tag}-standard-layout[${__xname}]`}>
          <_NamedGateway binding={_layoutBinding} filter={_layoutFilter} chain={_layoutChain} gateway={_gateway}
            tag={`${_tag}-gateway[${_gatewayName}]`}>
            <_NamedCart {...__cart}
              onItemDeleted={onItemDeleted}
              onItemAdded={onItemAdded}
              onItemChanged={onItemChanged}
              onItemIndicated={onItemIndicated}
              tag={`${_tag}-cart[${_cartName}]`}
            >
              {
                presenter ? <Presenter ___={___} xseq={xseq} {..._presenter} allComponents={allComponents}
                  onItemClick={onItemClick}
                  tag={`${_tag}-presenter[${_presenterName}]`}
                />
                  :
                  React.Children.toArray(children)
              }
            </_NamedCart>
          </_NamedGateway>
        </NamedLayout>
      </Container>
    </___previewIndicator>
  )
}


function tips(name) {
  return _ => `${name} 未定义`;
}

function tagged(tag, data) {
  if (tag) {
    console.log(`TAG-AutoLayout-${tag}`)
  }

  if (data) {
    console.log('userdata=', data.userdata ? data.userdata : data)
  }
}


function isJsonObject(obj) {
  return (obj && typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]")
}

/**
 * if filter gateway
 * @param {object} gateway 
 */
function isFilter(gateway) {
  let filtered = undefined
  if (Object.keys(gateway).length === 1) {
    Object.keys(gateway).map(key => {
      const filterValue = gateway[key]
      if (Array.isArray(filterValue) && filterValue.length === 0) {
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
function sugarCart({ cart, indicator, selector, unselector, bounding }) {
  if (indicator || selector || unselector || bounding) {

    // if only selector, just return selector, the same case for indicator
    // if(indicator && selector===undefined && bounding===undefined){
    //     return {
    //       indicator: indicator
    //     }
    // }else if(selector && indicator===undefined && bounding===undefined){
    //   return {
    //       selector: selector
    //   }
    // }

    return {
      cart: {
        ...cart,
        indicator: indicator,
        selector: selector,
        unselector: unselector,
        bounding: bounding
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
function sugarLayout(layout) {
  // layout is array
  if (Array.isArray(layout)) {
    return {
      children: layout
    }
  }
  return layout
}

function sugarGateway(gateway) {
  const { xname, _, props } = gateway
  // named gateway, just return for NamedGateway
  if (xname) {
    return gateway
  }

  if (typeof gateway === 'object' && Object.keys(gateway).length === 0) {
    return gateway
  }

  if (Array.isArray(gateway)) {
    return {
      xname: 'Chain',
      props: {
        chain: gateway
      }
    }
  }

  // get item index
  if (_) {
    return {
      xname: 'GetItem',
      props: {
        itemIndex: _
      }
    }
  }

  // filter 
  if (isFilter(gateway)) {
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

function getComponent(component, componentSet) {
  const notnull_component = component || {}
  const componentName = (typeof notnull_component === 'string') ? notnull_component : notnull_component.xname

  const _Component = componentName ? (componentSet[componentName] || tips(componentName)) : NextIndicator

  const _component = (typeof notnull_component === 'string') ? {} : notnull_component.props

  return { _Component, _component }
}

