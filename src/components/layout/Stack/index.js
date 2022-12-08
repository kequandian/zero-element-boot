import React, {useImperativeHandle, forwardRef} from 'react';

import Flexbox from '@/components/layout/Flexbox';
import Container from '@/components/container/Container';
import NextIndicator from '@/components/NextIndicator';

/**
 * @param {间隔} spacing
 */

export default forwardRef(function Stack(props, ref) {

  const { children, __, spacing = 8, ...data } = props;
  const _Container = __ ? NextIndicator : Container

  return (
    <_Container>
      <Flexbox align='start' direction='row' flexFlow='no-wrap' spacing={spacing} {...data} ref={ref}>
        {children}
      </Flexbox>
    </_Container>
  )
})