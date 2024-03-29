import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { HCenter } from '@/components/cart'
import { WxPage, AddNewContainer } from '@/components/container';
import { APIContainer, AutoLayout } from '@/components';
import ColorModal from '@/components/modalComponent/colorModal';
import TestPaletteList from '@/pages/TestPaletteList';


export default function TestPaletteManage(props) {

    const layoutJson = {
        "xname": "Gridbox",
        "props": {
            "columns": "5"
        },
        "container": {
            "xname": "SelectList",
            "props": {
            }
        },
        "cart": {
            "xname": "Cart",
            "props": {
                "padding": "5px",
                "margin": "0",
                "linewidth": 0,
                "corner": "0px"
            }
        },
        "indicator": {
            "xname": 'TitleIndicator',
            "props": {
            },
            "binding": {
                "paletteName": "titleContent",
            },
            "trigger": "always"
        },
        "presenter": {
            "xname": "Text",
            "binding": {
                "paletteName": "content"
            },
            "indicator":{
                "xname": "CircularDeleteIndicator",
                "props": {
                    "isDisabled": true,
                },
                "binding": { "paletteName": "paletteName" },
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

    function itemClick(item) {
        console.log('itemClick = ', item)
        const w = window.open('about:blank');
        w.location.href = "/#/TextPaletteList?paletteName=" + item.paletteName
    }

    function TestPalettemManage() {

        const api = "/openapi/lc/palette/palette-name-list"
        const deleteApi = "/openapi/lc/palette/(paletteName)"

        const config = {
            addnewApi: '/openapi/lc/palette',
            saveApi: '/openapi/lc/palette/(id)',
        }

        return (
            // <APIContainer API={api} action={deleteApi} layout={layoutJson} onItemClick={itemClick}>
            //     <AutoLayout  />
            // </APIContainer>
            <AddNewContainer {...config}>
                 <APIContainer API={api}>
                    <AutoLayout layout={layoutJson} action={deleteApi} />
                </APIContainer>
                <ColorModal>
                    <TestPaletteList/>
                </ColorModal>
            </AddNewContainer>
        )
    }


    return (
        <ChakraProvider>
            <TestPalettemManage />
            
            
        </ChakraProvider>

    )


}
