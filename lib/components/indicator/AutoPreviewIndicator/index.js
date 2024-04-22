import React, { useContext } from 'react';
import AlignmentIndicator from "../AlignmentIndicator";
import OutlineCart from "../../cart/OutlineCart";
import IndicatingAction from "../../presenter/button/IndicatingAction";
import ContainerContext from "../../AutoX/ContainerContext";
import { HStack, Box } from '@chakra-ui/react';
import { useHover } from "@uidotdev/usehooks";
import NextIndicator from "../../NextIndicator";
import { LS } from 'zero-element/lib/utils/storage';
export default function AutoPreviewIndicator(props) {
  return /*#__PURE__*/React.createElement(ContainerContext.Provider, {
    value: {
      colors: LS.get('colors')
    }
  }, /*#__PURE__*/React.createElement(AutoPreviewComponent, props));
}
function AutoPreviewComponent(props) {
  const {
    children,
    xseq,
    onAutoPreview,
    ...rest
  } = props;
  const [hoverRef, hovering] = useHover();
  const {
    colors
  } = useContext(ContainerContext);
  const _AlignmentIndicator = hovering ? AlignmentIndicator : NextIndicator;
  const _OutlineCart = hovering ? OutlineCart : NextIndicator;
  const onAPClick = () => {
    if (onAutoPreview) {
      onAutoPreview(xseq);
    }
  };
  const _Indicator = () => {
    return /*#__PURE__*/React.createElement(HStack, {
      spacing: 5
    }, /*#__PURE__*/React.createElement(IndicatingAction, {
      onAutoPreview: onAPClick
    }));
  };
  const outlineProps = {
    color: colors.primary
  };
  return /*#__PURE__*/React.createElement("article", {
    ref: hoverRef
  }, /*#__PURE__*/React.createElement(_AlignmentIndicator, {
    Indicator: _Indicator,
    alignment: 'topright'
  }, /*#__PURE__*/React.createElement(_OutlineCart, outlineProps, React.Children.map(children, child => ( /*#__PURE__*/React.cloneElement(child, {
    ...rest
  }))))));
}