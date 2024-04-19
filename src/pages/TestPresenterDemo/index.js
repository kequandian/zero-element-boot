import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { GoogleAvatar } from '@/components/presenter';
import useLowCodePalette from '@/components/hooks/useLowCodePalette'
import useNormalize from '@/components/hooks/useNormalize'
import SelectAction from '@/components/presenter/button/SelectAction';
import PreviewSelectAction from '@/components/presenter/button/PreviewSelectAction';
import { LS } from 'zero-element/lib/utils/storage';

export default function TestPresenterDemo(props) {

        
    useEffect(_=>{
    },[])

    const GoogleAvatarProps = {
        name: 'KKJJ',
    }

    const keysMap = {
        "name": "color"
    }

    // console.log('GoogleAvatarProps', useLowCodePalette('palette_1', keysMap))


    // 一个使用 useNormalize 钩子的组件示例
    const DataConverter = ({ rawData, keysMap }) => {
        const normalizedData = useNormalize(rawData, keysMap);

        return (
            <div>
                {normalizedData.length > 0 && (
                    <ul>
                        {normalizedData.map((item, index) => (
                            <li key={index}>
                                {Object.entries(item).map(([key, value], idx) => (
                                    <span key={idx}>
                                        {key}: {value}
                                    </span>
                                ))}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    };

    // 示例用法
    const AppTest = () => {
        const rawData = {
            "code": 200,
            "records": [
                {
                    "colorName": "Gray",
                    "color": "#575757"
                },
            ]
        };

        const keysMap = {
            "colorName": "color"
        };

        return (
            <div>
                <DataConverter rawData={rawData} keysMap={keysMap} />
            </div>
        );
    };

    const TestSelectAction = () => {

        const _selection = {
            xname: 'NewCartsAutolayout',
            props:{
                // api: '/openapi/lc/module?pageNum=1&pageSize=100&componentOption=cart',
                // binding: {
                //     moduleName: "content",
                //     componentType: "__cart.xname",
                //     componentProps: "__cart.props"
                // },
            },
            selectionName: 'Carts',
        }

        return (
            <SelectAction selection={_selection}/>
        )
    }

    const TestPreviewSelectAction = () => {

        
        const obj = {
            layoutName: 'PresenterLayoutJson',
        }
        LS.set("commonData", obj)

        const _selection = {
            xname: 'NewCartsAutolayout',
            props:{
            },
            label: 'NewCart',
        }
        
        const _actionProps = {
            selection: _selection,
            api: '/openapi/lc/module/presenter/based-on-presenter-create-presenter',
            converter:{
                "layoutName": "mainModuleName",
                "id": "addModuleId"
            },
            layoutName: "PresenterLayoutJson"
        }

        return (
            <PreviewSelectAction {..._actionProps}/>
        )
    }

    return (
        <ChakraProvider>
            {/* <GoogleAvatar {...GoogleAvatarProps}/> */}

            {/* <AppTest /> */}
            {/* <TestSelectAction/> */}
            <TestPreviewSelectAction/>
        </ChakraProvider>
    )

}