import React from 'react';
import configMap from "./map";
import NextIndicator from "../../NextIndicator";
import { get as DefaultIndicatorSet } from "../../config/NamedIndicatorConfig";
export default function PlacementIndicaor(props) {
  const {
    children,
    Indicator,
    indicator,
    alignment = "left",
    offset = 0,
    indicatorData = {},
    onPreviewTriggered,
    ...rest
  } = props;
  const _Indicator = Indicator || (indicator ? DefaultIndicatorSet[indicator.xname] : NextIndicator);
  const _indicatorProps = indicator && JSON.stringify(indicator) !== '{}' ? {
    ...indicator.props,
    ...rest
  } : {};
  const paramStyle = {
    display: 'inline-flex',
    ...configMap[alignment].paramStyle,
    gap: `${offset || 0}px`
  };
  const boxStyle = {
    flex: 1,
    display: 'flex',
    ...configMap[alignment].childStyle
  };
  const indicatorClick = e => {
    e.stopPropagation();
    // 触发预览
    onPreviewTriggered && onPreviewTriggered(rest);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...paramStyle
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: boxStyle,
    onClick: indicatorClick || null
  }, /*#__PURE__*/React.createElement(_Indicator, _indicatorProps)), React.Children.map(children, child => ( /*#__PURE__*/React.cloneElement(child, {
    ...rest
  }))));
}