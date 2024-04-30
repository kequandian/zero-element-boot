function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useImperativeHandle, forwardRef } from 'react';
import Flexbox from "../Flexbox";
// import Container from '@/components/container/Container';
// import NextIndicator from '@/components/NextIndicator';

export default /*#__PURE__*/forwardRef(function Wrap(props, ref) {
  // __ means used within AutoLayout Container
  const {
    children,
    __,
    ...data
  } = props;

  // const _Container = __ ? NextIndicator : Container

  return (
    /*#__PURE__*/
    // <_Container>
    React.createElement(Flexbox, _extends({
      align: "start",
      direction: "row"
    }, data, {
      ref: ref
    }), children)
    // </_Container>
  );
});