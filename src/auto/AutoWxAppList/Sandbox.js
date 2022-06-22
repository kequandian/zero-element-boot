import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import CssCart from '@/components/css/CssCart';
import AutoWxList from './index';
import { Text, Grid,Box } from '@chakra-ui/react'
import TitledContainer from '@/components/container/TitledContainer'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function (props) {

    let endpoint='http://app1.console.smallsaas.cn:8001/openapi'
    // let endpoint='http://app1.console.smallsaas.cn:8001/openapi'

    return (
        <ChakraProvider>
           <CssCart margin='20px'>
            <Tabs>
                <TabList>
                    <Tab>
                    <div style={{fontWeight:'bold',fontSize:'20px'}}  >小程序</div>
                    </Tab>
                    <Tab>Two</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                       <AutoWxList endpoint={endpoint} />
                    </TabPanel>

                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                  
                </TabPanels>
            </Tabs>
            </CssCart>
        </ChakraProvider>
    )
}