import React from 'react';
import Box from '@/components/cart/Box';

export default function Index(props) {

    const style = {
        w: 100,
        h: 50,
        bg: '#ccc',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
    }

    return (
        <Box {...style}>
            <div style={{color: '#000'}}>Text</div>
        </Box>
       
    )
}
