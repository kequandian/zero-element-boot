import React from 'react';

// require('./index.less');

/**
 * 
 * @param {color} fill 背景
 * @param {width} width 宽度
 * @param {padding} padding 内距
 * @param {margin} margin 外距
 * @param {height} height 高度
 * @param {borderRadius} corner 圆角
 * 
 * 
 */


export default function Rectangle(props) {
    const{
         fill='',color='#18e1d1',width='',padding='',margin='' ,height='',corner='',
     }=props;

    return (
        <div  style={
            {
                width:`${width}`,
                padding:`${padding}`,
              backgroundColor:`${fill}`,
              margin:`${margin}`,
              height:`${height}`,
              borderRadius: `${corner}`,
              
            }
        }>
            
        </div>
    )
}