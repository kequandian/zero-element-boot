const React = require('react');
// const DefaultContainerSet = require('../container');

import { get as DefaultListSet } from '@/components/config/NamedListConfig';
import { get as DefaultContainerSet } from '@/components/config/NamedContainerConfig';

export default function NamedContainer({children, xname, props, container={xname, props}, containerSet, dataSource, ...rest}) {
  // console.log('NamedContainer.dataSource=', dataSource)
  // console.log('NamedContainer.rest=', rest)

  console.log('NamedContainer rest = ', rest)

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