import React from 'react';

import checkXOn from '@/assets/check_on.svg';
import StyleDate from '../index.less';

import { Flex } from '@chakra-ui/react'
import Cart from '@/components/cart/Cart';


export default function Sekected(props) {

    const { children, ...defaultSelectedStyles } = props;

    const styles = {
        position: 'relative',
        margin: 'auto 10px auto 30px',
        ...defaultSelectedStyles
    }


    return (
        <Flex>
            <Cart  padding='10px' margin='0' lineColor='#1e6fff'>
                {
                    React.Children.map(children, child => (
                        child
                    ))
                }
            </Cart>

            <div style={styles} className={StyleDate.right_icon_on}>
                <img src={checkXOn} />
            </div>
        </Flex>
    )
}
