function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../../components/AutoComponent");

const {
  Author
} = require("../../../presenter/demo");

export default function FootContent(props) {
  const allComponents = {
    Author
  };
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'between'
      },
      children: [{
        presenter: 'Author',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              adType: 'AuthorValue'
            }
          }
        }
      }, {
        presenter: 'Author',
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