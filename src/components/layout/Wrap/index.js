import React, {useImperativeHandle, forwardRef} from 'react';

import Flexbox from '@/components/layout/Flexbox';
import Container from '@/components/container/Container';
import NextIndicator from '@/components/NextIndicator';

export default forwardRef(function Wrap(props, ref) {
  // __ means used within AutoLayout Container
  const { children, __, ...data } = props;

  const _Container = __ ? NextIndicator : Container

  return (
    <Container>
        <Flexbox align='start' direction='row' {...data}>
          {children}
        </Flexbox>
    </Container>
  )
})