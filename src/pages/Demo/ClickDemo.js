import React from 'react';
import { ChakraProvider  } from '@chakra-ui/react';
import SelectList from '@/components/list/SelectList';
import OutlineSelector from '@/components/selector/OutlineSelector';
import { ItemPlaceholder } from '@/components/presenter';
import { AutoLayout } from '@/components'
import NamedSelector from '@/components/NamedSelector';

const testItems = [
    { id: 1, name: 'AAA' },
    { id: 2, name: 'BBB' },
    { id: 3, name: 'CCC' },
]

const layout = {
    xname: 'Gridbox',
    props: {
        columns: 8,
    },
    container: 'SelectList',
    presenter: {
        xname: 'ItemPlaceholder',
        props:{
    }
    },
    selector: {
        xname: 'OutlineSelector',
        props: {
            lineWidth: 2,
            lineColor: '#D9FF00'
        },
        selected: false
    },
  }

export default function ClickDemo(props) {

    function selectItemClick () {
        // console.log('selectItemClick')
    }

    function onClickBBB () {
        console.log('onClickBBB')
    }

    const config = {
        items: testItems,
        layout: layout
    }

    function itemClick () {

    }
  
  return (
    <ChakraProvider>
        {/* <AutoLayout {...config}  onItemClick={itemClick} /> */}
        <SelectList items={testItems} onItemClick={selectItemClick}>
            <NamedSelector xname="OutlineSelector" selected={false}>
                <ItemPlaceholder/>
            </NamedSelector>
        </SelectList>
    </ChakraProvider>
  )

}