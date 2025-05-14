import React from 'react';

export default function (props) {

    const { avatar } = props;

    if(avatar){
        return <img src={avatar}  style={{width:'40px', height:'40px', borderRadius:'32px'}} />;
    }else {
        return <div style={{width:'40px', height:'40px', borderRadius:'20px', backgroundColor:'#cccccc'}} ></div>;
    }

}