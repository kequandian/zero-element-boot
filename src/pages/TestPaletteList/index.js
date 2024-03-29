import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { HCenter } from '@/components/cart'
import { WxPage, AddNewContainer } from '@/components/container';
import { DefaultGridLayoutList } from '@/components/list';
import { PaletteColor } from '@/components/presenter';
import ColorForm from '@/components/formComponent/colorForm';


export default function TestPaletteList(props) {

    // const { paletteName='palette_1'  } = props.location && (props.location.query ||  qs.parse(props.location.search.split('?')[1])) 

    const { paletteName } = props

    if(!paletteName){
        return <></>
    }

    function TestPaletteList () {

        const config = {
            listApi: `/openapi/lc/palette?pageNum=1&pageSize=100&paletteName=${paletteName}`,
            addnewApi: '/openapi/lc/palette',
            saveApi: '/openapi/lc/palette/(id)',
            action: `/openapi/lc/palette/(id)`
        } 

        return (
            <HCenter>
                <WxPage device="pc">
                    <AddNewContainer {...config}>
                        <DefaultGridLayoutList>
                            <PaletteColor/>
                        </DefaultGridLayoutList>
                        <ColorForm/>
                    </AddNewContainer>
                </WxPage>
            </HCenter>
        )
    }

    return (
        <ChakraProvider>
            <TestPaletteList/>
        </ChakraProvider>

    )

    
}
