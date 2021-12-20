import React from 'react';
export default function (props) {
  const {
    avatar
  } = props;

  if (avatar) {
    return /*#__PURE__*/React.createElement("img", {
      src: avatar,
      style: {
        width: '40px',
        height: '40px',
        borderRadius: '32px'
      }
    });
  } else {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '40px',
        height: '40px',
        borderRadius: '20px',
        backgroundColor: '#cccccc'
      }
    });
  }
}