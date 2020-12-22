import React from 'react';
export default function (props) {
  const {
    lineType
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderStyle: `${lineType}`,
      borderWidth: '1px',
      borderColor: '#ececec'
    }
  });
}