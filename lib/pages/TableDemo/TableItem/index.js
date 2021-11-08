function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../../components/AutoComponent");

const {
  TableCompx
} = require("../../../presenter/demo");

export default function TableItem(props) {
  const allComponents = {
    TableCompx
  };
  console.log('TableItem = ', props);
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        direction: 'row'
      },
      children: [{
        presenter: 'TableCompx',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {}
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