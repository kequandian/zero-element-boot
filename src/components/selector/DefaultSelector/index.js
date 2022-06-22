import React from 'react';
import OverlaySelector from '@/components/OverlaySelector'
import CircularCheckboxIndicatorDefault from '@/components/indicator/CircularCheckboxIndicator'
import CircularCheckboxIndicatorSelected from '@/components/indicator/CircularCheckboxIndicator/Selected'
import Hover from '@/components/indicator/CircularCheckboxIndicator/Hover'
import ShadowIndicator from '@/components/indicator/ShadowIndicator';
import Cart from '@/components/cart/Cart';
import ItemPlaceholder from '@/components/presenter/ItemPlaceholder'


export default function index(props) {
    return (

        <Cart margin='10px' padding='0' linewidth='0'>
            <OverlaySelector defaultIndicator={CircularCheckboxIndicatorDefault}
                hoverIndicator={Hover}
                selectedIndicator={CircularCheckboxIndicatorSelected} selected >
                <Cart margin='0px' padding='0' linewidth='1px' shadow='0 2px 8px rgba(0, 0, 0, 0.15)'>
                    <ItemPlaceholder bg='' />
                </Cart>
            </OverlaySelector>
        </Cart>


    )
}