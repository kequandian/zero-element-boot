import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { HCenter } from '@/components/cart'
import { WxPage, AddNewContainer } from '@/components/container';
import { DefaultGridLayoutList } from '@/components/list';
import { PaletteColor } from '@/components/presenter';
import ColorForm from '@/components/FormComponent/colorForm';


export default function TestPaletteList(props) {

    // const { paletteName='palette_1'  } = props.location && (props.location.query ||  qs.parse(props.location.search.split('?')[1])) 

    const { paletteName } = props

    if(!paletteName){
        return <></>
    }

    function TestPaletteList () {

        const config = {
            listApi: `/api/lc/palette?pageNum=1&pageSize=100&paletteName=${paletteName}`,
            addnewApi: '/api/lc/palette',
            saveApi: '/api/lc/palette/(id)',
            action: `/api/lc/palette/(id)`
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
