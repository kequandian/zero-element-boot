import React from 'react';
import { Button } from '@chakra-ui/react';
import LightingCart from "../../../cart/LightingCart";
import PrevirewIcon from "../../../../assets/preview-icon.svg";
export default function IndicatingAction(props) {
  const {
    onAutoPreview,
    ...rest
  } = props;
  const btnClick = () => {
    if (onAutoPreview) {
      onAutoPreview();
    }
  };
  return /*#__PURE__*/React.createElement(LightingCart, null, /*#__PURE__*/React.createElement("img", {
    src: PrevirewIcon,
    onClick: btnClick
  }));
}