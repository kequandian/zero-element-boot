import React from 'react';

const AutoComponent = require("../../AutoComponent");

export default function UserItem(props) {
  const config = {
    layout: {
      name: 'Grid',
      props: {
        col: 1
      },
      children: [{
        name: 'Avatar',
        span: 2,
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
        span: 2,
        gateway: {
          name: 'Gateway',
          props: {
            field: 'account',
            converter: {
              account: 'TitleText'
            }
          }
        }
      } // {
      //   name: 'Detailed',
      //   span: 4,
      //   gateway: {
      //     name: 'Gateway',
      //     props: {
      //       field: 'subTitle',
      //       converter: {
      //         subTitle: 'text'
      //       }
      //     }
      //   }
      // },
      ]
    },
    ...props
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '300px'
    }
  }, /*#__PURE__*/React.createElement(AutoComponent, {
    config: config
  }));
}