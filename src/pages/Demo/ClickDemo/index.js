import React from 'react';
import { 
    ChakraProvider ,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react';
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

//   const testLayout = {"xname":"Gridbox","props":{"columns":4},"presenter":{},"binding":{"name":"content","componentType":"___presenter.xname","componentProps":"___presenter.props"},"cart":{"xname":"Cart","props":{"padding":"10px","margin":"1px 0","linewidth":0,"corner":"8px"},"indicator":{"xname":"ShadowIndicator","props":{}},"selector":{"xname":"CornerCheckboxSelector","props":{}}},"container":"MultiSelectList"}


const testLayout = {
    "container": {
        "xname": "SelectList"
    },
    "presenter": {
        "children": [
            {
                "presenter": {
                    "binding": {
                        "imageUrl": "url"
                    },
                    "xname": "Image",
                    "props": {
                        "width": "36"
                    }
                },
                "cart": {
                    "xname": "Cart",
                    "props": {
                        "padding": "0px",
                        "margin": "0",
                        "corner": "6px",
                        "lineColor": "#EFEFEF",
                        "fill": "#fff",
                        "linewidth": "1px"
                    }
                }
            },
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
            },
            {
                "binding": {
                    "description": "content"
                },
                "xname": "Description"
            }
        ],
        "mock": {
            "subtitle": "扣子官方",
            "imageUrl": "https://p9-flow-product-sign.byteimg.com/tos-cn-i-13w3uml6bg/e854fe2917f043719bffa4f6cc73d0ff~tplv-13w3uml6bg-resize:128:128.image?rk3s=2e2596fd&x-expires=1712136802&x-signature=m8VSvCKz89%2BY4wbRnITJmY%2BiIcY%3D",
            "description": "从Bing搜索任何信息和网页URL。",
            "title": "必应搜索"
        },
        "xname": "VStack",
        "props": {
            "spacing": "5"
        }
    },
    "mock": [
        {
            "subtitle": "扣子官方",
            "imageUrl": "https://p9-flow-product-sign.byteimg.com/tos-cn-i-13w3uml6bg/e854fe2917f043719bffa4f6cc73d0ff~tplv-13w3uml6bg-resize:128:128.image?rk3s=2e2596fd&x-expires=1712136802&x-signature=m8VSvCKz89%2BY4wbRnITJmY%2BiIcY%3D",
            "description": "从Bing搜索任何信息和网页URL。",
            "title": "必应搜索",
            "label": "必应搜索"
        },
        {
            "subtitle": "扣子官方",
            "imageUrl": "https://p9-flow-product-sign.byteimg.com/tos-cn-i-13w3uml6bg/c76063938be84bbaa6a8ab979c947941~tplv-13w3uml6bg-resize:128:128.image?rk3s=2e2596fd&x-expires=1712136802&x-signature=Tx%2BfIv3ql5rgeFYrQ9ClLf02nQU%3D",
            "description": "根据文本描述生成图像，可指定图像数量和大小。",
            "title": "ByteArtist",
            "label": "ByteArtist"
        }
    ],
    "xname": "Flexbox",
    "cart": {
        "xname": "Cart",
        "props": {
            "padding": "0px",
            "margin": "0",
            "corner": "6px",
            "lineColor": "#EFEFEF",
            "fill": "#fff",
            "linewidth": "1px"
        }
    },
    // "indicator":{
    //     "xname": "LabelIndicator",
    //     "props":{
    //     },
    //     "trigger": "always",
    //     "binding": {
    //         "label":"label",
    //     }
    // },
    "indicator":{
        "xname": "TipsIndicator",
        "props":{
        },
        "trigger": "always",
        "binding": {
            "title":"title",
            "description":"content",
        }
    },
    "props": {
        "align": "start",
        "direction": "row",
        "spacing": "8"
    }
}

export default function ClickDemo(props) {

    function selectItemClick () {
        // console.log('selectItemClick')
    }

    function onClickBBB () {
        console.log('onClickBBB')
    }

    const config = {
        // items: items,
        layout: testLayout
    }

    function itemClick (data) {
        console.log('多选数据 = ', data)
    }
  
  return (
    <ChakraProvider>
        <div style={{marginTop: "10px"}}>
        <AutoLayout {...config}  onItemClick={itemClick} />
        </div>
        {/* <SelectList items={testItems} onItemClick={selectItemClick}>
            <NamedSelector xname="OutlineSelector" selected={false}>
                <ItemPlaceholder/>
            </NamedSelector>
        </SelectList> */}
        <div style={{width: "120px"}}>
        <Popover trigger='hover'>
             <PopoverTrigger>
                 <div>Popover</div>
             </PopoverTrigger>
             <PopoverContent>
                 <PopoverArrow />
                 <PopoverCloseButton />
                 <PopoverHeader>Confirmation!</PopoverHeader>
                 <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
             </PopoverContent>
         </Popover>
        </div>
         
    </ChakraProvider>
  )

}