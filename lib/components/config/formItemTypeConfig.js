import React from 'react';
const formItemTypeSet = {};
function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    formItemTypeSet[key] = NodeObj[key];
  });
}
function get() {
  return formItemTypeSet;
}
const Render = ({
  n,
  ...restProps
}) => {
  const Component = formItemTypeSet[n] || (() => /*#__PURE__*/React.createElement("div", null, "\u672A\u5B9A\u4E49\u7684 formItemType: ", n));
  return /*#__PURE__*/React.createElement(Component, restProps);
};
export { set, get, Render };