const React = require('react');

import { get as DefaultListSet } from '@/components/config/NamedListConfig';
import { get as DefaultContainerSet } from '@/components/config/NamedContainerConfig';

// replace BootChakraContext require with useTag import
import { useTag, tagged } from '../provider/useTag';

export default function NamedContainer(namedContainerProps) {

  const {children,tag, xname, props, container={xname, props}, dataSource, useReplacing, ...rest} = namedContainerProps;

  // use useTag hook to control logging
  const { usedTag } = useTag()

  const data = dataSource || rest || {}
  const replacedData = useReplacing ? useReplacing(data) : data

  const _ContainerSet = {
    ...DefaultContainerSet(),
    ...DefaultListSet()
  }

  const containerName = (typeof container === 'string') ? container : container.xname
  const NamedContainer = _ContainerSet[containerName] || tips(containerName);

  tagged(usedTag, 'NamedContainer', tag, rest)
  
  return (
      <NamedContainer {...container.props} {...replacedData} >
         {children}
      </NamedContainer>
  )
}

function tips(name) {
  return _ => `NamedContainer ${name} 未定义`;
}
