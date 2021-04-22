function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../components/AutoComponent");

const {
  Avatar,
  Title
} = require("../presenter/demo");
/**
 * 
 * @param {} avatar 头像
 * @param {} title  头衔, 账户
 * @param {} subtitle 副标题，显示名称
 */


export default function UserItem(props) {
  const allComponents = {
    Avatar,
    Title
  };
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
              avatar: 'avatarIcon'
            }
          }
        }
      }, {
        presenter: 'Title',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              title: 'TitleText'
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