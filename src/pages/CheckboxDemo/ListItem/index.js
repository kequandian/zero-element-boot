import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { ImageAnimation } = require('@/presenter/demo');

const { TextContent, FootContent } = require('./components');

import layout from './_layout';

export default function ListItem(props) {

  const { onListItemClick } = props;

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
      <AutoComponent {...config} allComponents={allComponents} onItemClick={onListItemClick} />
    </>
  )

}