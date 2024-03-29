import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { HCenter } from '@/components/cart'
import { WxPage, AddNewContainer } from '@/components/container';
import { APIContainer, AutoLayout } from '@/components';
import ColorModal from '@/components/modalComponent/colorModal';
import TestPaletteList from '@/pages/TestPaletteList';
import LowCodeDatasetManageList from '@/components/list/LowCodeDatasetManageList';


export default function TestPaletteManage(props) {

    const layoutJson = {
        "xname": "VStack",
        "props": {
            "spacing": 3,
        },
        "container": {
            "xname": "SelectList",
            "props": {
                "isSwitch": "true",
                "btnPisition": "bottom"
            }
        },
        "cart": {
            "xname": "Cart",
            "props": {
                "padding": "5px",
                "margin": "6px",
                "linewidth": 0,
                "corner": "0px"
            }
        },
        "presenter": {
            "children": [
                {
                    "xname": "GoogleAvatar",
                    "binding":{
                        "paletteName": "name"
                    }
                },
                {
                    "xname": "Text",
                    "binding":{
                        "paletteName": "content"
                    },
                    "props":{
                        "fontSize": "20px",
                    }
                }
            ],
            "xname": "HStack",
            "props": {
                "spacing": 8,
                "justify": "center column"
            },
            "cart": {
                "xname": "SquareCart",
                "props": {
                    "margin": "0px",
                    "corner": "8px",
                    "fill": "",
                    "ratio": 0.5,
                }
            },
                
        }

    }

    function TestPalettemManage() {

        const api = "/openapi/lc/palette/palette-name-list"
        const deleteApi = "/openapi/lc/palette?paletteName=(paletteName)"

        const config = {
            listApi: api,
            addnewApi: '',
            saveApi: '',
        }

        return (
            <AddNewContainer {...config}>
                 {/* <APIContainer API={api}>
                    <AutoLayout layout={layoutJson} action={deleteApi} />
                </APIContainer> */}
                <LowCodeDatasetManageList/>
                {/* <ColorModal>
                    <TestPaletteList/>
                </ColorModal> */}
            </AddNewContainer>
        )
    }


    return (
        <ChakraProvider>
            <TestPalettemManage />
        </ChakraProvider>

    )


}
