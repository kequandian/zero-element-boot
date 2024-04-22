const React = require('react');
import { NextIndicator } from '@/components';
// const DefaultContainerSet = require('../container');

import { get as DefaultListSet } from '@/components/config/NamedListConfig';
import { get as DefaultContainerSet } from '@/components/config/NamedContainerConfig';

export default function NamedContainer(namedContainerProps) {

  const {children, xname, props, container={xname, props}, containerSet, dataSource, tag, useReplacing, ...rest} = namedContainerProps;

  // console.log('NamedContainer-namedContainerProps=', namedContainerProps)

  const data = dataSource || rest || {}
  const replacedData = useReplacing ? useReplacing(data) : data

  const newDefaultContainerSet = {
    ...DefaultContainerSet(),
    ...DefaultListSet()
  }

  const _ContainerSet = containerSet ? containerSet: newDefaultContainerSet

  const containerName = (typeof container === 'string') ? container : container.xname
  const NamedContainer = _ContainerSet[containerName] || tips(containerName);

  tagged(tag, rest, containerName)
  
  return (
      <NamedContainer {...container.props} {...replacedData} >
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
