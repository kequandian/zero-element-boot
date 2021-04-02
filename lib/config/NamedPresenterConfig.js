import React from 'react';
const namedPresenterSet = {};

function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    namedPresenterSet[key] = NodeObj[key];
  });
}

function get() {
  return namedPresenterSet;
}

const Render = ({
  n,
  ...restProps
}) => {
  const Component = namedPresenterSet[n] || (() => /*#__PURE__*/React.createElement("div", null, "\u672A\u5B9A\u4E49\u7684 namedCart: ", n));

  return /*#__PURE__*/React.createElement(Component, restProps);
};

export { set, get, Render };