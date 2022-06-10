import React from 'react';
import Cart from 'zero-element-boot/lib/components/cart/Cart'; // import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'

import ItemPlaceholder from "../../pages/ItemPlaceholder";
import NamedCart from 'zero-element-boot/lib/components/NamedCart';
import { Flex, Text, Center } from '@chakra-ui/react';
import TitledContainer from 'zero-element-boot/lib/components/container/TitledContainer';
import OverlaySelector from 'zero-element-boot/lib/components/OverlaySelector'; // import Default  from '@/components/indicator/CircularCheckboxIndicator'
// import Selected  from '@/components/indicator/CircularCheckboxIndicator/Selected'
// import ShadowIndicator from '@/components/indicator/ShadowIndicator';

import Default from "../../components/indicator/CircularCheckboxIndicator";
import Selected from "../../components/indicator/CircularCheckboxIndicator/Selected";
import ShadowIndicator from "../../components/indicator/ShadowIndicator";
/**
 * 
 * @returns 
 */

export default function index(props) {
  const {
    __cart,
    isSelected
  } = props;
  console.log(isSelected, '==');
  const {
    cname
  } = __cart;
  return (
    /*#__PURE__*/
    // <Flex>
    React.createElement(Cart, {
      margin: "20px",
      padding: "0",
      linewidth: "0"
    }, /*#__PURE__*/React.createElement(OverlaySelector, {
      defaultIndicator: Default,
      hoverIndicator: ShadowIndicator,
      hoverIndicatorProps: {
        borderRadius: '4px'
      },
      selectedIndicator: Selected,
      isSelected: isSelected
    }, /*#__PURE__*/React.createElement(Cart, {
      margin: "20px",
      linewidth: "0"
    }, /*#__PURE__*/React.createElement(TitledContainer, {
      title: cname,
      style: {
        textIndent: '1em',
        margin: '0'
      }
    }, /*#__PURE__*/React.createElement(TitledContainer, {
      title: __cart.xname,
      style: {
        textIndent: '1em',
        margin: '0',
        fontWeight: 'bold'
      }
    }, /*#__PURE__*/React.createElement(NamedCart, {
      cart: __cart
    }, /*#__PURE__*/React.createElement(ItemPlaceholder, {
      bg: "transparent"
    }))))))) //  </Flex>

  );
}