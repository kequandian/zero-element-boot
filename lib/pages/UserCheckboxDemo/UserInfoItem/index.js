function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../../components/AutoComponent");

const {
  UserAvatar,
  UserName
} = require("../../../presenter/demo");

export default function SelectUpperRightItem(props) {
  const allComponents = {
    UserAvatar,
    UserName
  };
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row',
        justify: 'center',
        spacing: 10
      },
      children: [{
        presenter: 'UserAvatar',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              avatar: 'url'
            }
          }
        }
      }, {
        presenter: 'UserName',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              name: 'body'
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