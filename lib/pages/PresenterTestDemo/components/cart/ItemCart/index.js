import React from 'react';
export default function ItemCart(props) {
  const [padding = "10px", children, margin = "6px"] = props;
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: {
          padding
        },
        margin: {
          margin
        }
      }
    }, child);
  });
}