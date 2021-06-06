import React from 'react';
import Cart  from '@/components/cart/Cart'
import ImageAnimation from '@/presenter/demo/ImageAnimation';

export default function Demo(props) {

    const config= {
        "imgUrl": "https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png",
    }

    return<Cart>
        <ImageAnimation  {...config} />
    </Cart>
}
