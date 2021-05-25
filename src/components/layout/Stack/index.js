import React from 'react';

import Container from '@/components/container/Container';
import Flexbox from '@/components/layout/Flexbox';

/**
 * @param {间隔} spacing
 */

export default function Wrap(props) {

  const { children, spacing = 8 } = props;

  return (
    <>
      <Container>
        <Flexbox align='start' direction='row' spacing={spacing}>
          {children}
        </Flexbox>
      </Container>
    </>
  )
}