import React from 'react';
import { ChakraProvider  } from '@chakra-ui/react';
import SelectList from '@/components/list/SelectList';
import OutlineSelector from '@/components/selector/OutlineSelector';
import { ItemPlaceholder } from '@/components/presenter';
import { AutoLayout } from '@/components'
import NamedSelector from '@/components/NamedSelector';
import testSelectorLayout from './testLayout.json';

const testItems = [
    { id: 1, name: 'AAA', "componentType": "OutlineSelector", "componentProps": {
        "isSelected": "false",
        "selected": "false"
    }, },
    // { id: 2, name: 'BBB', "componentType": "CornerCheckboxSelector","componentProps": null}
]

const layout = {
    xname: 'Gridbox',
    props: {
        columns: 8,
    },
    "binding": {
        "componentType": "__selector.xname",
        "componentProps": "__selector.props"
    },
    container: 'SelectList',
    presenter: {
        xname: 'ItemPlaceholder',
        props:{ }
    },
    selector: {
        // xname: 'OutlineSelector',
        // props: {
        //     lineWidth: 2,
        //     lineColor: '#D9FF00'
        // },
        selected: true
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
        layout: testSelectorLayout
    }

    function itemClick () {

    }
  
  return (
    <ChakraProvider>
        <AutoLayout {...config}  onItemClick={itemClick} />
        {/* <SelectList items={testItems} onItemClick={selectItemClick}>
            <NamedSelector xname="OutlineSelector" selected={false}>
                <ItemPlaceholder/>
            </NamedSelector>
        </SelectList> */}
    </ChakraProvider>
  )

}