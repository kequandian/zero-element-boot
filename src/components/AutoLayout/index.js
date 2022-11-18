import { useSize } from 'ahooks';

import React from 'react';
import { useState, useEffect } from 'react';
import { NamedContainer, NamedLayout, NamedGateway, NamedCart, NextIndicator } from '@/components';

import DefaultContainer from '@/components/container/Container'

import { get as NamedPresenterGet } from '@/components/config/NamedPresenterConfig';

import loadingPage from '@/components/loading';
import { Filter } from '../gateway';

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
        // if (p.layout.children) {
        //   return _AutoComponent(p);
        // }
        return AutoLayout(p);
      } else {
        console.error('获取配置数据异常')
      }
    }
  } else {
    // if (layout.children) {
    //   return _AutoComponent(props);
    // }
    return AutoLayout(props);
  }

}


// AutoLayout update history
// CR.增加处理选中的 (Cart=> indicator)
// when: 2021-03-24

//2021-11-10
//新增 layout 新增 navigation 属性

function AutoLayout({ children, layout, gateway, allComponents = {}, onItemClick = () => { console.log('未设置onItemClick点击事件') }, dataSource, ...rest }) {
  // handle layout, container, gateway, cart, presenter, xpresenter, navigation, children
  // xpresenter 子项组件数据多层传递问题，意义同 presenter
  const { xname='VStack', props, container, gateway: layoutGateway, cart, indicator, selector, presenter, xpresenter, navigation, children: layoutChildren } = sugarLayout(layout) || {};
  const data = dataSource || rest || {}

  // Cart
  const __cart = ((cart && typeof cart === 'string') ? { xname: cart } : cart) || {}
  const _cart = sugarCart({...__cart, indicator: indicator, selector:selector})
  const _NamedCart = cart ? NamedCart : NextIndicator;

  // Gateway
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

  // handle simple presenter, from data
  if (!presenter && !layoutChildren && !container){
      // support from data, not layout
      const {_xname = xname, _props = {...props}, _cart = {...cart}, xpresenter = {xname:_xname, props: {..._props}, cart: {..._cart}}, ...rest } = data

      const __presenterName = xpresenter.xname || tips(xpresenter.xname);
      const __presenter = xpresenter.props || {};
      const __cart = xpresenter.cart || {};

      const __NamedCart = (_cart && (typeof _cart === 'string')) ? NamedCart : NextIndicator;

      const __Presenter = _allComponents[__presenterName] || tips(__presenterName)
      return (
        <__NamedCart {...__cart} {...rest} >
            <__Presenter {...__presenter} allComponents={allComponents} />
        </__NamedCart>
      )
 }

  return layoutChildren ? (
    <Container {..._container} {...data} navigation={navigation}>
        <NamedLayout xname={xname} props={props} __>
          {layoutChildren ? layoutChildren.map((child, i) => {

            const __Presenter = ((typeof child === 'string') ? _allComponents[child] : AutoLayout) || tips(presenter)
            const __presenter = isJsonObject(child)? {layout: {...child}} : {}

            return (
                <__Presenter {...__presenter} allComponents={allComponents} onItemClick={onItemClick}  key={i} />
            )

          }) : (
            React.Children.map(children, (child, i) => {
                <_NamedCart key={i} {..._cart} >
                  {child}
                </_NamedCart>
            })
          )}
        </NamedLayout>
    </Container>
  ) : (
    <Container {..._container} {...data} onItemClick={onItemClick} navigation={navigation}>
      <NamedLayout xname={xname} props={props} __>
          <_NamedGateway {..._gateway}>
                <_NamedCart {..._cart} >
                  {presenter ?
                    <Presenter {..._presenter} allComponents={allComponents} />
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
function sugarCart({indicator:indicator, selector:selector, ...cart}){
    if(indicator || selector){
      return {
        cart: {
          ...cart, 
          indicator: indicator,
          selector: selector
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
