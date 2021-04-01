import React from 'react';
import ImageAnimation from './presenter/ImageAnimation'
import layout from "./layout";

export default function NewDemoItem(props){
    const allComponents={
        ImageAnimation,
    }
    const config={
        layout,
        ...props,
    }
    return (
        <div>
            <AutoComponent {...config} allComponents={allComponents}/>
        </div>
    )
}