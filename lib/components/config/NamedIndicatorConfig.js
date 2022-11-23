import React from 'react';
const NamedIndicatorSet = {};
function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    NamedIndicatorSet[key] = NodeObj[key];
  });
}
function get() {
  return NamedIndicatorSet;
}
const Render = ({
  n,
  ...restProps
}) => {
  const Component = NamedIndicatorSet[n] || (() => /*#__PURE__*/React.createElement("div", null, "\u672A\u5B9A\u4E49\u7684 NamedIndicator: ", n));
  return /*#__PURE__*/React.createElement(Component, restProps);
};
export { set, get, Render };