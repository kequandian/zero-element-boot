import React from 'react';

export default function Title(props){
    const {title}=props
    return(
        <div className="ExampleTitle">
            {title}
        </div>
    )
}