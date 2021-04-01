import React from 'react';
import Title from './Title';
import TheText from './TheText'

export default function TextContent(props){
    // console.log(props)
    return (
        <div className="TextContent">
            <Title title={props.title}/>
            <TheText theText={props.theText}/>
        </div>
    )
}