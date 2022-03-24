import { useSize } from 'ahooks';

import React from 'react';
import { useState, useEffect } from 'react';
import { NamedContainer, NamedLayout, NamedGateway, NamedCart } from '@/components';
import DefaultContainer from '@/components/container/Container'

import { get as NamedPresenterGet } from '@/components/config/NamedPresenterConfig';

import loadingPage from '@/components/loading';

import requireConfig from '@/components/AutoX/requireConfig';
import { Container } from '@/components/container';

// change history
//CR.2020-12-26 init

//CR.2020-12-29 add Container


//CR.2021-01-13 merge AutoComponent and AutoLayout

// 2021-3-25 新增通过 fetch 获取 layoutJson 配置信息, 新增 loading 加载效果
export default function (props) {
  const { layout, ...rest } = props;
  const { path } = layout;
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

function AutoLayout({ children, layout, allComponents = NamedPresenterGet(), onItemClick = () => { console.log('未设置onItemClick点击事件') }, ...data }) {

  // handle layout, for children in {layout
  const { xname, props, container, gateway, cart, indicator, presenter, navigation, children: layoutChildren } = layout || {};

  const _cart = (cart && typeof cart === 'string') ? { xname: cart } : cart
  const _gateway = (gateway && typeof gateway === 'string') ? { xname: gateway } : gateway
  
  // AutoComponent config
  let _indicator;
  let Presenter;
  if(!layoutChildren){
    _indicator = (indicator && typeof indicator === 'string') ? { xname: indicator } : indicator
    Presenter = presenter ? (typeof presenter === 'string' ? allComponents[presenter] : isJsonObject(presenter) ? AutoLayout : tips(presenter)) : null;
  }
  // AutoComponent config

  // handle container
  const Container = container ? NamedContainer : DefaultContainer
  const _container = ((typeof container === 'string') ? { xname: container } : container) || {}

  if(isJsonObject(presenter)){
    presenter.layout = {...presenter}
  }

  // AutoComponent config
  let componentsJson;
  let defaultPresenter;
  let defaultGateway;
  let defaultCart;
  let _Container;
  if(layoutChildren){
    _Container = container ? NamedContainer : DefaultContainer
    componentsJson = allComponents ? allComponents : namedPresenterGet;  //
    defaultPresenter = presenter;
    defaultGateway = gateway
    defaultCart = cart
  }
  // AutoComponent config

  return layoutChildren ? (

    <_Container {..._container} {...data} navigation={navigation}>
    {cart ? (
      <NamedLayout xname={xname} props={props} navigation={navigation} >
        {layoutChildren ? layoutChildren.map((child, i) => {
          const { presenter, span, gateway, cart: childCart } = child;
          const _presenter = presenter ? presenter : defaultPresenter
          const Presenter = _presenter ? componentsJson[_presenter] || tips(_presenter) : null;

          // const _gateway = gateway ? ((typeof gateway === 'string') ? { xname: gateway } : gateway) : defaultGateway
          // const _cart = cart ? ((typeof cart === 'string') ? { xname: cart } : cart) : defaultCart

          // each item has its Named Gateway
          return <NamedGateway {..._gateway} key={i} span={span} >
            {cart ?
              <NamedCart key={i} {..._cart} >
                {presenter ?
                  <Presenter />
                  :
                  React.Children.toArray(children)
                }
              </NamedCart>
              :
              (presenter ?
                <Presenter />
                :
                React.Children.toArray(children)
              )
            }
          </NamedGateway>

        }) : (
            React.Children.map(children, (child, i) => {
              return cart ?
                <NamedCart key={i} {..._cart} >
                  {child}
                </NamedCart>
                :
                (
                  child
                )
            })
          )}
      </NamedLayout>
    ) : (
        <NamedLayout xname={xname} props={props} navigation={navigation} >
          {layoutChildren ? layoutChildren.map((child, i) => {
            const { presenter, span, gateway, cart: childCart } = child;
            
            const _gateway = gateway ? ((typeof gateway === 'string') ? { xname: gateway } : gateway) : defaultGateway
            const _cart = cart ? ((typeof cart === 'string') ? { xname: cart } : cart) : defaultCart

            if(typeof presenter === 'string'){

              const _presenter = presenter ? presenter : defaultPresenter
              const Presenter = _presenter ? componentsJson[_presenter] || tips(_presenter) : null;

              // each item has its Named Gateway
              return <NamedGateway {..._gateway} key={i} span={span} >
                {cart ?
                  <NamedCart {..._cart} >
                    {presenter ?
                      <Presenter />
                      :
                      React.Children.toArray(children)
                    }
                  </NamedCart>
                  :
                  (presenter ?
                    <Presenter />
                    :
                    React.Children.toArray(children)
                  )
                }
              </NamedGateway>
            }else if(isJsonObject(presenter)){
              return (
                <NamedGateway {..._gateway} key={i} span={span} >
                  {presenter ?
                    <AutoLayout layout = {presenter} onItemClick={onItemClick}/>
                    :
                    React.Children.toArray(children)
                  }
                </NamedGateway>
              )
            }

          }) : (

              React.Children.map(children, (child, i) => {
                return cart ?
                  <NamedCart key={i} {..._cart} >
                    {child}
                  </NamedCart>
                  :
                  (
                    child
                  )
              })
            )}
        </NamedLayout>
      )}
  </_Container>


  ) : (
    
      <Container {..._container} {...data} onItemClick={onItemClick} navigation={navigation} >

      <NamedLayout xname={xname} props={props}>
        {gateway ? (
          <NamedGateway {..._gateway}>
            {indicator ?
              <NamedCart {..._indicator}>
                {cart ?
                  <NamedCart {..._cart} >
                    {presenter ?
                      <Presenter {...presenter} />
                      :
                      React.Children.toArray(children)
                    }
                  </NamedCart>
                  :
                  (presenter ?
                    <Presenter {...presenter} />
                    : React.Children.toArray(children)
                  )
                }
              </NamedCart> // end indicator
              :
              (cart ?
                <NamedCart {..._cart} >
                  {presenter ?
                    <Presenter {...presenter} />
                    :
                    React.Children.toArray(children)
                  }
                </NamedCart>
                :
                (presenter ?
                  <Presenter {...presenter} />
                  :
                  React.Children.toArray(children)
                )
              )//cart?
            }
          </NamedGateway>
        ) : (

            indicator ?
              <NamedCart {..._indicator}>
                {cart ?
                  <NamedCart {..._cart} >
                    {presenter ?
                      <Presenter {...presenter} />
                      :
                      React.Children.toArray(children)
                    }
                  </NamedCart>
                  :
                  (presenter ?
                    <Presenter {...presenter} />
                    :
                    React.Children.toArray(children)
                  )
                }
              </NamedCart> // end indicator
              :
              (cart ?
                <NamedCart {..._cart} >
                  {presenter ?
                    <Presenter {...presenter} />
                    :
                    React.Children.toArray(children)
                  }
                </NamedCart>
                :
                (presenter ?
                  <Presenter {...presenter} />
                  :
                  React.Children.toArray(children)
                )
              )//cart?

          )}

      </NamedLayout>
    </Container>
  )
}


// ************************************************************************************
// ================================= AutoComponent ====================================
// ************************************************************************************

/**
 * 自动构建，没有Children
 * @param {布局} layout 
 * @param {绑定数据} data
 */

/**
 * 2021年11月17日
 * 注释 const parent = module.parents[0];
 */
function _AutoComponent ({ children, layout = requireConfig(parent), allComponents = NamedPresenterGet(), onItemClick, ...data }) {
  //const parent = module.parents[0]; //get module name
  // const [layoutRef, { getClassName }] = useLayout();

  console.log('_AutoComponent children = ', children)
  console.log('_AutoComponent layout = ', layout)
  console.log('_AutoComponent data = ', data)
  console.log('_AutoComponent allComponents = ', allComponents)

  const componentsJson = allComponents ? allComponents : namedPresenterGet;  //

  const { xname, props, container, children: layoutChildren, gateway, cart, presenter, navigation } = layout || {};
  const defaultGateway = gateway
  const defaultCart = cart

  const _cart = (cart && typeof cart === 'string') ? { xname: cart } : cart

  const defaultPresenter = presenter;

  //handle container
  const _Container = container ? NamedContainer : Container
  const _container = ((typeof container === 'string') ? { xname: container } : container) || {}

  // restLayout means layout props
  // child iterator from children contains: [name, span, cart, gateway]
  // return <div
  //   className={getClassName()}
  // >
  // <NamedLayout xname={xname} props={props} ref={layoutRef}>

  // console.log('autocomponent onItemClick = ', onItemClick)

  /** 
  * 2021-5-13 移除 NamedLayout NamedCart，有需要在 index copy.js 取回
  */
  return <_Container {..._container} {...data} navigation={navigation}>
    {cart ? (
      <NamedLayout xname={xname} props={props} navigation={navigation} >
        {layoutChildren ? layoutChildren.map((child, i) => {
          const { presenter, span, gateway, cart: childCart } = child;
          const _presenter = presenter ? presenter : defaultPresenter
          const Presenter = _presenter ? componentsJson[_presenter] || tips(_presenter) : null;

          const _gateway = gateway ? ((typeof gateway === 'string') ? { xname: gateway } : gateway) : defaultGateway
          const _cart = cart ? ((typeof cart === 'string') ? { xname: cart } : cart) : defaultCart

          // each item has its Named Gateway
          return <NamedGateway {..._gateway} key={i} span={span} >
            {cart ?
              <NamedCart key={i} {..._cart} >
                {presenter ?
                  <Presenter />
                  :
                  React.Children.toArray(children)
                }
              </NamedCart>
              :
              (presenter ?
                <Presenter />
                :
                React.Children.toArray(children)
              )
            }
          </NamedGateway>

        }) : (
            React.Children.map(children, (child, i) => {
              return cart ?
                <NamedCart key={i} {..._cart} >
                  {child}
                </NamedCart>
                :
                (
                  child
                )
            })
          )}
      </NamedLayout>
    ) : (
        <NamedLayout xname={xname} props={props} navigation={navigation} >
          {layoutChildren ? layoutChildren.map((child, i) => {
            const { presenter, span, gateway, cart: childCart } = child;
            const _gateway = gateway ? ((typeof gateway === 'string') ? { xname: gateway } : gateway) : defaultGateway
            const _cart = cart ? ((typeof cart === 'string') ? { xname: cart } : cart) : defaultCart

            if(typeof presenter === 'string'){

              const _presenter = presenter ? presenter : defaultPresenter
              const Presenter = _presenter ? componentsJson[_presenter] || tips(_presenter) : null;

              // each item has its Named Gateway
              return <NamedGateway {..._gateway} key={i} span={span} >
                {cart ?
                  <NamedCart {..._cart} >
                    {presenter ?
                      <Presenter />
                      :
                      React.Children.toArray(children)
                    }
                  </NamedCart>
                  :
                  (presenter ?
                    <Presenter />
                    :
                    React.Children.toArray(children)
                  )
                }
              </NamedGateway>
            }else if(isJsonObject(presenter)){
              return (
                <NamedGateway {..._gateway} key={i} span={span} >
                  {presenter ?
                    <AutoLayout layout = {presenter} onItemClick={onItemClick}/>
                    :
                    React.Children.toArray(children)
                  }
                </NamedGateway>
              )
            }

          }) : (

              React.Children.map(children, (child, i) => {
                return cart ?
                  <NamedCart key={i} {..._cart} >
                    {child}
                  </NamedCart>
                  :
                  (
                    child
                  )
              })
            )}
        </NamedLayout>
      )}
  </_Container>
  // </div>;
}

function tips(name) {
  return _ => `${name} 未定义`;
}

function isJsonObject(obj) {
  if (typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]") {
    return true;
  }
  return false;
}