import React, { useState, useEffect } from 'react';
import { ChakraProvider, HStack, Button, Grid } from '@chakra-ui/react';
import usePlacement from '@/components/hooks/usePlacement';
import PlacementIndicator from '@/components/indicator/PlacementIndicator';
import SelectedIcon from '@/assets/selected-icon.svg';

import MultiActionsIndicator from "@/components/indicator/MultiActionsIndicator";

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


export default function TestIndicator() {


    const BuiltOutPosition = () => {

        const map = {
            'top': {
                'paramStyle': {
                    'flexDirection': 'column',
                },
                'childStyle': {
                    'justifyContent': 'center',
                }
            },
            'right': {
                'paramStyle': {
                    'flexDirection': 'row-reverse',
                },
                'childStyle': {
                    'alignItems': 'center',
                }
            },
            'bottom': {
                'paramStyle': {
                    'flexDirection': 'column-reverse',
                },
                'childStyle': {
                    'justifyContent': 'center',
                },
            },
            'left': {
                'paramStyle': {
                    'flexDirection': 'row',
                },
                'childStyle': {
                    'alignItems': 'center',
                }
            },
            'topLeft': {
                'paramStyle': {
                    'flexDirection': 'column',
                },
                'childStyle': {
                    'justifyContent': 'flex-start',
                }
            },
            'topRight': {
                'paramStyle': {
                    'flexDirection': 'column',
                },
                'childStyle': {
                    'justifyContent': 'flex-end',
                }
            },
            'bottomLeft': {
                'paramStyle': {
                    'flexDirection': 'column-reverse',
                },
                'childStyle': {
                    'justifyContent': 'flex-start',
                },
            },
            'bottomRight': {
                'paramStyle': {
                    'flexDirection': 'column-reverse',
                },
                'childStyle': {
                    'justifyContent': 'flex-end',
                },
            },
        }


        const [alignment, setAlignment] = useState('left')

        const paramStyle = {
            display: 'flex',
            marginTop: '10px',
            ...map[alignment].paramStyle
        };

        const boxA = {
            display: 'flex',
            ...map[alignment].childStyle
        }

        const boxB = {
            width: '100px',
            height: '100px',
            background: 'black'
        }

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

                <div style={{ ...paramStyle }}>
                    <div style={boxA}>
                        <div style={{ width: '20px', height: '20px', background: 'red' }}></div>
                    </div>
                    <div style={boxB}></div>
                </div>

            </div>
        )
    }

    const TestOutsidePosition = () => {

        const map = {
            'top': 'topCenter',
            'right': 'rightCenter',
            'bottom': 'bottomCenter',
            'left': 'leftCenter',
            'topLeft': 'topLeft',
            'topRight': 'topRight',
            'bottomLeft': 'bottomLeft',
            'bottomRight': 'bottomRight',
        }

        const [position, setPosition] = useState('topLeft');

        return (
            <>
                <HStack spacing={4}>
                    {bottonList.map((item, index) => (
                        <Button
                            key={index}
                            onClick={() => {
                                setPosition(item)
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </HStack>
                <div style={{
                    display: 'flex', justifyContent: 'center',
                    alignItems: 'center',
                    height: '500px',
                    marginTop: '20px'
                }}>

                    <div className="container">
                        <div className={`box ${map[position]}`}>子组件</div>
                        <div className="parent">
                            父组件
                            <div className="controls">
                                <button onClick={() => setPosition('topLeft')}>左上</button>
                                <button onClick={() => setPosition('topCenter')}>上中</button>
                                <button onClick={() => setPosition('topRight')}>右上</button>
                                <button onClick={() => setPosition('leftCenter')}>左中</button>
                                <button onClick={() => setPosition('rightCenter')}>右中</button>
                                <button onClick={() => setPosition('bottomLeft')}>左下</button>
                                <button onClick={() => setPosition('bottomCenter')}>下中</button>
                                <button onClick={() => setPosition('bottomRight')}>右下</button>
                            </div>
                        </div>
                    </div>
                </div></>
        )
    }

    const TestPlacementIndicator = () => {

        const [alignment, setAlignment] = useState('left')

        const boxB = {
            width: '100px',
            height: '100px',
            background: 'black'
        }

        const _indicator = () => {
            return (
                <img src={SelectedIcon} />
            )
        }

        return (

            <div style={{
                display: 'flex', justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>

                {/* <HStack spacing={4} marginBottom={'20px'}>
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
                <PlacementIndicator alignment={alignment} offset={6}>
                    <div style={boxB}></div>
                </PlacementIndicator> */}

                <HStack spacing={10}>
                    
                    {bottonList.map((item, index) => (
                        <PlacementIndicator key={index}  Indicator={_indicator} alignment={item} offset={0}>
                            <div style={boxB}></div>
                        </PlacementIndicator>
                    ))}

                </HStack>
                
            </div>
        )
    }


    const TestMultiActionIndicator = () => {

        return (
            <MultiActionsIndicator alignment='topRight'>
                <div style={{ width: '200px', height: '100px', background: 'black' }}></div>
            </MultiActionsIndicator>
        )
    }

    return (
        <ChakraProvider>
            {/* <BuiltOutPosition /> */}
            {/* <TestOutsidePosition/> */}
            {/* <TestPlacementIndicator /> */}
            <TestMultiActionIndicator/>
        </ChakraProvider>
    )
}