function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = require('react');

import { useState, useEffect } from 'react';

const {
  NamedContainer,
  NamedLayout,
  NamedGateway,
  NamedCart,
  AutoComponent
} = require("./..");

const DefaultContainer = require("../container/Container");

const NamedPresenterGet = require("../config/NamedPresenterConfig").get();

import loadingPage from "../loading"; // const loadingPage = require('@/components/loading').default;
//2012-04-02 copy autoLayout

const CloneAutoLayout = props => {
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
        };

        if (p.layout.children) {
          return AutoComponent(p);
        }

        return AutoLayout(p);
      } else {
        console.error('获取配置数据异常');
      }
    }
  } else {
    if (props.layout.children) {
      return AutoComponent(props);
    }

    return AutoLayout(props);
  }
};

export { CloneAutoLayout }; // AutoLayout update history
// CR.增加处理选中的 (Cart=> indicator)
// when: 2021-03-24

function AutoLayout({
  children,
  layout,
  allComponents = NamedPresenterGet,
  onItemClick = () => {
    console.log('clone未设置onItemClick点击事件');
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
    presenter
  } = layout || {};

  const _cart = cart && typeof cart === 'string' ? {
    xname: cart
  } : cart;

  const _gateway = gateway && typeof gateway === 'string' ? {
    xname: gateway
  } : gateway; //  when: 2021-03-24


  const _indicator = indicator && typeof indicator === 'string' ? {
    xname: indicator
  } : indicator; // handle container


  const Container = container ? NamedContainer : DefaultContainer;

  const _container = (typeof container === 'string' ? {
    xname: container
  } : container) || {}; // if layout contains childrenData, means this is for auto component


  const Presenter = presenter ? typeof presenter === 'string' ? allComponents[presenter] : isJsonObject(presenter) ? AutoLayout : tips(presenter) : null; //如 presenter 为 object，则封装到 layout

  if (isJsonObject(presenter)) {
    presenter.layout = { ...presenter
    };
  } //如 presenter 为 object，则封装到 layout


  if (isJsonObject(presenter)) {
    presenter.layout = { ...presenter
    };
  }

  function isJsonObject(obj) {
    if (typeof obj == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]") {
      return true;
    }

    return false;
  } // restLayout means layout props
  // child iterator from children contains: [name, span, width, gateway, cart, [,seperator]]
  // <NamedList name='PlainList' {...config} onItemClick={onClick}>
  //     <NamedLayout>
  //         <NamedGateway name='Gateway'>
  //             <NamedCart name='ItemCart' props={{padding: '12px'}}> 
  //                 <UserItem />
  //             </NamedCart>
  //         </NamedGateway>
  //     </NamedLayout>
  // </NamedList>


  return /*#__PURE__*/React.createElement(Container, _extends({}, _container, data, {
    onItemClick: onItemClick
  }), /*#__PURE__*/React.createElement(NamedLayout, {
    xname: xname,
    props: props
  }, gateway ? /*#__PURE__*/React.createElement(NamedGateway, _gateway, indicator ? /*#__PURE__*/React.createElement(NamedCart, _indicator, cart ? /*#__PURE__*/React.createElement(NamedCart, _cart, presenter ? /*#__PURE__*/React.createElement(Presenter, presenter) : React.Children.toArray(children)) : presenter ? /*#__PURE__*/React.createElement(Presenter, presenter) : React.Children.toArray(children)) // end indicator
  : cart ? /*#__PURE__*/React.createElement(NamedCart, _cart, presenter ? /*#__PURE__*/React.createElement(Presenter, presenter) : React.Children.toArray(children)) : presenter ? /*#__PURE__*/React.createElement(Presenter, presenter) : React.Children.toArray(children) //cart?
  ) : indicator ? /*#__PURE__*/React.createElement(NamedCart, _indicator, cart ? /*#__PURE__*/React.createElement(NamedCart, _cart, presenter ? /*#__PURE__*/React.createElement(Presenter, presenter) : React.Children.toArray(children)) : presenter ? /*#__PURE__*/React.createElement(Presenter, presenter) : React.Children.toArray(children)) // end indicator
  : cart ? /*#__PURE__*/React.createElement(NamedCart, _cart, presenter ? /*#__PURE__*/React.createElement(Presenter, presenter) : React.Children.toArray(children)) : presenter ? /*#__PURE__*/React.createElement(Presenter, presenter) : React.Children.toArray(children) //cart?
  ));
}
/**
 * 自动布局复合组件，自定义抽象参数如下说明
 * @param {*} props 
 * @param {布局} layout
 * @param {修饰} cart [shape, decorator, behavior, ...]
 * @param {分隔} seperator
 * @param {数据传递与绑定} gateway
 */


function _AutoLayout(config) {
  const {
    children,
    layout,
    allComponents = {},
    onItemClick = () => {
      console.log('未设置onItemClick点击事件');
    },
    items,
    ...data
  } = config; // handle layout, childrenData for children in {layout

  const {
    name,
    props,
    container,
    cart,
    gateway,
    presenter,
    ...childrenData
  } = layout || {};

  const _Container = container ? NamedContainer : Container;

  const containerProps = container && (typeof container === 'string' ? {
    name: container
  } : container) || {};
  const _cart = cart;
  const _gateway = gateway; /// check childrenData for layout or item data for each child
  //  layout children first

  const hasChildrenData = childrenData && childrenData.children && Array.isArray(childrenData.children) && childrenData.children.length > 0;

  const _children = hasChildrenData ? childrenData.children : items; // console.log('AutoLayout items=',items)
  // if layout contains childrenData, means this is for auto component


  const Presenter = hasChildrenData && presenter && (allComponents[presenter] || tips(presenter)) || React.Children.only(children); // console.log('allComponents=',allComponents,'Presenter=',Presenter )
  // restLayout means layout props
  // child iterator from children contains: [name, span, width, gateway, cart, [,seperator]]

  return /*#__PURE__*/React.createElement(_Container, _extends({}, containerProps, {
    items: items,
    onItemClick: onItemClick
  }), /*#__PURE__*/React.createElement(NamedLayout, {
    name: name,
    props: props
  }, _children.map((child, i) => {
    const {
      name,
      span,
      gateway,
      cart
    } = child;
    const C = allComponents[name] || Presenter || tips(name); //get gateway name, use default gateway if child has no gateway defined

    const __gateway = gateway ? gateway : _gateway;

    const gatewayName = __gateway ? typeof __gateway === 'string' ? __gateway : __gateway.name : 'Gateway';
    const gatewayProps = __gateway && __gateway.props || {}; //get cart name

    const __cart = cart ? cart : _cart;

    const cartName = __cart ? typeof __cart === 'string' ? __cart : __cart.name : '';
    const cartProps = __cart && __cart.props || {}; // each item has its Named Gateway
    // {*} data will send down to NamedCart and then NamedCart to Child Component

    return /*#__PURE__*/React.createElement(NamedGateway, _extends({
      key: i,
      name: gatewayName
    }, gatewayProps, data, {
      span: span
    }), cart ? /*#__PURE__*/React.createElement(NamedCart, _extends({
      key: i,
      name: cartName
    }, cartProps), /*#__PURE__*/React.createElement(C, null)) : /*#__PURE__*/React.createElement(C, null));
  })));
}

function tips(name) {
  return _ => `${name} 未定义`;
}