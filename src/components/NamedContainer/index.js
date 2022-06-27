const React = require('react');
const DefaultContainerSet = require('../container');

import { get as DefaultListSet } from '@/components/config/NamedListConfig';

export default function NamedContainer({children, xname, props, container={xname, props}, containerSet,  ...data}) {

  const newDefaultContainerSet = {
    ...DefaultContainerSet,
    ...DefaultListSet()
  }

  const _ContainerSet = containerSet ? containerSet: newDefaultContainerSet

  const containerName = (typeof container === 'string') ? container : container.xname
  const NamedContainer = _ContainerSet[containerName] || tips(containerName);

  return (
      <NamedContainer {...container.props} {...data} >
         {children}
      </NamedContainer>
  )
}

function tips(name) {
  return _ => `NamedContainer ${name} 未定义`;
}