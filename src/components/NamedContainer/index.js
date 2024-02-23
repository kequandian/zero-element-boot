const React = require('react');
import { NextIndicator } from '@/components';
// const DefaultContainerSet = require('../container');

import { get as DefaultListSet } from '@/components/config/NamedListConfig';
import { get as DefaultContainerSet } from '@/components/config/NamedContainerConfig';

export default function NamedContainer({children, xname, props, container={xname, props}, containerSet, dataSource, tag, ...rest}) {

  tagged(tag, rest, containerName)

  const newDefaultContainerSet = {
    ...DefaultContainerSet(),
    ...DefaultListSet()
  }

  const _ContainerSet = containerSet ? containerSet: newDefaultContainerSet

  const containerName = (typeof container === 'string') ? container : container.xname
  const NamedContainer = _ContainerSet[containerName] || tips(containerName);
  
  return (
      <NamedContainer {...container.props} {...rest} >
         {children}
      </NamedContainer>
  )
}

function tips(name) {
  return _ => `NamedContainer ${name} 未定义`;
}

function tagged(tag, data, containerName) {
  if(tag) { 
    console.log(`TAG-NamedContainer-${tag}-containerName-${containerName}`) 
  }
  
  if(data) {
    console.log('userdata=', data.userdata ? data.userdata : data) 
  }
}
