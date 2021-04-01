import React from 'react';
import { AutoComponent } from '@/components';
import ImageAnimation from '../ImageAnimation'
import TextContent from '../TextContent'
import FootContent from '../FootContent'
import layout from "./layout"

export default function ExampleTwo(props){
    // console.log(props)
    const allComponents={
        ImageAnimation,
        TextContent,
        FootContent,
    };
    const config={
        layout,
        ...props,
    }
    console.log(config)
    console.log(allComponents)
    return (
        <div className="BigBox">
            <AutoComponent {...config} allComponents={allComponents}/>
        </div>
    )
}