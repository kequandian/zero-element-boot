import React from 'react';
import checkOff from '@/assets/check_off.svg';
import checkXOn from '@/assets/check_on.svg';
import StyleDate from './index.less';
import { Flex } from '@chakra-ui/react'
import Cart from '@/components/cart/Cart';

/**
 *
 *  
 * @param {select} ѡ��״̬
 * 
 * 
 * @returns 
 */

export default function Index(props) {

    const { children, state ='unselected', ...defaultSelectedStyles } = props;

    const styles = {
        position: 'relative',
        margin: 'auto 10px auto 30px',
        padding: '0',
        ...defaultSelectedStyles
    }

    const imgStyle =  (state == "selected") ? StyleDate.right_icon_on : StyleDate.right_icon_off
    const borderStyle =  (state == "selected")  ? '#1e6fff' : '#ffffff'

    return (
        <Flex>
            <Cart padding='10px' margin='0' lineColor={borderStyle} >
                {
                    React.Children.map(children, child => (
                        child
                    ))
                }
            </Cart>
            <div style={styles} className={imgStyle}>
                {
                    state == "selected" ?
                        <img src={checkXOn} />
                        :
                        <img src={checkOff} />
                }

            </div>
        </Flex >
    )
}
