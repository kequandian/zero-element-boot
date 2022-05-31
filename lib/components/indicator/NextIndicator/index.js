const React = require('react');
/**
 * 用于将接收到的所有参数传递给子组件
 * 相当于一个无效果的仅传递参数的子组件
 * 
 * */


export default function NextIndicator({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.toArray(children).map(child => {
    return React.cloneElement(child, { ...rest
    });
  })); // return React.Children.map(children, child => {
  //     return (
  //     <>
  //         return React.cloneElement(child, {
  //             ...rest
  //             })
  //     </>
  //     )
  //   })
}