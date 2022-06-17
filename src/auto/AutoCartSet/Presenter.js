import React from 'react';
import Cart from '@/components/cart/Cart';
import ItemPlaceholder from '@/components/presenter/ItemPlaceholder'
import NamedCart from '@/components/NamedCart'
import TitledContainer from '@/components/container/TitledContainer'

import OverlaySelector  from '@/components/OverlaySelector'

import Default  from '@/components/indicator/CircularCheckboxIndicator'
import Selected  from '@/components/indicator/CircularCheckboxIndicator/Selected'
import ShadowIndicator from '@/components/indicator/ShadowIndicator';


/**
 * 
 * @returns 
 */


export default function index(props) {

    const { __cart, isSelected } = props
    console.log(isSelected,'==');
    

    const { cname } = __cart

    return (

        // <Flex>
            <Cart margin='20px' padding='0' linewidth='0'> 
                <OverlaySelector defaultIndicator={Default} 
                                hoverIndicator={ShadowIndicator} hoverIndicatorProps={{ borderRadius : '4px'}}
                                selectedIndicator={Selected}  isSelected={isSelected} >
                    <Cart  margin='20px' linewidth='0'> 
                        <TitledContainer title={cname}  style={{textIndent:'1em',margin:'0'}} >
                            <TitledContainer title={__cart.xname}  style={{textIndent:'1em',margin:'0',fontWeight:'bold'}} >
                                <NamedCart  cart={__cart} >
                                    <ItemPlaceholder bg='transparent'/>
                                </NamedCart>
                            </TitledContainer>
                        </TitledContainer>
                    </Cart> 
                </OverlaySelector>
           </Cart>
        //  </Flex>

    )
}


