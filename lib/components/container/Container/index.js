import React from 'react';

const useLayout = require("../../hooks/useLayout");

export default function Container({
  children,
  ...rest
}) {
  const [layoutRef, {
    getClassName
  }] = useLayout();
  return /*#__PURE__*/React.createElement("div", {
    className: getClassName()
  }, React.Children.toArray(children).map(child => {
    return /*#__PURE__*/React.cloneElement(child, {
      ref: layoutRef,
      ...rest
    });
  }));
} // export default function Container(props) {
//   const {children,...data} = props
//   return React.Children.map(children, child => {
//     return <div>
//       {child}
//     </div>
//   })
// }