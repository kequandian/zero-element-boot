const React = require('react');
const DefaultContainerSet = require('../container');

export default function NamedContainer({children, name, props, container={name, props}, containerSet,  ...data}) {

  const _ContainerSet = containerSet ? containerSet: DefaultContainerSet

  const containerName = (typeof container === 'string') ? container : container.name
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