function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { useSize } from 'ahooks';
import React from 'react';
import { useState, useEffect } from 'react';
import { NamedContainer, NamedLayout, NamedGateway, NamedCart } from "./..";
import DefaultContainer from "../container/Container";
import { get as NamedPresenterGet } from "../config/NamedPresenterConfig";
import loadingPage from "../loading";
import requireConfig from "../AutoX/requireConfig";
import { Container } from "../container"; // change history
//CR.2020-12-26 init
//CR.2020-12-29 add Container
//CR.2021-01-13 merge AutoComponent and AutoLayout
// 2021-3-25 新增通过 fetch 获取 layoutJson 配置信息, 新增 loading 加载效果

export default function (props) {
  const {
    layout,
    ...rest
  } = props;
  const {
    path
  } = layout;
  const [layoutJson, setLayoutJson] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (path) {
      fetchData();
    }
  }, []); //根据 path 异步获取 layout json

  const fetchData = async () => {
    const result = await fetch(path, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(function (resp) {
      return resp.json();
    }).then(function (layoutJson) {
      return layoutJson;
    }); //保存layout json 数据

    setLayoutJson(result.layout); //更改loading状态

    setLoading(false);
  };

  if (path) {
    if (loading) {
      return loadingPage();
    } else {
      if (layoutJson && JSON.stringify(layoutJson) != '{}') {
        const p = { ...props,
          layout: layoutJson
        }; // if (p.layout.children) {
        //   return _AutoComponent(p);
        // }

        return AutoLayout(p);
      } else {
        console.error('获取配置数据异常');
      }
    }
  } else {
    // if (layout.children) {
    //   return _AutoComponent(props);
    // }
    return AutoLayout(props);
  }
} // AutoLayout update history
// CR.增加处理选中的 (Cart=> indicator)
// when: 2021-03-24
//2021-11-10
//新增 layout 新增 navigation 属性

function AutoLayout({
  children,
  layout,
  allComponents = NamedPresenterGet(),
  onItemClick = () => {
    console.log('未设置onItemClick点击事件');
  },
  ...data
}) {
  // handle layout, for children in {layout
  const {
    xname,
    props,
    container,
    gateway,
    cart,
    indicator,
    presenter,
    navigation,
    children: layoutChildren
  } = layout || {};

  const _cart = cart && typeof cart === 'string' ? {
    xname: cart
  } : cart;

  const _gateway = gateway && typeof gateway === 'string' ? {
    xname: gateway
  } : gateway; // AutoComponent config


  let _indicator;

  let Presenter;

  if (!layoutChildren) {
    _indicator = indicator && typeof indicator === 'string' ? {
      xname: indicator
    } : indicator;
    Presenter = presenter ? typeof presenter === 'string' ? allComponents[presenter] : isJsonObject(presenter) ? AutoLayout : tips(presenter) : null;
  } // AutoComponent config
  // handle container


  const Container = container ? NamedContainer : DefaultContainer;

  const _container = (typeof container === 'string' ? {
    xname: container
  } : container) || {};

  if (isJsonObject(presenter)) {
    presenter.layout = { ...presenter
    };
  } // AutoComponent config


  let componentsJson;
  let defaultPresenter;
  let defaultGateway;
  let defaultCart;

  let _Container;

  if (layoutChildren) {
    _Container = container ? NamedContainer : DefaultContainer;
    componentsJson = allComponents ? allComponents : namedPresenterGet; //

    defaultPresenter = presenter;
    defaultGateway = gateway;
    defaultCart = cart;
  } // AutoComponent config


  return layoutChildren ? /*#__PURE__*/React.createElement(_Container, _extends({}, _container, data, {
    navigation: navigation
  }), cart ? /*#__PURE__*/React.createElement(NamedLayout, {
    xname: xname,
    props: props,
    navigation: navigation
  }, layoutChildren ? layoutChildren.map((child, i) => {
    const {
      presenter,
      span,
      gateway,
      cart: childCart
    } = child;

    const _presenter = presenter ? presenter : defaultPresenter;

    const Presenter = _presenter ? componentsJson[_presenter] || tips(_presenter) : null; // const _gateway = gateway ? ((typeof gateway === 'string') ? { xname: gateway } : gateway) : defaultGateway
    // const _cart = cart ? ((typeof cart === 'string') ? { xname: cart } : cart) : defaultCart
    // each item has its Named Gateway

    return /*#__PURE__*/React.createElement(NamedGateway, _extends({}, _gateway, {
      key: i,
      span: span
    }), cart ? /*#__PURE__*/React.createElement(NamedCart, _extends({
      key: i
    }, _cart), presenter ? /*#__PURE__*/React.createElement(Presenter, null) : React.Children.toArray(children)) : presenter ? /*#__PURE__*/React.createElement(Presenter, null) : React.Children.toArray(children));
  }) : React.Children.map(children, (child, i) => {
    return cart ? /*#__PURE__*/React.createElement(NamedCart, _extends({
      key: i
    }, _cart), child) : child;
  })) : /*#__PURE__*/React.createElement(NamedLayout, {
    xname: xname,
    props: props,
    navigation: navigation
  }, layoutChildren ? layoutChildren.map((child, i) => {
    const {
      presenter,
      span,
      gateway,
      cart: childCart
    } = child;

    const _gateway = gateway ? typeof gateway === 'string' ? {
      xname: gateway
    } : gateway : defaultGateway;

    const _cart = childCart ? typeof childCart === 'string' ? {
      xname: childCart
    } : childCart : defaultCart;

    if (typeof presenter === 'string') {
      const _presenter = presenter ? presenter : defaultPresenter;

      const Presenter = _presenter ? componentsJson[_presenter] || tips(_presenter) : null; // each item has its Named Gateway

      return /*#__PURE__*/React.createElement(NamedGateway, _extends({}, _gateway, {
        key: i,
        span: span
      }), childCart ? /*#__PURE__*/React.createElement(NamedCart, childCart, presenter ? /*#__PURE__*/React.createElement(Presenter, null) : React.Children.toArray(children)) : presenter ? /*#__PURE__*/React.createElement(Presenter, null) : React.Children.toArray(children));
    } else if (isJsonObject(presenter)) {
      return /*#__PURE__*/React.createElement(NamedGateway, _extends({}, _gateway, {
        key: i,
        span: span
      }), childCart ? /*#__PURE__*/React.createElement(NamedCart, childCart, presenter ? /*#__PURE__*/React.createElement(AutoLayout, {
        layout: presenter,
        onItemClick: onItemClick
      }) : React.Children.toArray(children)) : presenter ? /*#__PURE__*/React.createElement(AutoLayout, {
        layout: presenter,
        onItemClick: onItemClick
      }) : React.Children.toArray(children));
    }
  }) : React.Children.map(children, (child, i) => {
    return cart ? /*#__PURE__*/React.createElement(NamedCart, _extends({
      key: i
    }, _cart), child) : child;
  }))) : /*#__PURE__*/React.createElement(Container, _extends({}, _container, data, {
    onItemClick: onItemClick,
    navigation: navigation
  }), /*#__PURE__*/React.createElement(NamedLayout, {
    xname: xname,
    props: props
  }, gateway ? /*#__PURE__*/React.createElement(NamedGateway, _gateway, indicator ? /*#__PURE__*/React.createElement(NamedCart, _indicator, cart ? /*#__PURE__*/React.createElement(NamedCart, _cart, presenter ? /*#__PURE__*/React.createElement(Presenter, presenter) : React.Children.toArray(children)) : presenter ? /*#__PURE__*/React.createElement(Presenter, presenter) : React.Children.toArray(children)) // end indicator
  : cart ? /*#__PURE__*/React.createElement(NamedCart, _cart, presenter ? /*#__PURE__*/React.createElement(Presenter, presenter) : React.Children.toArray(children)) : presenter ? /*#__PURE__*/React.createElement(Presenter, presenter) : React.Children.toArray(children) //cart?
  ) : indicator ? /*#__PURE__*/React.createElement(NamedCart, _indicator, cart ? /*#__PURE__*/React.createElement(NamedCart, _cart, presenter ? /*#__PURE__*/React.createElement(Presenter, presenter) : React.Children.toArray(children)) : presenter ? /*#__PURE__*/React.createElement(Presenter, presenter) : React.Children.toArray(children)) // end indicator
  : cart ? /*#__PURE__*/React.createElement(NamedCart, _cart, presenter ? /*#__PURE__*/React.createElement(Presenter, presenter) : React.Children.toArray(children)) : presenter ? /*#__PURE__*/React.createElement(Presenter, presenter) : React.Children.toArray(children) //cart?
  ));
}

function tips(name) {
  return _ => `${name} 未定义`;
}

function isJsonObject(obj) {
  if (typeof obj == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]") {
    return true;
  }

  return false;
}