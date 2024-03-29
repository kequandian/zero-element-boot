import React from 'react';
import { GoogleAvatar } from '@/components/presenter';

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

    return (
        <>
            <GoogleAvatar {...GoogleAvatarProps}/>
        </>
    )
    
}