import React, { useState, useEffect, useRef } from 'react';
import { ChakraProvider, HStack, Grid, Button } from '@chakra-ui/react';
import usePlacement from '@/components/hooks/usePlacement';

const bottonList = [
    'top',
    'right',
    'bottom',
    'left',
    'topleft',
    'topright',
    'bottomleft',
    'bottomright',
]

export default function TestHooks() {

    const BuiltInPosition = () => {

        const [alignment, setAlignment] = useState('left')
        const targetRef = useRef(null);
        const overlayRef = useRef(null);

        const paramStyle = {
            width: '200px',
            height: '200px',
            background: '#cccccc',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px'
        };

        function hanleStyles (alignment) {
            const styles = usePlacement(alignment);
            return styles
        }

        return (
            <div style={{
                display: 'flex', justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                    {bottonList.map((item, index) => (
                        <div ref={targetRef} key={index} style={paramStyle}>
                            <div ref={overlayRef} style={hanleStyles(item)}>
                                <div style={{ width: '20px', height: '20px', background: 'red' }}>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </Grid>
            </div>
        )
    }

    return (
        <ChakraProvider>
            <BuiltInPosition />
        </ChakraProvider>
    );
}