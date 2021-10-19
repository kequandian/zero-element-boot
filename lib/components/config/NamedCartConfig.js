import React from 'react';
const namedCartSet = {};

function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    namedCartSet[key] = NodeObj[key];
  });
}

function get() {
  return namedCartSet;
}

const Render = ({
  n,
  ...restProps
}) => {
  const Component = namedCartSet[n] || (() => /*#__PURE__*/React.createElement("div", null, "\u672A\u5B9A\u4E49\u7684 namedCart: ", n));

  return /*#__PURE__*/React.createElement(Component, restProps);
};

export { set, get, Render };