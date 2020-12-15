import React from 'react';

const AutoComponent = require("../../AutoComponent");

const presenter = require("../presenter");

export default function UserItem(props) {
  const config = {
    layout: {
      name: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row',
        itemStyle: {
          itemAlign: 'v-center'
        }
      },
      children: [{
        name: 'Avatar',
        gateway: {
          name: 'Gateway',
          props: {
            field: 'avatar',
            converter: {
              avatar: 'avatarIcon'
            }
          }
        }
      }, {
        name: 'Title',
        gateway: {
          name: 'Gateway',
          props: {
            field: 'account',
            converter: {
              account: 'TitleText'
            }
          }
        }
      }]
    },
    ...props
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AutoComponent, {
    config: config,
    allComponents: presenter
  }));
}