import React from 'react';

// const AutoComponent = require('@/components/AutoComponent');
import AutoComponent from '@/components/AutoLayout';

// import JarItem from '@/composition/Standalone/JarItem';

import _layout from './_layout';

export default function StandaloneBody(props) {

  const allComponents = {
    // JarItem
  }

  const config = {
    layout: _layout,
    ...props,
  };

  // console.log('props = ', props)

  return (
    <AutoComponent {...config} allComponents={allComponents}/>
  )

}