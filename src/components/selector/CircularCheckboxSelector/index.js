import React from 'react';
import checkOff from '@/assets/check_off.svg';
import checkXOn from '@/assets/check_on.svg';
import StyleDate from './index.less';
import { Flex, Wrap } from '@chakra-ui/react'
// import {Wrap} from '@/components/layout'
import Cart from '@/components/cart/Cart';

/**
 * 所有selector都有selected属性，用于区分是否选中状态
 *  
 * @param {select} ѡ��״̬
 */

export default function Index(props) {

    const { children, selected, ...defaultSelectedStyles } = props;

    const styles = {
        position: 'relative',
        margin: 'auto 10px auto 30px',
        padding: '0',
        ...defaultSelectedStyles
    }

    const imgStyle =  selected ? StyleDate.right_icon_on : StyleDate.right_icon_off
    const borderStyle =  selected  ? '#1e6fff' : '#ffffff'

    return (
        <Wrap>
            <Cart padding='10px' margin='0' lineColor={borderStyle} >
                {
                    React.Children.map(children, child => (
                        child
                    ))
                }
            </Cart>
            <div style={styles} className={imgStyle}>
                {
                    selected ?
                        <img src={checkXOn} />
                        :
                        <img src={checkOff} />
                }

            </div>
        </Wrap >
    )
}
