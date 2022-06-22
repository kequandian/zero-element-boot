import React from 'react';
import OverlaySelector from "../../OverlaySelector";
import CircularCheckboxIndicatorDefault from "../../indicator/CircularCheckboxIndicator";
import CircularCheckboxIndicatorSelected from "../../indicator/CircularCheckboxIndicator/Selected";
import Hover from "../../indicator/CircularCheckboxIndicator/Hover";
import ShadowIndicator from "../../indicator/ShadowIndicator";
import Cart from "../../cart/Cart";
import ItemPlaceholder from "../../presenter/ItemPlaceholder";
export default function index(props) {
  return /*#__PURE__*/React.createElement(Cart, {
    margin: "10px",
    padding: "0",
    linewidth: "0"
  }, /*#__PURE__*/React.createElement(OverlaySelector, {
    defaultIndicator: CircularCheckboxIndicatorDefault,
    hoverIndicator: Hover,
    selectedIndicator: CircularCheckboxIndicatorSelected,
    selected: true
  }, /*#__PURE__*/React.createElement(Cart, {
    margin: "0px",
    padding: "0",
    linewidth: "1px",
    shadow: "0 2px 8px rgba(0, 0, 0, 0.15)"
  }, /*#__PURE__*/React.createElement(ItemPlaceholder, {
    bg: ""
  }))));
}