import React from 'react';
import { Box, Flex } from '@chakra-ui/react'
import Rectangle from 'zero-element-boot/lib/components/presenter/Rectangle';
import Cart from 'zero-element-boot/lib/components/cart/Cart';

/**
 * 
 * @param {color} fill 圆、矩形背景色
 * @param {color} bg 背景色
 * @param {数字} size 圆和矩形的尺寸
 * 
 */

export default function ItemPlaceholder(props) {

   const { fill = '#e0e4e4', bg = '', size = 150 } = props

   console.log(size,'===size');
   
   return (
      <Cart fill={bg} paddin='0' linewidth='0' margin='0'>
         < Flex >
                  <Rectangle margin={`${ 0.042*size}px`} width={`${0.4*size}px`} height={`${0.4*size}px`} fill={fill} corner='50%' />

                  <Box width={`${size}px`}  height={`${ 0.28*size}px`}   >

                     <Rectangle margin={`${ 0.05*size}px`}  width={`${0.85*size}px`} height={`${ 0.1*size}px`} fill={fill} />

                     <Rectangle margin={`${ 0.05*size}px`} width={`${ 0.4*size}px`} height={`${ 0.08*size}px`} fill={fill} />

                     <Rectangle margin={`${ 0.05*size}px`} width={`${0.4*size}px`} height={`${ 0.08*size}px`} fill={fill} />

                  </Box>
         </Flex>
     </Cart>

   

   )
}