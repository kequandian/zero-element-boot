import React from 'react';

const AutoComponent = require("../../components/AutoComponent");

const {
  ImageAnimation
} = require("../demo");

export default function ImageItem(props) {
  const allComponents = {
    ImageAnimation
  };
  const config = {
    layout: {
      name: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row',
        justify: 'center'
      },
      children: [{
        name: 'ImageAnimation',
        gateway: {
          name: 'Gateway',
          props: {
            field: 'avatar',
            converter: {
              avatar: 'imgUrl'
            }
          }
        }
      }]
    },
    ...props
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AutoComponent, {
    config: config,
    allComponents: allComponents
  }));
}