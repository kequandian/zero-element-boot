function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../../components/AutoComponent");

const {
  Title,
  Subtitle,
  StatisticsList
} = require("../../../presenter/demo");

export default function TextContent(props) {
  const allComponents = {
    Title,
    Subtitle,
    StatisticsList
  };
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        direction: 'column',
        justify: 'center row'
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
        presenter: 'Subtitle',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              describe: 'contentTxt'
            }
          }
        }
      }, {
        presenter: 'StatisticsList',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              items: 'list'
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