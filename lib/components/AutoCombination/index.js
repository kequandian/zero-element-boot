function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import * as componentSet from "../../core";
import NamedLayout from "../NamedLayout";
export default function AutoChart(props) {
  const {
    layout,
    children
  } = props;

  if (!Array.isArray(children)) {
    console.warn('未传入 children 或传入的 children 非数组. props: ', props);
    return null;
  }

  let layoutConfig = {};

  if (typeof layout === 'string') {
    layoutConfig = {
      name: layout
    };
  } else {
    layoutConfig = { ...layout
    };
  }

  return /*#__PURE__*/React.createElement(NamedLayout, layoutConfig, children.map(child => {
    const {
      presenter,
      field
    } = child;
    const ComponentName = presenter.replace(/^\S/, s => s.toUpperCase());
    const Component = componentSet[ComponentName] || Tips(ComponentName);
    const data = props[field] || {};

    if (!props[field]) {
      console.warn(`未能读取到数据 field: ${field}`, props);
    }

    return /*#__PURE__*/React.createElement(Component, _extends({
      key: field
    }, data));
  }));
}

function Tips(name) {
  return function () {
    return `组件 ${name} 未定义`;
  };
}