import React, { useState, useEffect } from 'react';
import AutoComponentSet from './index';
import CssCart from '@/components/cart/CssCart';



export default function (props) {


    // let endpoint='http://app1.console.smallsaas.cn:8001/openapi'

    const onHandleItemClick = (item) => {
        console.log(item, ' ======== item')
    }
    
    return (
             <CssCart padding='20px' linewidth='0' width='420px'height=''margin='10px'>
                 <AutoComponentSet   onItemClick={onHandleItemClick} />
            </CssCart>
    )
}