import React from 'react';
require('./index.less')
export default function NewDemoList(props){
    // const {imgUrl}=props;
    const imgUrl="https://img.36krcdn.com/20201224/v2_0859a3ca4ddb49b4b8ff878270f07942_img_png";
    return (
        <div className="image-animation">
            <img src={imgUrl} alt="Image"/>
        </div>
        
        
    )
}