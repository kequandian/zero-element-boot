import React from 'react';

import { ChakraProvider, HStack, Box, Button  } from '@chakra-ui/react';
import PreviewAutoLayout from '@/components/PreviewAutoLayout';
import { AutoLayout, APIContainer } from '@/components';

import { WxPage } from '@/components/container';
import { HCenter } from '@/components/cart';

export default function TestAutoLayout(props) {



    const TestAutoLayout = () => {
        const config = {
            layout: {
                "container": {
                    "xname": "SelectList"
                },
                "presenter": {
                    "children": [
                        {
                            "binding": {
                                "imgUrl": "url"
                            },
                            "xname": "CozeImage",
                            "props": {
                                "w": "36",
                                "h": "36"
                            }
                        },
                        {
                            "children": [
                                {
                                    "binding": {
                                        "title": "content"
                                    },
                                    "xname": "Title"
                                },
                                {
                                    "binding": {
                                        "subtitle": "content"
                                    },
                                    "xname": "Subtitle"
                                }
                            ],
                            "binding": {
                                "address": "subtitle",
                                "name": "title"
                            }
                        }
                    ],
                    "xname": "HStack",
                    "props": {
                        "spacing": "6",
                        "flexFlow": "no-wrap"
                    }
                    
                },
                "mock": [
                    {
                        "imgUrl": "https://p3-flow-product-sign.byteimg.com/tos-cn-i-13w3uml6bg/9bce25f721a24384a36aa1b4dcb008cd~tplv-13w3uml6bg-resize:128:128.image?rk3s=2e2596fd&x-expires=1714701611&x-signature=lSUmFMfsf5iIKxmCR2EJXTlvJ5w%3D",
                        "address": "广东省深圳南山区0.8km",
                        "name": "混果汁(中电长城乐洲店)"
                    },
                    {
                        "imgUrl": "https://p3-flow-product-sign.byteimg.com/tos-cn-i-13w3uml6bg/9bce25f721a24384a36aa1b4dcb008cd~tplv-13w3uml6bg-resize:128:128.image?rk3s=2e2596fd&x-expires=1714701611&x-signature=lSUmFMfsf5iIKxmCR2EJXTlvJ5w%3D",
                        "address": "广东省深圳南山区0.8km",
                        "name": "混果汁(深圳湾科技生态园2区店)"
                    },
                    {
                        "imgUrl": "https://p3-flow-product-sign.byteimg.com/tos-cn-i-13w3uml6bg/9bce25f721a24384a36aa1b4dcb008cd~tplv-13w3uml6bg-resize:128:128.image?rk3s=2e2596fd&x-expires=1714701611&x-signature=lSUmFMfsf5iIKxmCR2EJXTlvJ5w%3D",
                        "address": "广东省深圳南山区1km",
                        "name": "混果汁(南山金地威新中心店)"
                    }
                ],
                "xname": "VStack",
                "props": {
                    "spacing": "5"
                }
            }
        }

        return (
            <AutoLayout ___ {...config}/>
        )
    }

    return (

        <ChakraProvider>

            <TestAutoLayout />
            
        </ChakraProvider>
       
    )
}
