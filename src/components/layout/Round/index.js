import React from 'react';

import Container from '@/components/container/Container';
import Flexbox from '@/components/layout/Flexbox';

export default function Round(props) {

  const { children, ...data } = props;

  return (
      <Flexbox align='between' {...data}>
        {children}
      </Flexbox>
  )
}