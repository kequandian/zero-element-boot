import React, { forwardRef} from 'react';
import { Center } from '@chakra-ui/react';

/**
 * 
 * @param direction 布局方向 (start, end)
 * 
 */

export default forwardRef(function VCenter(props, ref) {

    const { children, direction='start',  } = props;

    const directionMap = {
        start: 'flex-start',
        end: 'flex-end'
    }

    return (
        <Center justifyContent={directionMap[direction]} h={'100%'}>
            {children}
        </Center>
    )
})
