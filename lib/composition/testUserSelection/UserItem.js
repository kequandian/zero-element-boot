function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../components/AutoComponent");

const presenter = require("./presenter");

export default function UserItem(props) {
  const allComponents = { ...presenter
  };
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row' // itemStyle:{
        //   itemAlign:'v-center'
        // }

      },
      children: [{
        presenter: 'Avatar',
        // span: 2,
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              avatar: 'avatar'
            } // field: 'avatar',
            // converter: {
            //   avatar: 'avatarIcon'
            // }

          }
        }
      }, {
        presenter: 'ContentText',
        // span: 2,
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              account: "title",
              subtitle: "description"
            } // field: 'account',
            // converter: {
            //   account: 'TitleText'
            // }

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