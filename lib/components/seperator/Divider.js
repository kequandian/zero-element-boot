import React from 'react';
export default function (props) {
  const {
    lineType = 'solid'
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderStyle: `${lineType}`,
      borderWidth: '0 0 1px 0',
      borderColor: '#ececec'
    }
  });
}