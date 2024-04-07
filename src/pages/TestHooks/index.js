import React, { useState, useEffect } from 'react';
import { ChakraProvider, HStack, Button } from '@chakra-ui/react';
import usePlacement from '@/components/hooks/usePlacement';

const bottonList = [
    'top',
    'right',
    'bottom',
    'left',
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
]

export default function TestHooks() {

    const BuiltInPosition = () => {

        const [ alignment, setAlignment ] = useState('left')

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
    
        const styles = usePlacement(alignment);

        return (
            <div style={{
                display: 'flex', justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <HStack spacing={4}>
                    {bottonList.map((item, index) => (
                        <Button
                            key={index}
                            onClick={() => {
                                setAlignment(item)
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </HStack>
                
                <div style={paramStyle}>
                    <div style={styles}>
                    <div style={{ width: '20px', height: '20px', background: 'red' }}></div>
                    </div>
                    <div style={{
                        width: '100px', height: '100px', background: 'black',
                    }}>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <ChakraProvider>
            <BuiltInPosition/>
        </ChakraProvider>
    );
}