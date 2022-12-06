import React from 'react';
export default function (props) {
  const {
    space = 0
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${space}`
    }
  });
}