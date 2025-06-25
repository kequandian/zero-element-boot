import React from 'react';
// import { ChakraProvider, HStack, Box, Button  } from '@chakra-ui/react';
import { AutoLayout } from '@/components';

import Title  from './presenter/Title'
import Subtitle from './presenter/Subtitle';

const ComponentSet = {Title, Subtitle}

   

export default function TestAutoLayout(props) {
    const previewClick = (layoutName) => {
        console.log('previewClick = ', layoutName)
    }
    
    const config = {
        layout: {
            "container": {
                "xname": "SelectList"
            },
            "cart":{
                "selector": "OutlineSelector"
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
                    },
                    "xseq": "child2"
                    }
                ],
                "xname": "HStack",
                "xseq": "child1"
            },
            "mock": [
                {
                    "imgUrl": "https://img13.360buyimg.com/n5/s720x720_jfs/t1/304274/30/1655/102708/68234aaeF893021d4/d2a56ac06e1c4ce6.jpg.avif",
                    "address": "广东省深圳南山区0.8km",
                    "name": "混果汁(中电长城乐洲店)"
                },
                {
                    "imgUrl": "https://img13.360buyimg.com/n5/s720x720_jfs/t1/304274/30/1655/102708/68234aaeF893021d4/d2a56ac06e1c4ce6.jpg.avif",
                    "address": "广东省深圳南山区0.8km",
                    "name": "混果汁(中电长城乐洲店)"
                },
                {
                    "imgUrl": "https://img13.360buyimg.com/n5/s720x720_jfs/t1/304274/30/1655/102708/68234aaeF893021d4/d2a56ac06e1c4ce6.jpg.avif",
                    "address": "广东省深圳南山区0.8km",
                    "name": "混果汁(中电长城乐洲店)"
                },                
            ],
            "xname": "Wrap",
            "props": {
                "direction": "row"
             },
            "xseq": "TitleAutoLayout",
            "xgap": "30px" 
        }
    }

    const wxPageConfig = {
        name: "PRESENTER",
        layout: {
            "container": {
                "xname": "WxPage"
            },
            "presenter": {
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
    }

    const child2 = {
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
            },
            "xseq": "child2",
            "mock": {
                "imgUrl": "https://img13.360buyimg.com/n5/s720x720_jfs/t1/304274/30/1655/102708/68234aaeF893021d4/d2a56ac06e1c4ce6.jpg.avif",
                "address": "广东省深圳南山区0.8km",
                "name": "混果汁(深圳湾科技生态园2区店)"
            }
    }

    const child1 = {
        "children": [
                {
                    "binding": {
                        "imgUrl": "url"
                    },
                    "xname": "CozeImage",
                    "props": {
                        "w": "40",
                        "h": "40"
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
                },
                "cart": {
                    "xname": "ChakraBox",
                    "props": {
                        "w": "400px"
                    }
                },
                "xseq": "child2"
                }
            ],
            "xname": "Wrap",
            "props": {
            },
            "mock": {
                "imgUrl": "https://img13.360buyimg.com/n5/s720x720_jfs/t1/304274/30/1655/102708/68234aaeF893021d4/d2a56ac06e1c4ce6.jpg.avif",
                "address": "广东省深圳南山区0.8km",
                "name": "混果汁(深圳湾科技生态园2区店)"
            },          
            "cart":{
                "selector": {
                    "xname": "OutlineSelector",
                    "props": {
                        "selected": true,
                    }
                }
            },  
            "xseq": "child1"
        }

    return (
        <>
        <AutoLayout  {...config} allComponents={ComponentSet} onPreviewTriggered={previewClick}/>

        {/* <AutoLayout layout={wxPageConfig} allComponents={ComponentSet} */}
        {/* <AutoLayout layout={child2} allComponents={ComponentSet}/> */}
        {/* <AutoLayout layout={child1} allComponents={ComponentSet}/> */}

    </>    
    )

}
