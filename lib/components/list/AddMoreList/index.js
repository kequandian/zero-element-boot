function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef } from 'react';
import { history } from 'umi';
import { useSize } from 'ahooks';
import useLayout from "../../hooks/useLayout";
import ContainerContext from "../../AutoX/ContainerContext";

require("./index.less");
/**
 * 列表属性{template}包括 [布局, Cart, 分隔线, 数据转换 [,子组件] ]
 * 简单列表仅向子组件传递数据源以及 子组件属性
 * @param {*} props 
 * @param {object} layout  布局
 * @param {array}} items,dataSource
 */


export default function AddMoreList(props) {
  const {
    children,
    layout,
    items,
    dataSource = items,
    navigation,
    onItemClick,
    ...rest
  } = props;
  const [layoutRef, {
    getClassName
  }] = useLayout();
  const containerRef = useRef();
  const size = useSize(containerRef); // ensure only child [NamedLayout, Presenter ...]

  const Child = React.Children.only(children); // 检查数据是否有效

  if (!(dataSource && Array.isArray(dataSource))) {
    return tips(dataSource);
  }

  function clickAction(item) {
    if (navigation && navigation.detail) {
      const nav = navigation.detail;

      if (nav.indexOf('(id)') === -1) {
        history.push({
          pathname: nav,
          query: {
            itemData: item
          }
        });
      } else if (nav.indexOf('(id)') > -1) {
        const formatNav = nav.replace('(id)', item.id);
        history.push({
          pathname: formatNav,
          query: {}
        });
      }
    } else if (onItemClick) {
      onItemClick(item);
    }
  }

  function clickAddAction() {
    history.push({
      pathname: navigation.add,
      query: {}
    });
  }
  /**
   * 2021-11-15
   * 互换了 "...item" 和 "...rest"  顺序
   */


  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      position: 'relative'
    },
    className: getClassName(),
    ref: containerRef
  }, /*#__PURE__*/React.createElement(ContainerContext.Provider, {
    value: size
  }, dataSource.map((item, i) => {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => clickAction(item)
    }, /*#__PURE__*/React.isValidElement(Child) ? /*#__PURE__*/React.cloneElement(Child, { ...rest,
      ...item,
      layout: layout,
      // key: i,
      ref: layoutRef,
      // onItemClick:onItemClick,
      isLastItem: dataSource.length == i + 1 ? true : false,
      index: i
    }) : /*#__PURE__*/React.createElement(Child, _extends({
      key: i
    }, rest, item, {
      layout: layout,
      ref: layoutRef,
      onItemClick: onItemClick,
      index: i
    })));
  })), navigation && navigation.add ? /*#__PURE__*/React.createElement("div", {
    className: "footerBtn",
    onClick: () => clickAddAction()
  }, /*#__PURE__*/React.createElement("div", {
    className: "addBtn"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null));
}

function tips(dataSource) {
  return /*#__PURE__*/React.createElement("div", null, "PlainList \u6570\u636E\u65E0\u6548");
}