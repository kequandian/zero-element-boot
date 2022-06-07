import React from 'react';

// require('./index.less');

/**
 * 
 * @param {color} fill 背景
 * @param {borderWidth} borderWidth 边框宽度
 * @param {stroke} stroke 边框颜色
 * @param {corner} corner 圆角
 * 
 * 
 */


export default function Rectangle(props) {
    const{
         fill='#ffffff',
         borderWidth='0',
         stroke,
         corner='8px'
     }=props;

    return (
        <div  style={
            {
                width:'100%',
              backgroundColor:`${fill}`,
              height:'100%',
              borderRadius: `${corner}`,
              borderWidth: `${borderWidth}`,
              borderColor: `${stroke}`,
              borderStyle:'solid'
            }
        }>
            
        </div>
    )
}