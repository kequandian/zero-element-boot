import React, { useImperativeHandle, forwardRef, useState } from 'react';

require('./index.less');

export default forwardRef(function OutlineCart(props, ref) {

  /**
   * color 颜色，背景
   * 
   * fill  dash tag 为状态值，
   * fill 控制背景色 字体为黑色或白色，如fill为false 字体等于color的值
   * dash 控制线框为虚线
   * tag 控制背景为透明 默认透明背景色
   * 
   * shape （box， round,circle）
   * corner 参数只有 shape = box 才生效
   * 
   */
// fill = true, dash = true， tag = true
  const {
    children, color= 'transparent', tag, dash,  shape, fill, linewidth = '1px' } = props;

  const [onHover, setOnHover] = useState(false);

  // useImperativeHandle(ref, () => ({
  //   getClassName: () => {
  //     return `c-OutlineCart`;
  //   }
  // }));

  const toggleHover = () => {
    const result = !onHover;
    setOnHover(result)
  }

  let bgColor = `${fill}ff`;
  let showShadow = '';
  let newLineColor = `${color}`;
  if (onHover) {
    // bgColor = `${fill}80`;
    // showShadow = shadow;
    newLineColor = color
  } else {
    // bgColor = `${fill}ff`;
    // showShadow = '';
    newLineColor = 'transparent'
  }

  return React.Children.map(children, child => {
    return <div className='c-OutlineCart-item' style={{
      borderRadius: `${corner}`,
      background: `${bgColor}`,
      borderStyle: `${stroke}`,
      boxShadow: `${showShadow}`,
      borderWidth: `${linewidth}`,
      borderColor: `${newLineColor}`
    }}
      onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}
    >
      {child}
    </div>
  })
})