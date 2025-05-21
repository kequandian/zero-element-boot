import React from 'react';
import { Box, Flex } from '@chakra-ui/react'
import Rectangle from '@/components/presenter/shape/Rectangle';
import { Wrap } from '@/components/layout'

/**
 * 
 * @param {color} fill 圆、矩形背景色
 * @param {color} bg 背景色
 * @param {数字} size 圆和矩形的尺寸
 * @param {链接} url 图像链接
 * 
 * 
 */

export default function ItemPlaceholder(props) {

   const { fill = '#f1f4f4', bg = '', size = 150, url } = props

   // url='https://inews.gtimg.com/newsapp_bt/0/14982779315/1000'
   // console.log(size, '===size');

   return (
      <Wrap>
         <div style={{ margin: `${0.04 * size}px`, width: `${0.4 * size}px`, height: `${0.4 * size}px`, backgroundColor: `${fill}`, backgroundImage: `url(${url})`, borderRadius: '50%', backgroundSize: '100% 100%' }}></div>
         <Box width={`${size}px`} height={`${0.28 * size}px`}   >
            <Rectangle margin={`${0.05 * size}px`} width={`${0.85 * size}px`} height={`${0.1 * size}px`} fill={fill} />
            <Rectangle margin={`${0.05 * size}px`} width={`${0.4 * size}px`} height={`${0.08 * size}px`} fill={fill} />
            <Rectangle margin={`${0.05 * size}px`} width={`${0.4 * size}px`} height={`${0.08 * size}px`} fill={fill} />
         </Box>
      </Wrap>
   )
}