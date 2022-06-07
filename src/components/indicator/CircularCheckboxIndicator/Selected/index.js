import React from 'react';

import checkXOn from '@/assets/check_on.svg';

import { Flex } from '@chakra-ui/react'

require('../index.less');

import Circle from 'zero-element-boot/lib/components/shape/Circle';
import Cart from 'zero-element-boot/lib/components/cart/Cart';


export default function Sekected(props) {

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

          <div style={styles} className={ 'right_icon_on'}>
            <img src={checkXOn} />
          </div>
      </Flex>
)
}
