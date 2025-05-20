import React, { useState, useEffect } from 'react';
import usePalette from '@/components/hooks/usePalette';


/**
 * 
 * @param {string or number} name 显示的名称 或 通过数字索引获取
 */

export default function GoogleAvatar(props) {

    const { name } = props;

    // const keysMap = {
    //     "name": "color"
    // }

    //获取name的第一个字母
    function getFirstLetter(name) {
        return /[a-zA-Z]/.test(name) ? name.charAt(0) : /\d/.test(name) ? parseInt(name) : 0;
    }

    //将字母转换为索引
    function letterToIndex(letter) {
        if(/[a-zA-Z]/.test(name)){
            letter = letter.toLowerCase();
            const index = letter.charCodeAt(0) - 'a'.charCodeAt(0);
            return index;
        }else{
            return letter
        }
        
    }

    //根据索引获取对应颜色
    // function getColorByIndex(palette, index) {
    //     if(palette && palette.length === 0){
    //         return ''
    //     }
    //     if(index >= palette.length) {
    //         index = index % palette.length;
    //         if(index ===0) {
    //             index = palette.length -1;
    //         }
    //     }
    //     let color = ''
    //     //获取对应索引的颜色
    //     Object.entries(palette[index]).map(([key, value], idx) => (
    //         color = value
    //     ))
    //     return color
    // }
    
    //获取对应索引的颜色
    // let color = getColorByIndex(paletteList || palette, index);


    // const paletteList = useLowCodePalette('palette_1', keysMap)
    const paletteColor = usePalette()

    let firstLetter = getFirstLetter(name);
    
    //获取字母在字母表中的索引
    // let index = letterToIndex(firstLetter);

    // if(!paletteList || !paletteList.length === 0 || !palette || !palette.length === 0 ){
    //     return
    // }

    return (
        <div style={{ 
                width: '45px',
                height: '45px',
                backgroundColor: paletteColor,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '25px',
                color: 'white',
                fontWeight: 'bold',
            }}
        >
            <div>firstLetter</div>
        </div>
    )

}