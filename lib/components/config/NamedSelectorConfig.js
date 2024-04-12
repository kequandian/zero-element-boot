import React from 'react';
const NamedSelectorSet = {};
function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    NamedSelectorSet[key] = NodeObj[key];
  });
}
function get() {
  return NamedSelectorSet;
}
const Render = ({
  n,
  ...restProps
}) => {
  const Component = NamedSelectorSet[n] || (() => /*#__PURE__*/React.createElement("div", null, "\u672A\u5B9A\u4E49\u7684 NamedSelector: ", n));
  return /*#__PURE__*/React.createElement(Component, restProps);
};
export { set, get, Render };