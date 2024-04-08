import React, { useState, useEffect } from 'react';
import useLowCodePalette from '@/components/hooks/useLowCodePalette';


/**
 * 
 * @param {string or number} name 显示的名称 或 通过数字索引获取
 * @param {array} palette 色板数组 
 */

export default function GoogleAvatar(props) {

    const { name, palette=[] } = props;

    const keysMap = {
        "name": "color"
    }

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
    function getColorByIndex(palette, index) {
        if(palette && palette.length === 0){
            return ''
        }
        if(index >= palette.length) {
            index = index % palette.length;
            if(index ===0) {
                index = palette.length -1;
            }
        }
        let color = ''
        //获取对应索引的颜色
        Object.entries(palette[index]).map(([key, value], idx) => (
            color = value
        ))
        return color
    }

    const paletteList = useLowCodePalette('palette_1', keysMap)

    let firstLetter = getFirstLetter(name);
    //获取字母在字母表中的索引
    let index = letterToIndex(firstLetter);

    if(!paletteList || !paletteList.length === 0 || !palette || !palette.length === 0 ){
        return
    }

    // console.log('paletteList = ', paletteList)

    //获取对应索引的颜色
    let color = getColorByIndex(paletteList || palette, index);

    return (
        <div style={{ 
                width: '45px',
                height: '45px',
                backgroundColor: color,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '25px',
                color: 'white',
                fontWeight: 'bold',
            }}
        >
            {firstLetter && typeof firstLetter === 'string'  &&  firstLetter.toUpperCase()}
        </div>
    )

}