function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../../components/AutoComponent");

const {
  Title,
  Description
} = require("../../../presenter/demo");

export default function TextContent(props) {
  const allComponents = {
    Title,
    Description
  };
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'column',
        justify: 'full'
      },
      children: [{
        presenter: 'Title',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              title: 'TitleText'
            }
          }
        }
      }, {
        presenter: 'Description',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              describe: 'TextValue'
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