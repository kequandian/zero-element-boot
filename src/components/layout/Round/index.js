import React, {useImperativeHandle, forwardRef} from 'react';

import Flexbox from '@/components/layout/Flexbox';
import Container from '@/components/container/Container';
import NextIndicator from '@/components/NextIndicator';

export default forwardRef(function Round(props, ref) {

  const {direction = 'row' } = props

  const { children, __, ...data } = props;
  const _Container = __ ? NextIndicator : Container

  return (
    <_Container>
        <Flexbox align='around' direction={direction}  {...data}>
          {children}
        </Flexbox>
    </_Container>
  )
})