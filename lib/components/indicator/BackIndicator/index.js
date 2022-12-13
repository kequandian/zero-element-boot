import React from 'react';
import { Stack, Button } from '@chakra-ui/react';
/**
 * 
 * 
 */

export default function Index(props) {
  const {
    children,
    onBack,
    indicatorData,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Stack, {
    direction: "row",
    justifyContent: 'flex-end',
    spacing: 4
  }, /*#__PURE__*/React.createElement(Button, {
    colorScheme: "teal",
    variant: "outline",
    onClick: () => onBack()
  }, "\u8FD4\u56DE")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, React.Children.map(children, child => child)));
}