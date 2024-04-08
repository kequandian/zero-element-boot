import React, { forwardRef} from 'react';
import { Center } from '@chakra-ui/react';

/**
 * 
 * 
 */

export default forwardRef(function CenterIndex(props, ref) {

    const { children  } = props;
    return (
        <Center h={'100%'}>
            {children}
        </Center>
    )
})
