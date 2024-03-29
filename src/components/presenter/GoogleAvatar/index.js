import React from 'react';

/**
 * 
 * @param {string} name 显示的名称 
 * @param {array} palette 色板数组 
 */

export default function GoogleAvatar(props) {

    const { name, palette=[] } = props;

    //获取name的第一个字母
    function getFirstLetter(name) {
        return name.charAt(0);
    }

    //将字母转换为索引
    function letterToIndex(letter) {
        letter = letter.toLowerCase();
        const index = letter.charCodeAt(0) - 'a'.charCodeAt(0);
        return index;
    }

    //根据索引获取对应颜色
    function getColorByIndex(palette, index) {
        if(index >= palette.length) {
            index = index % palette.length;
            if(index ===0) {
                index = palette.length -1;
            }
        }
        return palette[index]
    }

    let firstLetter = getFirstLetter(name);
    //获取字母在字母表中的索引
    let index = letterToIndex(firstLetter);
    //获取对应索引的颜色
    let color = getColorByIndex(palette, index);

    return (
        <div style={{ 
                width: '65px',
                height: '65px',
                backgroundColor: color,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '30px',
                color: 'white',
                fontWeight: 'bold',
            }}
        >
            {firstLetter && firstLetter.toUpperCase()}
        </div>
    )

}