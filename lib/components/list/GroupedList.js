function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef } from 'react';
import { useSize } from 'ahooks';
import useLayout from "../hooks/useLayout";
import ContainerContext from "../AutoX/ContainerContext";
/**
 * 列表属性{template}包括 [布局, Cart, 分隔线, 数据转换 [,子组件] ]
 * 简单列表仅向子组件传递数据源以及 子组件属性
 * @param {*} props 
 * @param {object} layout  布局
 * @param {array}} items,dataSource
 */

export default function GroupedList(props) {
  const {
    children,
    layout,
    dataSource = {},
    navigation,
    onItemClick,
    groupKeyStyle,
    ...rest
  } = props;
  const [layoutRef, {
    getClassName
  }] = useLayout();
  const containerRef = useRef();
  const size = useSize(containerRef); // ensure only child [NamedLayout, Presenter ...]

  const Child = React.Children.only(children);
  return /*#__PURE__*/React.createElement(ContainerContext.Provider, {
    value: size
  }, Object.keys(dataSource).map((groupKey, g) => {
    const dataSourceItem = dataSource[groupKey];
    return /*#__PURE__*/React.createElement("div", {
      key: g
    }, /*#__PURE__*/React.createElement("div", {
      style: style // {color: '#00ffaa', marginTop: '40px'}

    }, groupKey), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'auto',
        position: 'relative'
      },
      className: getClassName(),
      ref: containerRef
    }, dataSourceItem.map((item, i) => {
      return /*#__PURE__*/React.createElement("div", {
        key: i
      }, /*#__PURE__*/React.isValidElement(Child) ? /*#__PURE__*/React.cloneElement(Child, { ...rest,
        ...item,
        layout: layout,
        // key: i,
        ref: layoutRef,
        onItemClick: onItemClick,
        isLastItem: dataSource.length == i + 1 ? true : false,
        index: i
      }) : /*#__PURE__*/React.createElement(Child, _extends({
        key: i
      }, item, rest, {
        layout: layout,
        ref: layoutRef,
        index: i
      })));
    })));
  }));
}

function tips(dataSource) {
  return /*#__PURE__*/React.createElement("div", null, "GroupedList \u6570\u636E\u65E0\u6548");
}