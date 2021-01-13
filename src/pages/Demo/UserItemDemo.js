import React from 'react';
import UserItem from '@/composition/UserItem';
import Cart  from '@/components/cart/Cart'

export default function Demo(props) {

    const config= {
        "avatar": "https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png",
        "title": "admin"
    }

    return<Cart>
        <UserItem  {...config} />
    </Cart>
}
