import React, {useImperativeHandle, forwardRef} from 'react';
import Flexbox from '@/components/layout/Flexbox';
import Container from '@/components/container/Container';
import NextIndicator from '@/components/NextIndicator';

/**
 * 
 * @param spacing 间隔
 * 
 */

export default forwardRef(function VStack(props, ref) {
    const { children,  __, direction,  spacing, ...data } = props;
    const _Container = __ ? NextIndicator : Container

    return (
         <_Container>
            <Flexbox align={direction} direction='column' flexFlow=" " spacing={spacing} {...data} ref={ref}>
                {children}
            </Flexbox>
         </_Container>
    )
})
