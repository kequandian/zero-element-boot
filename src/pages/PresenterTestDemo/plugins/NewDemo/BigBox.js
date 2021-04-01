import React from 'react';
import ImageAnimation from './ImageAnimation'
import TextContent from './TextContent'
import FootContent from './FootContent'
require('./Example_two.less')

export default function BigBox(props){
    return (
        <div className="BigBox">
            <ImageAnimation imgUrl={props.data.imgUrl}/>
            <TextContent text={props.data}/>
            <FootContent time={props.data}/>
        </div>)
}