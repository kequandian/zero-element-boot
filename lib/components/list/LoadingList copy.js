function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, useEffect, useState } from 'react';
import { useSize } from 'ahooks';
import useLayout from "../hooks/useLayout";
import queryMethod from "../utils/promiseAjax";
import ContainerContext from "../AutoX/ContainerContext";
/**
 * 列表属性{template}包括 [布局, Cart, 分隔线, 数据转换 [,子组件] ]
 * 简单列表仅向子组件传递数据源以及 子组件属性
 * @param {*} props 
 * @param {object} layout  布局
 * @param {array}} items,dataSource
 */

export default function LoadingList(props) {
  const [data, setData] = useState([]);
  const {
    children,
    queryData,
    layout,
    API,
    onItemClick = () => {
      console.log('未设置onItemClick点击事件');
    },
    ...rest
  } = props;
  const [layoutRef, {
    getClassName
  }] = useLayout();
  const containerRef = useRef();
  const size = useSize(containerRef); // ensure only child [NamedLayout, Presenter ...]

  const Child = React.Children.only(children);
  useEffect(_ => {
    queryMethod(API, queryData).then(responseData => {
      if (responseData && responseData.code === 200) {
        setData(responseData.data);
      }
    });
  }, []);
  console.log(data);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      position: 'relative'
    },
    className: getClassName(),
    ref: containerRef
  }, /*#__PURE__*/React.createElement(ContainerContext.Provider, {
    value: size
  }, data.map((item, i) => /*#__PURE__*/React.isValidElement(Child) ? /*#__PURE__*/React.cloneElement(Child, { ...item,
    ...rest,
    layout: layout,
    key: i,
    ref: layoutRef,
    onItemClick: onItemClick,
    isLastItem: data.length == i + 1 ? true : false
  }) : /*#__PURE__*/React.createElement(Child, _extends({
    key: i
  }, item, rest, {
    layout: layout,
    ref: layoutRef,
    onItemClick: onItemClick
  })))));
}

function tips(dataSource) {
  return /*#__PURE__*/React.createElement("div", null, "PlainList \u6570\u636E\u65E0\u6548");
}