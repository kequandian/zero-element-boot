import React from 'react';
import Flexbox from '@/components/layout/Flexbox';
import Container from '@/components/container/Container'

export default function Round(props) {
/**
 * 
 * @param {对齐方式: [start, center, end, around, between, start-with-last-end, align-content-center] } align
 * @param {子项对齐方式: start, center, end, [full, half, quad]: for item width } justify
 *
 */
  const { children , justify='end', align = 'start', ...data } = props;

  return ( 
        <Container>
            <Flexbox justify={justify}  align={align}  direction='column' {...data}>
                {children}
            </Flexbox>
        </Container>
  )
}
