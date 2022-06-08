import React from 'react';
import Cart from '@/components/cart/Cart';
import ItemPlaceholder from '@/components/presenter/ItemPlaceholder'
import NamedCart from '@/components/NamedCart'
import { Flex, Text, Center } from '@chakra-ui/react'
import TitledContainer from '@/components/container/TitledContainer'

import OverlaySelector  from '@/components/OverlaySelector'

// import Default  from '@/components/indicator/CircularCheckboxIndicator'
// import Selected  from '@/components/indicator/CircularCheckboxIndicator/Selected'
// import ShadowIndicator from '@/components/indicator/ShadowIndicator';

import Default  from '../../components/indicator/CircularCheckboxIndicator'
import Selected  from '../../components/indicator/CircularCheckboxIndicator/Selected'
import ShadowIndicator from './components/ShadowIndicator';


/**
 * 
 * @returns 
 */


export default function index(props) {

    const { cart } = props

    const { cname } = cart

    return (

        // <Flex>
            /* <Cart margin='20px' padding='0' linewidth='0'> */
                <OverlaySelector defaultIndicator={Default} 
                                hoverIndicator={ShadowIndicator} hoverIndicatorProps={{ borderRadius : '4px'}}
                                selectedIndicator={Selected}  >
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
        //    </Cart>
        //  </Flex>

    )
}


