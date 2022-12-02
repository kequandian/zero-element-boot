import React from 'react';
import { Flex } from '@chakra-ui/react'
// import Cart from '@/components/cart/Cart';
import CssCart from '@/components/cart/CssCart';


export default function Index(props) {

    const { children, onItemClick, indicatorData } = props;
    
    function itemClick(){
        if(onItemClick){
            onItemClick(indicatorData)
        }
    }

    return (
        <div style={{width:'100%'}} onClick={()=>itemClick()}>
            <Flex>  
                <div  style={{width:'100%'}}>
                    {
                        React.Children.map(children, child => (
                            child
                        ))
                    }
                </div>
            </Flex>
        </div>
    )
}
