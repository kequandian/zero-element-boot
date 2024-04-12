import React from 'react';
const namedListSet = {};
function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    namedListSet[key] = NodeObj[key];
  });
}
function get() {
  return namedListSet;
}
const Render = ({
  n,
  ...restProps
}) => {
  const Component = namedListSet[n] || (() => /*#__PURE__*/React.createElement("div", null, "\u672A\u5B9A\u4E49\u7684 namedList: ", n));
  return /*#__PURE__*/React.createElement(Component, restProps);
};
export { set, get, Render };