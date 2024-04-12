function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
import NextIndicator from "../NextIndicator";
import { get as DefaultIndicatorSet } from "../config/NamedIndicatorConfig";

/**
 * @param {Component} Indicator  Indicator 组件
 * @param {Object} indicator     Indicator 组件参数
 * @param {Component} indicatorSet  Indicator 组件集
 * @param {Object} indicatorData  Indicator 数据
 * @param {{'hover','always','none','overlay'}} trigger 触发 indicator 的事件, 不配置即默认为 hover， trigger='overlay': _isSelected为真时触发，当trigger='hover'，_isSelected=true不触发
 * @param {boolean} _isSelected  组件内部传递参数， 用于selector选中状态下, indicator的决定
 * @returns
 */
export default function NamedIndicator(namedIndicatorprops) {
  const {
    children,
    Indicator,
    xname,
    props,
    trigger = 'hover',
    _isSelected,
    __indicator = {
      xname,
      props,
      trigger
    },
    indicator = __indicator,
    indicatorData,
    indicatorProps = {},
    indicatorSet,
    onItemClick,
    onItemDeleted,
    onItemAdded,
    onItemChanged,
    onItemIndicated,
    ...rest
  } = namedIndicatorprops;

  // console.log('NamedIndicator rest = ', rest)

  const [onHover, setOnHover] = useState(false);

  // const toggleHover = () => {
  //     const result = !onHover;
  //     setOnHover(result)
  // }
  const toggleHoverEntered = () => {
    setOnHover(true);
  };
  const toggleHoverLeaved = () => {
    setOnHover(false);
  };
  const _IndicatorSet = indicatorSet ? indicatorSet : DefaultIndicatorSet();

  //2024-01-24 新增代码
  const __indicator_ = {
    ...__indicator,
    ...indicator
  };
  const indicatorName = Indicator ? '' : typeof __indicator_ == 'string' ? __indicator_ : __indicator_.xname;
  // 1. both Indicator & indicator, means  indicator for Indicator
  // 2. only Indicator, none 
  // 3. only indicator, indicator.props
  const _indicator = Indicator && __indicator_ ? __indicator_ : Indicator ? {} : __indicator_ ? typeof __indicator_ == 'string' ? {} : __indicator_.props ? {
    ...__indicator_.props,
    ...indicatorProps
  } : {} : {};
  const _Indicator = Indicator || _IndicatorSet[indicatorName] || NextIndicator;
  const _trigger = indicator.trigger || trigger;
  const triggered = _trigger == 'hover' && onHover && !_isSelected || _trigger == 'overlay' && onHover && _isSelected || _trigger == 'always';
  const ___Indicator = triggered ? _Indicator : NextIndicator;
  return React.Children.map(children, child => {
    return _trigger == 'hover' ? /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      },
      onMouseEnter: () => toggleHoverEntered(),
      onMouseLeave: () => toggleHoverLeaved()
    }, /*#__PURE__*/React.createElement(___Indicator, _extends({}, _indicator, {
      __indicator: __indicator,
      indicatorData: indicatorData,
      onItemClick: onItemClick,
      onItemDeleted: onItemDeleted,
      onItemAdded: onItemAdded,
      onItemChanged: onItemChanged,
      onItemIndicated: onItemIndicated
    }), child)) : /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(___Indicator, _extends({}, _indicator, {
      indicatorData: indicatorData
    }), child));
  });
}
function tips(name) {
  return _ => `NamedIndicator ${name} 未定义`;
}