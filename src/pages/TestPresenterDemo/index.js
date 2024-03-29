import React from 'react';
import { GoogleAvatar } from '@/components/presenter';
import useLowCodePalette from '@/components/hooks/useLowCodePalette'
import useNormalize from '@/components/hooks/useNormalize'

export default function TestPresenterDemo(props) {

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

    return (
        <>
            <GoogleAvatar {...GoogleAvatarProps}/>

            {/* <AppTest /> */}
        </>
    )

}