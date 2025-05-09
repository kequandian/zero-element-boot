import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

import useSizeClient from '../../hooks/useSizeClient';

require('./index.less');

// Box 官网地址：https://chakra-ui.com/docs/layout/box
export default function Outline(props) {

  /**
   * color 线框颜色和背景
   * fill, dash, tag 为状态值(true, false)，
   * fill 控制背景色
   * dash 控制线框为虚线
   * tag 控制背景为透明 默认透明背景色
   * 
   * shape （ box, round, circle ）
   * corner 参数只有 shape = box 才生效
   * 
   */
  const { children, color= '#FF037D', tag , dash,  shape='box', fill, corner='6px', margin='2px'} = props;

  const parentRef = useRef();

  // const [parentWidth, setParentWidth] = useState(0);
  // const [parentHeight, setParentHeight] = useState(0);
  const clientSize=  useSizeClient({ ref: parentRef });

  const _corner = shape === 'box' ? corner : shape === 'round' ? `${clientSize.height / 2}px` : shape === 'circle' ? '50%' : '';
  const _minwidth = shape === 'round' ? clientSize.height*2 : clientSize.height;

  // useEffect(() => {
  //   //获取父元素宽高
  //   const resizeHandler = () => {
  //     if (parentRef.current) {
  //       // const width = parentRef.current.getBoundingClientRect().width;
  //       const height = parentRef.current.getBoundingClientRect().height;
  //       // setParentWidth(width);
  //       setParentHeight(height);
  //     }
  //   };

  //   const handleFirstRender = () => {
  //     setTimeout(resizeHandler, 0);
  //   };

  //   window.addEventListener('resize', resizeHandler);
  //   handleFirstRender(); // Delay the first render
  //   return () => {
  //     window.removeEventListener('resize', resizeHandler);
  //   };
  // }, []);

  //根据颜色值判断字体用黑色还是白色
  const handleDynamicColor = (colorValue) => {
    const _color = fill || tag ? colorValue : '#ffffff'
    const getBrightness = (color) => {
      const match = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
      if (!match) return null;
      const [, r, g, b] = match;
      return (0.2126 * parseInt(r, 16) + 0.7152 * parseInt(g, 16) + 0.0722 * parseInt(b, 16)) / 255;
    };
    const textColor = getBrightness(_color) < 0.5 ? '#ffffff' : '#000000';
    return textColor;
  };

  // 将传入的颜色值转换为半透明颜色
  const handleTransparentColor = (color) => {
    if (color.startsWith('#')) {
      const hex = color.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, 0.5)`;
    }
    return color;
  };

  const styles = {
    border: `1px ${dash ? 'dashed' : 'solid'} ${color}`,
    borderRadius: _corner,
    background: fill ? color :  tag ? handleTransparentColor(color) : '#ffffff',
    color: handleDynamicColor(color),
    borderStyle: dash ? 'dashed' : 'solid',
    margin: margin,
  }

  return (
    <Box className='c-outline-item' style={styles} ref={parentRef} w={_minwidth}>
      {React.Children.map(children, child => (
        child
      ))}
    </Box>
  )
  
}