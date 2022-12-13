function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../../components/AutoComponent");

const {
  Text
} = require("../../../components/presenter");

export default function FootContent(props) {
  const allComponents = {
    Text
  };
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'between'
      },
      children: [{
        presenter: 'Text',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              adType: 'AuthorValue'
            }
          }
        }
      }, {
        presenter: 'Text',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              createTime: 'AuthorValue'
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