import React from 'react';

const AutoComponent = require("../../components/AutoComponentL2");

const {
  Avatar,
  Title
} = require("../demo");

export default function Circle(props) {
  const allComponents = {
    Avatar,
    Title
  };
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
      }]
    },
    ...props
  }; // <div style={{ minWidth: '300px', margin: '5px', padding: '20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>

  return /*#__PURE__*/React.createElement(AutoComponent, {
    config: config,
    allComponents: allComponents
  });
}