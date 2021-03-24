import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { ImageAnimation } = require('@/presenter/demo');

const { TextContent, FootContent } = require('./components');

import layout from './layout';

export default function AdItem(props) {

  const allComponents = {
    ImageAnimation,
    TextContent,
    FootContent,
  }

  const config = {
    layout,
    ...props,
  };

  return (
    <>
      <AutoComponent {...config} allComponents={allComponents}/>
    </>
  )

}