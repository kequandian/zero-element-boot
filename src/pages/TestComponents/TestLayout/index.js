import React from 'react';
import { Text } from '@chakra-ui/react';
import { Flexbox, Gridbox, GridViewport, AutoGrid, 
         Center, HCenter, VCenter, HStack, VStack, Round, Between } from '@/components/layout';
import { GoogleAvatar, DefaultPlaceholder } from '@/components/presenter'

export default function TextLayout() {


    const TestCenter = () => {
        return (
            <VStack alignItems={'flex-start'}>
                <Text fontWeight={'bold'} fontSize={'20px'} margin={'10px'}>Center</Text>
                <HStack spacing={10} alignItems={'flex-start'}>
                    <div style={{ width: '200px', height: '200px', backgroundColor: '#ECEFF7' }}>
                        <Center>
                            <GoogleAvatar name={'5'} />
                        </Center>
                    </div>
                </HStack>
            </VStack>
        )
    }


    const TestHCenter = () => {
        return (
            <VStack alignItems={'flex-start'}>
                <Text fontWeight={'bold'} fontSize={'20px'} margin={'10px'}>HCenter</Text>
                <HStack spacing={10}>
                    <div style={{ width: '200px', height: '200px', backgroundColor: '#ECEFF7' }}>
                        <HCenter direction={"start"}>
                            <GoogleAvatar name={'5'} />
                        </HCenter>
                    </div>
                    <div style={{ width: '200px', height: '200px', backgroundColor: '#ECEFF7' }}>
                        <HCenter direction={"end"}>
                            <GoogleAvatar name={'5'} />
                        </HCenter>
                    </div>
                </HStack>
            </VStack>

        )
    }

    const TestVCenter = () => {
        return (
            <VStack alignItems={'flex-start'}>
                <Text fontWeight={'bold'} fontSize={'20px'} margin={'10px'}>HCenter</Text>
                <HStack spacing={10}>
                    <div style={{ width: '200px', height: '200px', backgroundColor: '#ECEFF7' }}>
                        <VCenter direction={"start"}>
                            <GoogleAvatar name={'5'} />
                        </VCenter>
                    </div>
                    <div style={{ width: '200px', height: '200px', backgroundColor: '#ECEFF7' }}>
                        <VCenter direction={"end"}>
                            <GoogleAvatar name={'5'} />
                        </VCenter>
                    </div>
                </HStack>
            </VStack>
        )
    }

    const TestHStack = () => {
        return (
            <VStack alignItems={'flex-start'}>
                <Text fontWeight={'bold'} fontSize={'20px'} margin={'10px'}>HStack</Text>
                <HStack spacing={10}>
                    <div style={{ width: '200px', height: '200px', backgroundColor: '#ECEFF7' }}>
                        <VCenter direction={"start"}>
                            <HStack direction={"start"} flexWidth='auto-full'>
                                <GoogleAvatar name={'5'} />
                                <GoogleAvatar name={'6'} />
                                <GoogleAvatar name={'7'} />
                            </HStack>
                        </VCenter>
                    </div>
                    <div style={{ width: '200px', height: '200px', backgroundColor: '#ECEFF7' }}>
                        <VCenter>
                            <HStack direction={"end"}>
                                <GoogleAvatar name={'5'} />
                                <GoogleAvatar name={'6'} />
                                <GoogleAvatar name={'7'} />
                            </HStack>
                        </VCenter>
                    </div>
                </HStack>
            </VStack>

        )
    }

    const TestVStack = () => {
        return (
            <VStack alignItems={'flex-start'}>
                <Text fontWeight={'bold'} fontSize={'20px'} margin={'10px'}>VStack</Text>
                <HStack spacing={10}>
                    <div style={{ width: '200px', height: '200px', backgroundColor: '#ECEFF7' }}>
                        <HCenter>
                            <VStack direction={"start"}>
                                <GoogleAvatar name={'5'} />
                                <GoogleAvatar name={'6'} />
                                <GoogleAvatar name={'7'} />
                            </VStack>
                        </HCenter>
                    </div>
                    <div style={{ width: '200px', height: '200px', backgroundColor: '#ECEFF7' }}>
                        <HCenter>
                            <VStack direction={"end"}>
                                <GoogleAvatar name={'5'} />
                                <GoogleAvatar name={'6'} />
                                <GoogleAvatar name={'7'} />
                            </VStack>
                        </HCenter>
                    </div>
                </HStack>
            </VStack>

        )
    }

    const TestRound = () => {
        return (
            <VStack alignItems={'flex-start'}>
                <Text fontWeight={'bold'} fontSize={'20px'} margin={'10px'}>VStack</Text>
                <div style={{ width: '200px', height: '200px', backgroundColor: '#ECEFF7' }}>
                    <HCenter>
                        <Round>
                            <GoogleAvatar name={'5'} />
                            <GoogleAvatar name={'6'} />
                            <GoogleAvatar name={'7'} />
                        </Round>
                    </HCenter>
                </div>
            </VStack>

        )
    }

    const TestBetween = () => {
        return (
            <VStack alignItems={'flex-start'}>
                <Text fontWeight={'bold'} fontSize={'20px'} margin={'10px'}>VStack</Text>
                <div style={{ width: '200px', height: '200px', backgroundColor: '#ECEFF7' }}>
                    <HCenter>
                        <Between>
                            <GoogleAvatar name={'5'} />
                            <GoogleAvatar name={'6'} />
                            <GoogleAvatar name={'7'} />
                        </Between>
                    </HCenter>
                </div>
            </VStack>

        )
    }

    const TestAutoGrid = () => {
        return (
            <VStack alignItems={'flex-start'}>
                <Text fontWeight={'bold'} fontSize={'20px'} margin={'10px'}>AutoGrid</Text>
            </VStack>
        )
    }

    const TestGridViewport = ()=>{
        return (
            <GridViewport 
            horizontalWeights={[2, 2, 1]}
            verticalWeights={[3, 1]}>
            <DefaultPlaceholder>Left</DefaultPlaceholder>
            <DefaultPlaceholder>Top</DefaultPlaceholder>
            <DefaultPlaceholder>Right</DefaultPlaceholder>
            <DefaultPlaceholder/>
            <DefaultPlaceholder/>
            <DefaultPlaceholder/>
          </GridViewport>
        ) 
    }

    return (
        <>
            <VStack spacing={10} padding={'0 0 10px 0'}>
                {/* <TestCenter/>
                <TestHCenter />
                <TestVCenter />
                <TestHStack/>
                <TestVStack/> 
                <TestRound/>
                <TestBetween/>
                <TestAutoGrid/>*/}
                <TestGridViewport/>
            </VStack>
        </>
    )
}