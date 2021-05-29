import React from 'react';

import Container from '@/components/container/Container';
import Flexbox from '@/components/layout/Flexbox';

export default function Round(props) {

  const { children } = props;

  return (
    <>
      <Container>
        <Flexbox align='between'>
          {children}
        </Flexbox>
      </Container>
    </>
  )
}