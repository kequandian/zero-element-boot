import React from 'react';

import Container from '@/components/container/Container';
import Flexbox from '@/components/layout/Flexbox';

/**
 * @param {间隔} spacing
 */

export default function (props) {

  const { children, spacing = 8, ...data } = props;

  return (
      <Flexbox align='start' direction='row' flexFlow='no-wrap' spacing={spacing} {...data}>
        {children}
      </Flexbox>
  )
}