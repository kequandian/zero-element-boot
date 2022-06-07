import React from 'react';

import checkOff from '@/assets/check_off.svg';

import { Flex } from '@chakra-ui/react'

require('./index.less');

import Circle from 'zero-element-boot/lib/components/shape/Circle';
import Cart from 'zero-element-boot/lib/components/cart/Cart';


export default function Index(props) {

const { children, ...defaultSelectedStyles} = props;

const styles = {
position: 'relative',
margin:'auto 0 auto auto',
...defaultSelectedStyles
}


return (
      <Flex>
          <div>
              {
              React.Children.map(children, child =>(
              child
              ))
              }
          </div>

          <div style={styles} className={ 'right_icon_off'}>
            <img src={checkOff} />
          </div>
      </Flex>
)
}
