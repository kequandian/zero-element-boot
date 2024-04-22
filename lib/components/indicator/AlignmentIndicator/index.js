import React, { useEffect, useState } from 'react';
import { Box, position } from '@chakra-ui/react';
import usePlacement from "../../hooks/usePlacement";
export default function AlignmentIndicator(props) {
  const {
    children,
    Indicator,
    indicator,
    alignment = "left",
    offsetx,
    offsety
  } = props;
  const styles = usePlacement(alignment, offsetx, offsety);
  const _Indicator = Indicator || (indicator ? DefaultIndicatorSet[indicator.xname] : NextIndicator);
  const _indicatorProps = indicator && JSON.stringify(indicator) !== '{}' ? {
    ...indicator.props,
    ...rest
  } : {};
  const paramStyle = {
    display: 'inline-block',
    position: 'relative'
  };
  return /*#__PURE__*/React.createElement(Box, {
    style: {
      ...paramStyle
    }
  }, /*#__PURE__*/React.createElement(Box, {
    style: styles
  }, /*#__PURE__*/React.createElement(_Indicator, _indicatorProps)), React.Children.map(children, child => child));
}