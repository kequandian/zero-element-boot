function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../components/AutoComponent");

const {
  Avatar,
  Title
} = require("../../presenter/demo");
/**
 * 
 * @param {} props 
 */


export default function CartItem(props) {
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
      }],
      container: 'Cart'
    },
    ...props
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '300px',
      padding: '20px'
    }
  }, /*#__PURE__*/React.createElement(AutoComponent, _extends({}, props, {
    allComponents: allComponents
  })));
}