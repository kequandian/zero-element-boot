import React from 'react';
const namedLayoutSet = {};

function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    namedLayoutSet[key] = NodeObj[key];
  });
}

function get() {
  return namedLayoutSet;
}

const Render = ({
  n,
  ...restProps
}) => {
  const Component = namedLayoutSet[n] || (() => /*#__PURE__*/React.createElement("div", null, "\u672A\u5B9A\u4E49\u7684 namedLayout: ", n));

  return /*#__PURE__*/React.createElement(Component, restProps);
};

export { set, get, Render };