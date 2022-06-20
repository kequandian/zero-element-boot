function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react'; // const AutoComponent = require('@/components/AutoComponent');

import AutoComponent from "../../../components/AutoLayout"; // import JarItem from '@/composition/Standalone/JarItem';

import _layout from "./_layout";
export default function StandaloneBody(props) {
  const allComponents = {// JarItem
  };
  const config = {
    layout: _layout,
    ...props
  }; // console.log('props = ', props)

  return /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents
  }));
}