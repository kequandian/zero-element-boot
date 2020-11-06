function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useImperativeHandle, forwardRef } from 'react';
import * as LayoutSet from "./export";
import useLayout from "../../utils/useLayout";
import "./index.less";
export default /*#__PURE__*/forwardRef(function NamedLayout({
  name,
  props,
  layout,
  children,
  ...rest
}, ref) {
  const [layoutRef, {
    getClassName
  }] = useLayout();
  useImperativeHandle(ref, () => ({
    getClassName: getClassName
  }));
  let layoutConfig = { ...layout
  };

  if (typeof props === 'string') {
    layoutConfig = { ...layout,
      name: props
    };
  } else {
    layoutConfig = {
      name,
      ...props,
      ...layout
    };
  }

  const Layout = LayoutSet[layoutConfig.name] || tips(layoutConfig.name);
  return /*#__PURE__*/React.createElement(Layout, _extends({}, layoutConfig, {
    ref: layoutRef
  }), React.Children.toArray(children).map(child => {
    return /*#__PURE__*/React.cloneElement(child, { ...rest
    });
  }));
});

function tips(name) {
  return _ => `Layout ${name} 未定义`;
}