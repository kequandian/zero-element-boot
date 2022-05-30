const React = require('react'); //将接收到的所有参数传递给子组件


export default function NextIndicator({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", null, React.Children.toArray(children).map(child => {
    return React.cloneElement(child, { ...rest
    });
  }));
}