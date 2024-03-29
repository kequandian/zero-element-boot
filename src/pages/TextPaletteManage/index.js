import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { HCenter } from '@/components/cart'
import { WxPage, AddNewContainer } from '@/components/container';
import { APIContainer, AutoLayout } from '@/components';
import ColorForm from '@/components/formComponent/colorForm';


export default function TextPaletteManage(props) {

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
            "xname": "SquareCart",
            "props": {
                "margin": "5px",
                "corner": "8px",
                "fill": "#fff",
                "ratio": 0.5,
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
                "paletteName1": "content"
            },
            "indicator":{
                "xname": "CircularDeleteIndicator",
                "props": {
                    "isDisabled": true,
                },
                "binding": { "id": "id" },
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

        const config = {
            // listApi: `/openapi/lc/palette/palette-name-list`,
            addnewApi: '/openapi/lc/palette',
            saveApi: '/openapi/lc/palette/(id)',
            // action: `/openapi/lc/palette/(id)`
        }

        return (
            <APIContainer API={api} layout={layoutJson} onItemClick={itemClick}>
                <AutoLayout  />
            </APIContainer>
            // <AddNewContainer {...config}>
            //      <APIContainer API={api}>
            //         <AutoLayout layout={layoutJson} onItemClick={itemClick} />
            //     </APIContainer>
            //     <ColorForm/>
            // </AddNewContainer>
        )
    }


    return (
        <ChakraProvider>
            <TestPalettemManage />
            
            
        </ChakraProvider>

    )


}
