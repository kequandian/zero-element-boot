function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../../components/AutoComponent"); // import layout from './layout';


import LayoutList from "../LayoutList";
export default function ListItem(props) {
  const {
    onItemClick
  } = props;
  const allComponents = {
    LayoutList
  };
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row',
        justify: 'center',
        onItemClick
      },
      children: [{
        presenter: 'LayoutList',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              componentName: 'componentName',
              records: 'records'
            }
          }
        }
      }]
    },
    ...props
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents
  })));
}