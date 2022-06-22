import React, { useImperativeHandle, forwardRef } from 'react'; // import Shape from '../Shape'

require("./index.less");

export default /*#__PURE__*/forwardRef(function Circle(props, ref) {
  // console.log(props)

  /**
   * corner     圆角
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框宽度
   * outline    边界线类型
   */
  const {
    children,
    corner = "0px",
    fill = '#1ab3f1',
    stroke = '#d0cdcd',
    lineWidth = '1px',
    outline = 'solid'
  } = props; // useImperativeHandle(ref, () => ({
  //   getClassName: () => {
  //     return `c-Circle`;
  //   }
  // }));

  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      className: "c-circle",
      style: {
        borderRadius: `${corner}`,
        background: `${fill}`,
        borderColor: `${stroke}`,
        borderWidth: `${lineWidth}`,
        borderStyle: `${outline}`
      }
    }, child); // const { corner = '0px', fill = '#1ab3f1', stroke = '#d0cdcd', lineWidth = '1px', outline= 'solid' } = 
    // props.corner || props.fill || props.stroke || props.lineWidth || props.outline ? props : child.props.cart.props;
    // const config = {
    //   corner,
    //   fill, 
    //   stroke, 
    //   lineWidth,
    //   outline
    // }
    // return (
    //   <Shape {...config} >
    //     {child}
    //   </Shape>
    // )
    // return <div style={{ border:`${linewidth} ${outline} ${stroke}`, borderRadius:`${corner}`, backgroundColor:`${fill}` }}>
    //   {child}
    // </div>
  });
});