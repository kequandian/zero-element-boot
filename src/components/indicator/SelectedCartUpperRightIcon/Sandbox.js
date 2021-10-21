import React from 'react'
import SelectedCartOutSideIcon from './index';

export default function Sandbox(props) {

    return (
        <div style={{ width: "300px" }}>
            <SelectedCartOutSideIcon isSelected={true} fill={'transparent'} stroke='#2196F3' lineWidth='1px'>
                <div>
                    SelectedCartOutSideIcon
                </div>
            </SelectedCartOutSideIcon>
        </div>
    )
}