import React from 'react';

import Container from '@/components/container/Container';
import Flexbox from '@/components/layout/Flexbox';

export default function Wrap(props) {

  const { children } = props;

  return (
    <>
      <Container>
        <Flexbox align='start' direction='row'>
          {children}
        </Flexbox>
      </Container>
    </>
  )
}