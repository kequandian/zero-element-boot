function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../../components/AutoComponent");

const {
  ImageAnimation
} = require("../../demo");

const {
  TextContent,
  FootContent
} = require("./components");

export default function AdItem(props) {
  const allComponents = {
    ImageAnimation,
    TextContent,
    FootContent
  };
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'column',
        justify: 'center'
      },
      children: [{
        presenter: 'ImageAnimation',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              url: 'imgUrl'
            }
          }
        }
      }, {
        presenter: 'TextContent',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              title: 'title',
              describe: 'describe'
            }
          }
        }
      }, {
        presenter: 'FootContent',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              adType: 'adType',
              createTime: 'createTime'
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