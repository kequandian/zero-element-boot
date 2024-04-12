import React from 'react';
const NamedContainerConfig = {};
function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    NamedContainerConfig[key] = NodeObj[key];
  });
}
function get() {
  return NamedContainerConfig;
}
const Render = ({
  n,
  ...restProps
}) => {
  const Component = NamedContainerConfig[n] || (() => /*#__PURE__*/React.createElement("div", null, "\u672A\u5B9A\u4E49\u7684 namedContainer: ", n));
  return /*#__PURE__*/React.createElement(Component, restProps);
};
export { set, get, Render };