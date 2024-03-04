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

  const items = [
    {
        "bindingName": null,
        "combinationOption": "element",
        "componentId": "111",
        "componentName": null,
        "componentOption": "presenter",
        "componentProps": {
            "size": "50"
        },
        "componentType": "Avatar",
        "containerStyleName": null,
        "datasetName": null,
        "descriptor": null,
        "display": 1,
        "id": "123",
        "moduleData": null,
        "moduleKey": "",
        "moduleName": "Avatar",
        "moduleProps": [
            {
                "assembledAs": null,
                "dataType": "STRING",
                "id": "228",
                "moduleId": "123",
                "moduleKey": null,
                "moduleName": null,
                "propDataType": null,
                "propName": "size",
                "propValue": "50"
            }
        ],
        "name": "Avatar",
        "pageId": null,
        "pid": "129",
        "referenceGatewayName": null,
        "referenceStyleName": null
    },
    {
        "bindingName": "titleContent",
        "combinationOption": "element",
        "componentId": "114",
        "componentName": null,
        "componentOption": "presenter",
        "componentProps": null,
        "componentType": "Title",
        "containerStyleName": null,
        "datasetName": null,
        "descriptor": null,
        "display": 1,
        "id": "127",
        "moduleData": null,
        "moduleKey": "",
        "moduleName": "Title",
        "moduleProps": [],
        "name": "Title",
        "pageId": null,
        "pid": "130",
        "referenceGatewayName": null,
        "referenceStyleName": null
    },
    {
        "bindingName": "subTitleContent",
        "combinationOption": "element",
        "componentId": "115",
        "componentName": null,
        "componentOption": "presenter",
        "componentProps": null,
        "componentType": "Subtitle",
        "containerStyleName": null,
        "datasetName": "",
        "descriptor": null,
        "display": 1,
        "id": "128",
        "moduleData": null,
        "moduleKey": "",
        "moduleName": "Subtitle",
        "moduleProps": [],
        "name": "Subtitle",
        "pageId": null,
        "pid": "0",
        "referenceGatewayName": null,
        "referenceStyleName": null
    },
    {
        "bindingName": null,
        "combinationOption": "element",
        "componentId": "111",
        "componentName": null,
        "componentOption": "presenter",
        "componentProps": {
            "size": "50"
        },
        "componentType": "Avatar",
        "containerStyleName": null,
        "datasetName": null,
        "descriptor": null,
        "display": 1,
        "id": "154",
        "moduleData": null,
        "moduleKey": "",
        "moduleName": "61b5d4987ced42f987b54de2e925ebc9",
        "moduleProps": [
            {
                "assembledAs": null,
                "dataType": "STRING",
                "id": "289",
                "moduleId": "154",
                "moduleKey": null,
                "moduleName": null,
                "propDataType": null,
                "propName": "size",
                "propValue": "50"
            }
        ],
        "name": "Avatar",
        "pageId": null,
        "pid": "153",
        "referenceGatewayName": null,
        "referenceStyleName": null
    },
    {
        "bindingName": null,
        "combinationOption": "element",
        "componentId": "114",
        "componentName": null,
        "componentOption": "presenter",
        "componentProps": null,
        "componentType": "Title",
        "containerStyleName": null,
        "datasetName": null,
        "descriptor": null,
        "display": 1,
        "id": "158",
        "moduleData": null,
        "moduleKey": "",
        "moduleName": "13856204236a4e30a553495477e183dd",
        "moduleProps": [],
        "name": "Title",
        "pageId": null,
        "pid": "0",
        "referenceGatewayName": null,
        "referenceStyleName": null
    },
    {
        "bindingName": "imageUrl",
        "combinationOption": "element",
        "componentId": "146",
        "componentName": null,
        "componentOption": "presenter",
        "componentProps": null,
        "componentType": "Image",
        "containerStyleName": null,
        "datasetName": null,
        "descriptor": null,
        "display": 1,
        "id": "199",
        "moduleData": null,
        "moduleKey": "",
        "moduleName": "Image",
        "moduleProps": [],
        "name": "Image",
        "pageId": null,
        "pid": "0",
        "referenceGatewayName": null,
        "referenceStyleName": null
    }
]

  const testLayout = {"xname":"Gridbox","props":{"columns":4},"presenter":{},"binding":{"name":"content","componentType":"___presenter.xname","componentProps":"___presenter.props"},"cart":{"xname":"Cart","props":{"padding":"10px","margin":"1px 0","linewidth":0,"corner":"8px"},"indicator":{"xname":"ShadowIndicator","props":{}},"selector":{"xname":"CornerCheckboxSelector","props":{}}},"container":"MultiSelectList"}


// const testLayout = {
//     "children": [
//         {
//             "xname": "Title",
//             "binding":{
//                 "titleContent": "content"
//             }
//         },
//         {
//             "xname": "Subtitle",
//             "binding":{
//                 "subTitleContent": "content"
//             }
//         },
//         {
//             "xname": "Image",
//             "binding":{
//                 "imageUrl": "url"
//             }
//         }
//     ],
//     "xname": "VStack",
//     "props": {
//         "spacing": "5"
//     },
//     "mock":{ "apiTitle": "Earth Tones", "apiSubtitle": "Earth Tones", "apiImage": "https://cdn.photoroom.com/v1/assets-cached.jpg?path=templates_v2%2F1a32adfa-46af-43b5-a67a-b9a74f7144ae%2Fthumb_680d2389-5a81-43da-8fb8-c18a58f9897a.jpg"},
//     "binding":{
//         "apiImage": "imageUrl",
//         "apiTitle": "titleContent",
//         "apiSubtitle": "subTitleContent"
//     }
// }

export default function ClickDemo(props) {

    function selectItemClick () {
        // console.log('selectItemClick')
    }

    function onClickBBB () {
        console.log('onClickBBB')
    }

    const config = {
        items: items,
        layout: testLayout
    }

    function itemClick (data) {
        console.log('多选数据 = ', data)
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