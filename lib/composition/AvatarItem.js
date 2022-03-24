import React from 'react';

const AutoComponent = require("../components/AutoComponent"); // import from global
// const { Avatar, Title, Subtitle } = require('@/presenter/demo');

/**
 * 
 * @param {String} avatar 头像
 * @param {String} title  头衔, 账户
 */


export default function AvatarItem(props) {
  // const allComponents = {
  //   Avatar,
  //   Title,
  //   Subtitle
  // }
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row',
        justify: 'center'
      },
      children: [{
        presenter: 'Avatar',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              avatar: 'url'
            }
          }
        }
      }, {
        presenter: 'Title',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              title: 'body'
            }
          }
        }
      }]
    },
    ...props
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AutoComponent, config));
}