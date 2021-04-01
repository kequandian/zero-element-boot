import React from 'react';

export default function TheText(props){
    // console.log(props)
    const {theText}=props
    // console.log(theText)
    return(
            <div className="ExampleText">
                {theText}
            </div>
    )
}