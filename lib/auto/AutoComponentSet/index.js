function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { AutoLayout } from "../../components";
import { AutoLayout as NamedPresenter } from "../../components";
import useTokenRequest from "../../components/hooks/useTokenRequest";
import ItemPlaceholder from "../../components/presenter/ItemPlaceholder";
export default function index(props) {
  const {
    onItemClick,
    endpoint
  } = props;
  const api = endpoint + '/openapi/lc/module/moduleList/1'; // const api = '/openapi/lc/module/moduleList/1'
  // const api = '/api/AutoComponentSet';

  const [data] = useTokenRequest({
    api
  });
  const config = {
    items: data.length > 0 ? data : [],
    layout: {
      xname: 'Flexbox',
      props: {
        direction: 'row'
      },
      cart: 'TestCircularCheckboxIndicator',
      container: 'SelectList'
    }
  };
  return /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, props, {
    onItemClick: onItemClick
  }), /*#__PURE__*/React.createElement(NamedPresenter, null));
}