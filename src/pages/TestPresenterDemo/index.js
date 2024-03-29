import React from 'react';
import { GoogleAvatar } from '@/components/presenter';
import useLowCodePalette from '@/components/hooks/useLowCodePalette'

export default function TestPresenterDemo (props) {

    const GoogleAvatarProps = {
        name: 'huang',
        palette: [
            '#34a853',
            '#fbbc05',
            '#4285f4',
            '#00c853',
        ]
    }

    console.log('GoogleAvatarProps', useLowCodePalette('palette_1'))

    return (
        <>
            <GoogleAvatar {...GoogleAvatarProps}/>
        </>
    )
    
}