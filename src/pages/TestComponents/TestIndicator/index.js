import React, { useState, useEffect } from 'react';
import { ChakraProvider, HStack, Button, 
    Grid, GridItem, 
    Box, background, 
    border
} from '@chakra-ui/react';
import usePlacement from '@/components/hooks/usePlacement';
import PlacementIndicator from '@/components/indicator/PlacementIndicator';
import SelectedIcon from '@/assets/selected-icon.svg';
import UnSelectedIcon from '@/assets/unselected-icon.svg';

import { NamedIndicator } from '@/components';

import MultiActionsIndicator from "@/components/indicator/MultiActionsIndicator";

import AlignmentIndicator from '@/components/indicator/AlignmentIndicator';
import AutoPreviewIndicator from '@/components/indicator/AutoPreviewIndicator';
import { Avatar, GoogleAvatar, ItemPlaceholder } from '@/components/presenter';
import PageCenter from '@/components/layout/PageCenter';
import { BackIndicator } from '@/components/indicator';
import MaskIndicator from "@/components/cart/MaskIndicator";



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


    const TestOutsidePosition = () => {

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
                display: 'flex', 
                justifyContent: 'center',
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
    
    const TestPlacementIndicator = () => {

        const box = {
            width: '100px',
            height: '100px',
            background: 'transparent',
            border: '1px solid red'
        }

        const _indicator = () => {
            return (
                <img src={SelectedIcon} />
            )
        }

        return (

            <div style={{
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <HStack spacing={10}>
                    
                    {bottonList.map((item, index) => (
                        <PlacementIndicator key={index}  Indicator={_indicator} alignment={item} offset={0}>
                            <div style={box}></div>
                        </PlacementIndicator>
                    ))}

                </HStack>
            </div>
        )
    }


    const TestMultiActionIndicator = () => {

        const _actions = [
            {
                xname: 'SelectAction',
                props:{
                    selection:{
                        xname: 'NewCartsAutolayout',
                        props:{
                        },
                        selectionName: 'Carts',
                    }
                },
            },
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
                <Grid w={'500px'} templateColumns='repeat(4, 1fr)' gap={6} 
                >
                    { 
                        alignmentList.map((item, index) => (
                            <GridItem key={index}>
                                <AlignmentIndicator Indicator={_indicator} alignment={item} >    
                                    <Box w={'200px'} h={'100px'} border={'1px solid #ccc'} background={'white'}></Box>
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

    const TestNamedPreviewIndicator = () => {
        return (
            <NamedIndicator Indicator={AutoPreviewIndicator}>
                <Avatar name={'Alice'} />
            </NamedIndicator>
        )
    }

    const TestBackIndicator = ()    => {
        const onBack = () => {
            console.log('TestBackIndicator.onBack is called')
        }

        return (
            <PageCenter>
                <NamedIndicator Indicator={BackIndicator} onIndicatorClick={onBack}>
                    <ItemPlaceholder/>
                </NamedIndicator>
            </PageCenter>
        )
    }

    
   const TestMaskIndicator = () => {
        const maskProps = {
            color:'#909090', 
            // opacity:'50%',
        }

        return (
            <MaskIndicator {...maskProps} >
                <ItemPlaceholder/>
            </MaskIndicator>
        )
    }


    return (
        <ChakraProvider>
            {/* <TestOutsidePosition/> */}
            {/* <TestAlignmentIndicator/> */}
            {/* <TestPlacementIndicator /> */}
            <TestMultiActionIndicator/>
            {/* <TestBackIndicator/> */}
            {/* <TestMaskIndicator/> */}
            {/* <TestAutoPrevireIndicator/> */}
        </ChakraProvider>
    )
}

