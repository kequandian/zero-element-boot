import React from 'react';

export default function ImageAnimation(props){
    // console.log(props)
    const { imgUrl }=props;
    return(
    <div className="ExampleImage">
        <img className="theImage"
            src={imgUrl}
        />
    </div>)
}