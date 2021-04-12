import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { ImageAnimation } = require('@/presenter/demo');

const { TextContent, FootContent } = require('./components');

import layout from './_layout';

export default function AdItem(props) {

  const { onAdItemClick } = props;

  const allComponents = {
    ImageAnimation,
    TextContent,
    FootContent,
  }

  const config = {
    layout,
    ...props,
  };

  /**
   * 激活点击事件参数
   * @param {布局} setClick { 值: true or false }
   */

  return (
    <>
      <AutoComponent {...config} allComponents={allComponents} onItemClick={onAdItemClick} setClick={true}/>
    </>
  )

}