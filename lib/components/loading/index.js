import React from 'react';

require("./index.less");

export default (({
  styles = {}
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "loading",
    style: styles
  });
});