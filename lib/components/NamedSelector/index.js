function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
import NextIndicator from "../NextIndicator";
import { get as DefaultSelectorSet } from "../config/NamedSelectorConfig";

/**
 * @param {Component} Selector    选中组件
 * @param {String}  xname          selector 名称
 * @param {Object}  props          selector 参数
 * @param {Object}  selector       selector 参数,包括 {xname,props}
 * @param {Object}  __selector     接收由api传递过来的参数
 * @param {Boolean} isSelected    是否选中状态，由父组件传递此参数
 * @param {Boolean} selected      是否响应Click事件切换选中状态, 用于测试
 * @returns 
 */
export default function NamedSelector(namedSelectorProps) {
  const {
    children,
    Selector,
    xname,
    props,
    __selector = {
      xname,
      props
    },
    selector = __selector,
    isSelected = false,
    selected = selector.selected,
    ...rest
  } = namedSelectorProps;

  // console.log('NamedSelector = ', selector, __selector)

  // const [onSelected, setSelected] = useState(false);
  // // 用于测试
  // const toggleSelected = () => {
  //   console.log('NamedSelector click ' )
  //   if (selected) {
  //     const result = !onSelected;
  //     setSelected(result)
  //   }
  // }

  // const _isSelected = selected ? onSelected : isSelected

  const __selector_ = selector && selector.xname ? selector : {
    ...selector,
    ...__selector
  };

  // selector
  const {
    Component: _Selector0,
    props: _selector
  } = getComponent(__selector_);
  const _Selector = Selector || _Selector0 || NextIndicator;
  return React.Children.map(children, child => {
    return !selected ? /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(_Selector, _extends({}, _selector, {
      isSelected: isSelected
    }), child)) : /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(_Selector, _extends({}, _selector, {
      isSelected: true
    }), child));
  });
}
function getComponent(data) {
  const xname = data ? typeof data == 'string' ? data : data.xname : undefined;
  const props = data && typeof data == 'object' ? data.props : undefined;
  const Component = xname ? DefaultSelectorSet()[xname] || tips(xname) : undefined;
  return {
    Component,
    props
  };
}
function tips(name) {
  return _ => `NamedSelector ${name} 未定义`;
}