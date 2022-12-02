import React from 'react';

// require('./index.less');

/**
 * 
 * @param {color} fill 背景
 * @param {borderWidth} borderWidth 边框宽度
 * @param {stroke} stroke 边框颜色
 * 
 */


export default function Circle(props) {
    const{
         fill='#ffffff',
         borderWidth='0',
         stroke,
     }=props;

    return (
        <div  style={
            {
                width:'100%',
              backgroundColor:`${fill}`,
              height:'100%',
              borderRadius: '25%',
              borderWidth: `${borderWidth}`,
              borderColor: `${stroke}`,
              borderStyle:'solid'
            }
        }>
            
        </div>
    )
}