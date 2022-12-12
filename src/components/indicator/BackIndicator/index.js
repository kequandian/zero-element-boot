import React from 'react';
import { Stack, Button } from '@chakra-ui/react'

/**
 * 
 * 
 */

export default function Index(props) {

    const { children, onBack, indicatorData, ...rest } = props;
    
    return (
        <div>
            <Stack direction='row' justifyContent={'flex-end'} spacing={4}>
                <Button colorScheme='teal' variant='outline' onClick={() => onBack()}>
                    返回
                </Button>
            </Stack>
            <div style={{width:'100%'}}>
                {
                    React.Children.map(children, child => (
                        child
                    ))
                }
            </div>
        </div>
        
    )
}
