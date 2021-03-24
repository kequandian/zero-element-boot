function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../../components/AutoComponent");

const {
  ImageAnimation,
  Title
} = require("../../../presenter/demo");

export default function ListItem(props) {
  const {
    onItemClick
  } = props;
  const allComponents = {
    ImageAnimation,
    Title
  };
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'column',
        justify: 'center',
        onItemClick
      },
      children: [{
        presenter: 'ImageAnimation',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              imageUrl: 'imgUrl'
            }
          }
        }
      }, {
        presenter: 'Title',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              name: 'TitleText'
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