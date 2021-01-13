import React from 'react';

const AutoComponent = require("../../components/AutoComponent");

const presenter = require("../default");

export default function SelectItem(props) {
  const {
    item_index,
    curr_index
  } = props;
  const config = {
    layout: {
      name: 'Grid',
      props: {
        col: 1
      },
      children: [{
        name: 'Title',
        span: 1,
        gateway: {
          name: 'Gateway',
          props: {
            field: 'title',
            converter: {
              title: 'TitleText'
            }
          }
        }
      }]
    },
    ...props
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '200px'
    }
  }, /*#__PURE__*/React.createElement(AutoComponent, {
    config: config,
    allComponents: presenter
  }));
}