import React, { useState, useEffect } from 'react';
import { ChakraProvider, HStack, Button, 
    Grid, GridItem, 
    Box, background 
} from '@chakra-ui/react';
import usePlacement from '@/components/hooks/usePlacement';
import PlacementIndicator from '@/components/indicator/PlacementIndicator';
import SelectedIcon from '@/assets/selected-icon.svg';
import UnSelectedIcon from '@/assets/unselected-icon.svg';

import MultiActionsIndicator from "@/components/indicator/MultiActionsIndicator";

import AlignmentIndicator from '@/components/indicator/AlignmentIndicator';
import AutoPreviewIndicator from '@/components/indicator/AutoPreviewIndicator';


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
            'topleft': {
                'paramStyle': {
                    'flexDirection': 'column',
                },
                'childStyle': {
                    'justifyContent': 'flex-start',
                }
            },
            'topright': {
                'paramStyle': {
                    'flexDirection': 'column',
                },
                'childStyle': {
                    'justifyContent': 'flex-end',
                }
            },
            'bottomleft': {
                'paramStyle': {
                    'flexDirection': 'column-reverse',
                },
                'childStyle': {
                    'justifyContent': 'flex-start',
                },
            },
            'bottomright': {
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
            'topleft': 'topleft',
            'topright': 'topright',
            'bottomleft': 'bottomleft',
            'bottomright': 'bottomright',
        }

        const [position, setPosition] = useState('topleft');

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
                                <button onClick={() => setPosition('topleft')}>左上</button>
                                <button onClick={() => setPosition('topCenter')}>上中</button>
                                <button onClick={() => setPosition('topright')}>右上</button>
                                <button onClick={() => setPosition('leftCenter')}>左中</button>
                                <button onClick={() => setPosition('rightCenter')}>右中</button>
                                <button onClick={() => setPosition('bottomleft')}>左下</button>
                                <button onClick={() => setPosition('bottomCenter')}>下中</button>
                                <button onClick={() => setPosition('bottomright')}>右下</button>
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

        const _actions = [
            {
                xname: 'Delete',
                props:{
                    action: '/api',
                },
                onItemDeleted:()=>{
                    console.log('onItemDeleted delete')
                }
            },
            {
                xname: 'Download',
                props:{
                    action: '/api',
                },
                onItemDownloaded:()=>{
                    console.log('download')
                }
            }
        ]

        return (
            <MultiActionsIndicator actions={_actions} alignment='topright'>
                <div style={{ width: '200px', height: '100px', background: 'black' }}></div>
            </MultiActionsIndicator>
        )
    }

    const TestAlignmentIndicator = () => {

        const alignmentList = [
            'top', 'right', 'bottom', 'left', 'topleft', 'topright', 'bottomleft', 'bottomright',
        ]
        
        const _indicator = () => {
            return (
                <img src={SelectedIcon} />
            )
        }

        return (
            <Grid w={'500px'} margin={'auto'} templateColumns='repeat(4, 1fr)' gap={6} 
            >
                { 
                    alignmentList.map((item, index) => (
                        <GridItem key={index}>
                            <AlignmentIndicator Indicator={_indicator} alignment={item}>
                                <Box w={'100px'} h={'100px'} border={'1px solid #ccc'} background={'white'}></Box>
                            </AlignmentIndicator>
                        </GridItem>
                    ))
                }
            </Grid>
            
            // <AlignmentIndicator Indicator={_indicator} alignment={'right'}>
            //     <Box w={'100px'} h={'100px'} border={'1px solid #ccc'} background={'white'}></Box>
            // </AlignmentIndicator>
        )

    }

    const TestAutoPrevireIndicator = () => {
        return (
            <AutoPreviewIndicator>
                <Box w={'200px'} h={'100px'} >
                    Box
                </Box>
            </AutoPreviewIndicator>
        )
    }



    return (
        <ChakraProvider>
            {/* <BuiltOutPosition /> */}
            {/* <TestOutsidePosition/> */}
            {/* <TestPlacementIndicator /> */}
            {/* <TestMultiActionIndicator/> */}
            {/* <TestAlignmentIndicator/> */}
            <TestAutoPrevireIndicator/>
        </ChakraProvider>
    )
}