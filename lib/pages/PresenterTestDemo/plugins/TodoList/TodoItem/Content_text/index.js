function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Title from "../../../../components/presenter/item/ItemTitle/Title";
import Text from "../../../../components/presenter/item/ItemSubtitle/Text";

require("./index.less");

import { AutoComponent, AutoLayout } from "../../../../../../components"; // import layout from '@/plugins/TodoList/designLayout';

export default function ContentText(props) {
  const allComponents = {
    Title,
    Text
  };
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: "start",
        direction: "column",
        justidy: "center"
      },
      children: [{
        presenter: "Title",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              title: "content"
            }
          }
        }
      }, {
        presenter: "Text",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              text: "content"
            }
          }
        }
      }]
    },
    ...props
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "Content_text"
  }, /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents
  })));
}