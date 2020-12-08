import React from 'react';
import NamedList from "../NamedList";
import NamedLayout from "../NamedLayout";

const {
  Button
} = require("../presenter");

export default function ButtonList(props) {
  const config = {
    layout: {
      props: {
        justify: 'end',
        //start | end | center | space-around | space-between
        column: 0 //可选

      }
    },
    data: [{
      name: '提交',
      type: 'primary'
    }, {
      name: '返回',
      type: 'default'
    }, {
      name: '重置',
      type: 'default'
    }]
  };
  return /*#__PURE__*/React.createElement(NamedList, {
    name: "SimpleList",
    props: config
  }, /*#__PURE__*/React.createElement(Button, null));
}