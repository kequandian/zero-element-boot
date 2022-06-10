function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { ChakraProvider, Center, Flex } from "@chakra-ui/react";
import { AutoLayout } from 'zero-element-boot';
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import Presenter from "./Presenter";
export default function Index(props) {
  const {
    onItemClick,
    endpoint,
    ...rest
  } = props;
  const api = endpoint + '/lc/components/cart';
  const [data] = useTokenRequest({
    api
  });
  /**
   * 页面配置
   */

  const config = {
    items: data.length > 0 ? data : [],
    layout: {
      xname: 'Gridbox',
      props: {
        columns: 2
      },
      container: 'SelectList'
    }
  };
  return /*#__PURE__*/React.createElement(Center, {
    bg: "#ffffff"
  }, /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    data: data,
    onItemClick: onItemClick
  }), /*#__PURE__*/React.createElement(Presenter, null)));
}