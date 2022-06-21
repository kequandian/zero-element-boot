import { useSize } from 'ahooks';

import React from 'react';
import { useState, useEffect } from 'react';
import { NamedContainer, NamedLayout, NamedGateway, NamedCart, NextIndicator } from '@/components';
import DefaultContainer from '@/components/container/Container'

import { get as NamedPresenterGet } from '@/components/config/NamedPresenterConfig';

import loadingPage from '@/components/loading';

// import requireConfig from '@/components/AutoX/requireConfig';
// import { Container } from '@/components/container';

// change history
//CR.2020-12-26 init

//CR.2020-12-29 add Container


//CR.2021-01-13 merge AutoComponent and AutoLayout

// 2021-3-25 新增通过 fetch 获取 layoutJson 配置信息, 新增 loading 加载效果
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

function AutoLayout({ children, layout, allComponents = {}, onItemClick = () => { console.log('未设置onItemClick点击事件') }, ...data }) {
  // handle layout, container, gateway, cart, presenter, navigation, children
  const { xname, props, container, gateway, cart, presenter, navigation, children: layoutChildren } = layout || {};

  const _cart = (cart && typeof cart === 'string') ? { xname: cart } : cart
  const _gateway = (gateway && typeof gateway === 'string') ? { xname: gateway } : gateway

  // Cart & Gateway 
  const _NamedCart = _cart ? NamedCart : NextIndicator;
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

  // handle simple presenter
  if (!presenter && !layoutChildren && !container){
      const {_xname:__presenterName, _props:__presenter } = data
      const __Presenter = _allComponents[__presenterName] || tips(__presenterName)
      return <__Presenter {...__presenter} allComponents={allComponents} />
 }

  return layoutChildren ? (

    <Container {..._container} {...data} navigation={navigation}>

        <NamedLayout xname={xname} props={props} >
          {layoutChildren ? layoutChildren.map((child, i) => {
            const { presenter, span, gateway, cart } = child;

            const __cart = cart
            const __gateway = gateway ? ((typeof gateway === 'string') ? { xname: gateway } : gateway) : {}
            const __NamedGateway = gateway ? NamedGateway : NextIndicator

            const __Presenter = ((presenter && typeof presenter === 'string') ? _allComponents[presenter]: (isJsonObject(presenter)? AutoLayout : undefined)) || tips(presenter)
            const __presenter = isJsonObject(presenter)? {layout: {...presenter}} : {}

            return (
              <__NamedGateway {...__gateway} key={i} span={span} >
                  <_NamedCart {...__cart} >
                  {isJsonObject(__presenter)? 
                      <__Presenter {...__presenter} allComponents={allComponents} onItemClick={onItemClick} />
                    :
                    <__Presenter {...__presenter} allComponents={allComponents} />
                  }
                  </_NamedCart>
              </__NamedGateway>
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
    <Container {..._container} {...data} onItemClick={onItemClick} navigation={navigation} >
      <NamedLayout xname={xname} props={props}>
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

// function isLayoutObject(obj) {
//   return (obj && typeof (obj) == "object" && obj.xname) && 
//          (obj.presenter || (obj.children && Object.prototype.toString.call(obj.children).toLowerCase() == "[object array]" && obj.children.length > 0 ))
// }
