import React from 'react';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'
import NamedCart from 'zero-element-boot/lib/components/NamedCart'
import { Flex, Text, Center } from '@chakra-ui/react'
import TitledContainer from 'zero-element-boot/lib/components/container/TitledContainer'

import OverlaySelector  from 'zero-element-boot/lib/components/OverlaySelector'

// import Default  from '@/components/indicator/CircularCheckboxIndicator'
// import Selected  from '@/components/indicator/CircularCheckboxIndicator/Selected'
// import ShadowIndicator from '@/components/indicator/ShadowIndicator';

import Default  from '../../components/indicator/CircularCheckboxIndicator'
import Selected  from '../../components/indicator/CircularCheckboxIndicator/Selected'
import ShadowIndicator from '../../components/indicator/ShadowIndicator';


/**
 * 
 * @returns 
 */


export default function index(props) {

    const { cart } = props

    const { cname } = cart

    return (

        <Flex>
            <Cart margin='20px' padding='0' linewidth='0'>
                <OverlaySelector defaultIndicator={Default} 
                                hoverIndicator={ShadowIndicator} hoverIndicatorProps={{ borderRadius : '4px'}}
                                selectedIndicator={Selected}  selected >
                    <Cart  margin='20px' linewidth='0'> 
                        <TitledContainer title={cname}  style={{textIndent:'1em',margin:'0'}} >
                            <TitledContainer title={cart.xname}  style={{textIndent:'1em',margin:'0',fontWeight:'bold'}} >
                                <NamedCart  cart={cart} >
                                    <ItemPlaceholder/>
                                </NamedCart>
                            </TitledContainer>
                        </TitledContainer>
                     </Cart> 
                </OverlaySelector>
           </Cart>
         </Flex>

    )
}


