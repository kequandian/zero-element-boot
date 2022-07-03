function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { useSize } from 'ahooks';
import React from 'react';
import { useState, useEffect } from 'react';
import { NamedContainer, NamedLayout, NamedGateway, NamedCart, NextIndicator } from "./..";
import DefaultContainer from "../container/Container";
import { get as NamedPresenterGet } from "../config/NamedPresenterConfig";
import loadingPage from "../loading"; // import requireConfig from '@/components/AutoX/requireConfig';
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
  const {
    layout
  } = props;
  const {
    path
  } = layout ? layout : {};
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
  gateway = {},
  allComponents = {},
  onItemClick = () => {
    console.log('未设置onItemClick点击事件');
  },
  ...data
}) {
  // handle layout, container, gateway, cart, presenter, xpresenter, navigation, children
  // xpresenter 子项组件数据多层传递问题，意义同 presenter
  const {
    xname = 'VStack',
    props,
    container,
    gateway: layoutGateway = { ...gateway
    },
    cart,
    presenter,
    xpresenter,
    navigation,
    children: layoutChildren
  } = layout || {}; // Cart

  const _cart = cart && typeof cart === 'string' ? {
    xname: cart
  } : cart;

  const _NamedCart = _cart ? NamedCart : NextIndicator; // Gateway 


  const _gateway = layoutGateway ? typeof layoutGateway === 'string' ? {
    xname: layoutGateway
  } : simplifyGateway(layoutGateway) : undefined;

  const _NamedGateway = _gateway ? NamedGateway : NextIndicator; // handle container


  const Container = container ? NamedContainer : DefaultContainer;

  const _container = (typeof container === 'string' ? {
    xname: container
  } : container) || {}; // allComponents


  const defaultPresenterGet = NamedPresenterGet();
  const _allComponents = { ...allComponents,
    ...defaultPresenterGet
  }; // Presenter,  means presenter is AutoLayout

  const Presenter = (presenter && typeof presenter === 'string' ? _allComponents[presenter] : isJsonObject(presenter) ? AutoLayout : undefined) || tips(presenter);

  const _presenter = isJsonObject(presenter) ? {
    layout: { ...presenter
    }
  } : {}; // handle simple presenter, from data


  if (!presenter && !layoutChildren && !container) {
    // support from data, not layout
    const {
      _xname = xname,
      _props = { ...props
      },
      _cart = { ...cart
      },
      xpresenter = {
        xname: _xname,
        props: { ..._props
        },
        cart: { ..._cart
        }
      },
      ...rest
    } = data;

    const __presenterName = xpresenter.xname || tips(xpresenter.xname);

    const __presenter = xpresenter.props || {};

    const __cart = xpresenter.cart || {};

    const __NamedCart = _cart && typeof _cart === 'string' ? NamedCart : NextIndicator;

    const __Presenter = _allComponents[__presenterName] || tips(__presenterName);

    return /*#__PURE__*/React.createElement(__NamedCart, _extends({}, __cart, rest), /*#__PURE__*/React.createElement(__Presenter, _extends({}, __presenter, {
      allComponents: allComponents
    })));
  }

  return layoutChildren ? /*#__PURE__*/React.createElement(Container, _extends({}, _container, data, {
    navigation: navigation
  }), /*#__PURE__*/React.createElement(NamedLayout, {
    xname: xname,
    props: props,
    __: true
  }, layoutChildren ? layoutChildren.map((child, i) => {
    const __Presenter = (typeof child === 'string' ? _allComponents[child] : AutoLayout) || tips(presenter);

    const __presenter = isJsonObject(child) ? {
      layout: { ...child
      }
    } : {};

    return /*#__PURE__*/React.createElement(__Presenter, _extends({}, __presenter, {
      allComponents: allComponents,
      onItemClick: onItemClick,
      key: i
    }));
  }) : React.Children.map(children, (child, i) => {
    /*#__PURE__*/
    React.createElement(_NamedCart, _extends({
      key: i
    }, _cart), child);
  }))) : /*#__PURE__*/React.createElement(Container, _extends({}, _container, data, {
    onItemClick: onItemClick,
    navigation: navigation
  }), /*#__PURE__*/React.createElement(NamedLayout, {
    xname: xname,
    props: props,
    __: true
  }, /*#__PURE__*/React.createElement(_NamedGateway, _gateway, /*#__PURE__*/React.createElement(_NamedCart, _cart, presenter ? /*#__PURE__*/React.createElement(Presenter, _extends({}, _presenter, {
    allComponents: allComponents
  })) : React.Children.toArray(children)))));
}

function tips(name) {
  return _ => `${name} 未定义`;
}

function isJsonObject(obj) {
  return obj && typeof obj == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]";
}

function simplifyGateway(gateway) {
  const {
    xname,
    _,
    props
  } = gateway; // named gateway, just return for NamedGateway

  if (xname) {
    return gateway;
  }

  if (Array.isArray(gateway)) {
    return {
      xname: 'Chain',
      props: {
        chain: gateway
      }
    };
  } // get item index


  if (_ !== undefined) {
    return {
      xname: 'GetItem',
      props: {
        itemIndex: _
      }
    };
  } // rebuild gateway


  const bindingGw = {
    xname: 'Binding',
    props: {
      binding: { ...gateway
      }
    }
  };
  return bindingGw;
} // function isLayoutObject(obj) {
//   return (obj && typeof (obj) == "object" && obj.xname) && 
//          (obj.presenter || (obj.children && Object.prototype.toString.call(obj.children).toLowerCase() == "[object array]" && obj.children.length > 0 ))
// }