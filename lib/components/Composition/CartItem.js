import React from 'react';

const AutoComponent = require("../../AutoComponent");

const presenter = require("../presenter");

const requireConfig = require("./layoutConfig/CartItemLayoutConfig");

export default function CartItem(props) {
  const config = {
    layout: {
      name: 'Grid',
      props: {
        col: 1
      },
      children: [{
        name: 'Avatar',
        span: 1,
        gateway: {
          name: 'Gateway',
          props: {
            field: 'icon',
            converter: {
              icon: 'avatarIcon'
            }
          }
        }
      }, {
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
      }, {
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

  if (!config.layout) {
    config.layout = requireConfig.layout;
  } // <div style={{ minWidth: '300px', margin: '5px', padding: '20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>


  return /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '300px',
      padding: '20px'
    }
  }, /*#__PURE__*/React.createElement(AutoComponent, {
    config: config,
    allComponents: presenter
  }));
}