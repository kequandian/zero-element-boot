import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { HCenter } from '@/components/cart'
import { DrawerContainer, WxPage, AddNewContainer, ConfirmContainer } from '@/components/container';
import { APIContainer, NamedLayout, NamedContainer, NamedCart } from '@/components';
import PreviewAutoLayout from '@/components/PreviewAutoLayout';
import { PlainManageList, KeyValueManageList,  DefaultGridLayoutList } from '@/components/list';
import { PaletteColor } from '@/components/presenter';
import ColorForm from '@/components/formComponent/colorForm';
import LowCodeDatasetManageList from '@/components/list/LowCodeDatasetManageList';


const { Text, Subtitle } = require('@/components/presenter')

export default function NamedContainerDemo(props) {

    function TesttPlainMenegeList() {
        const config = {
            listApi: '/api/auto/module/parameter/278', 
            addApi: '/api/auto/lc_low_auto_module_prop/lowAutoModuleProp/lowAutoModuleProps',
            addApiBody: {
                moduleId: 278,
            },
            newValueBinding: 'propName',
            converter: {"propName": "content"}
        }
    
        const _cartConfig = {
            xname: 'Cart',
            props: {
                padding: '10px 40px',
                margin: '2px',
                linewidth: '1px',
                corner: '8px',
            },
            indicator:{
                xname: "DeleteIndicator",
                props:{
                    isDisabled: true,
                    action: `/api/auto/lc_low_auto_module_prop/lowAutoModuleProp/lowAutoModuleProps/(id)`
                },
                binding: { id:"id" }
            }
        }
    
        return (
            <PlainManageList {...config}>
                <NamedCart cart={_cartConfig} >
                    <Text></Text>
                </NamedCart>
            </PlainManageList>
    
        )
    }

    function TestKeyValueManageList() {

        // const propsList = '/api/auto/module-props/278'
        const propsList = '/api/auto/module/assembly/KeyValueManageConverter'
        
        const config = {
            listApi: propsList, 
            addApi: '/api/auto/lc_low_auto_module_prop/lowAutoModuleProp/lowAutoModuleProps',
            addApiBody: {
                moduleId: 278,
            },
            newKeyBinding: 'propName',
            newValueBinding: 'propValue',
            converter: {
                propName: 'Title',
                propValue: 'Subtitle',
            }
        }
    
        const _cartConfig = {
            xname: 'Cart',
            props: {
                padding: '10px 40px',
                margin: '2px',
                linewidth: '1px',
                corner: '8px',
            },
            indicator:{
                xname: "DeleteIndicator",
                props:{
                    isDisabled: true,
                    action: `/api/auto/lc_low_auto_module_prop/lowAutoModuleProp/lowAutoModuleProps/(id)`
                },
                binding: { id:"id" }
            }
        }

        return (
            <KeyValueManageList {...config}>
                <NamedCart cart={_cartConfig} >
                    <NamedLayout xname="Flexbox" props={{align: 'between', direction: 'row'}}>
                        <Text></Text>
                        <Subtitle></Subtitle>
                    </NamedLayout>
                </NamedCart>
            </KeyValueManageList>
        )
    }

    function TestDrawerContainer() {
        const config = {
            layoutName: 'ComponentTypeList',
            moduleId: '332',
            converter: {
                api:'api',
                layoutApi: 'layoutApi',
                layoutName: 'layoutName',
            }
        }
        return (
            <DrawerContainer  {...config} >
                {/* <PreviewAutoLayout/> */}
            </DrawerContainer>
        )
    }

    function TestDefaultGridLayoutList () {
        
        const items=[
            {
                id:'1',
                color:"#2C88D9",
                name:"Blue",
                dark: "white"
            },
            {
                id:'2',
                color:"#6558F5",
                name:"Indigo",
                dark: "white"
            },
            {
                id:'3',
                color:"#730FC3",
                name:"Purple",
                dark: "white"
            },
            {
                id:'4',
                color:"#BD34D1",
                name:"Pink",
                dark: "white"
            },
            {
                id:'5',
                color:"#1AAE9F",
                name:"Mint",
                dark: "white"
            },
            {
                id:'6',
                color:"#207868",
                name:"Green",
                dark: "white"
            }
        ]
        return (
            <HCenter>
                <WxPage device="pc">
                    <DefaultGridLayoutList items={items}>
                        <PaletteColor/>
                    </DefaultGridLayoutList>
                </WxPage>
            </HCenter>
        )
    }

    function TestAddNewContainer () {

        const config = {
            listApi: '/api/lc/palette?pageNum=1&pageSize=100&paletteName=palette_1',
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

    function TestConfirmContainer () {

        const moduleId = '330'

        const config = {
            listApi: '/api/auto/lc_low_auto_module_dataset/module_dataset/dataset-name-list',
            saveApi: '/api/auto/module/add-dataset/(moduleId)',
            saveApiBody:{
                datasetName: '(datasetName)'
            },
            containerHeight: 880
        }

        return (
            <ConfirmContainer {...config} moduleId={moduleId}>
                <LowCodeDatasetManageList/>
            </ConfirmContainer>
        )
    }

    return (
        <ChakraProvider>
            {/* <TestPlainMenegeList/> */}
            {/* <TestKeyValueManageList/> */}
            <TestDrawerContainer/>
            {/* <TestDefaultGridLayoutList/> */}
            {/* <TestAddNewContainer/> */}
            {/* <TestConfirmContainer/> */}
        </ChakraProvider>

    )

    
}
