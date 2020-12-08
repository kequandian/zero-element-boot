import React, { useState, useEffect } from 'react';
import { Alert, Button, Layout, Row, Col } from 'antd';
const {
  Content
} = Layout;
export default function (props) {
  console.log('新组件 props = ', props);
  const {
    name,
    items,
    title,
    tabs
  } = props;
  const [count, setCount] = useState(0);
  const [btnLoading, setBtnLoading] = useState(false);

  const changeLoading = () => {
    setBtnLoading(true);
  };

  if (btnLoading) {
    setTimeout(() => {
      setBtnLoading(false);
    }, 3000);
  }

  return /*#__PURE__*/React.createElement(Content, {
    style: {
      margin: '16px',
      padding: '20px',
      background: '#FFFFFF',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
    }
  }, /*#__PURE__*/React.createElement(Row, {
    spen: 24
  }, /*#__PURE__*/React.createElement("h2", null, title)), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement("p", null, "You clicked ", count, " times"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "Click me")), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    style: {
      marginRight: '16px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    ghost: true,
    loading: btnLoading,
    onClick: () => changeLoading()
  }, "\u6570\u636E\u5E93\u5BF9\u6BD4"))));
}