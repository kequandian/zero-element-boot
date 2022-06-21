import React from 'react';

import Container from '@/components/container/Container';
import Flexbox from '@/components/layout/Flexbox';

export default function Wrap(props) {

  const { children, ...data } = props;

  return (
    <Container>
      <Flexbox align='start' direction='row' {...data}>
        {children}
      </Flexbox>
    </Container>
  )
}