function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../../../components/AutoComponent");

import Title from "../Title";
import Subtitle from "../Subtitle";
/**
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @returns
 */

export default function ContentText(props) {
  const allComponents = {
    Title,
    Subtitle
  };
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: "column"
      },
      children: [{
        presenter: "Title",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              title: "title"
            }
          }
        }
      }, {
        presenter: "Subtitle",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              description: "content"
            }
          }
        }
      }]
    },
    ...props
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 5px 0 5px'
    }
  }, /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents
  })));
}