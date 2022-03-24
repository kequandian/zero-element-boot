function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../../components/AutoComponent");

const {
  Avatar,
  Title
} = require("../../../presenter/demo");

export default function SelectRightIconItem(props) {
  const allComponents = {
    Avatar,
    Title
  };
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'column'
      },
      children: [{
        presenter: 'Title',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              name: 'TitleText'
            }
          }
        }
      }]
    },
    ...props
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100px',
      marginRight: '10px'
    }
  }, /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents
  })));
}