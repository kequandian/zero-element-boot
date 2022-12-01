import React from 'react';
import { Flex } from '@chakra-ui/react'
// import Cart from '@/components/cart/Cart';
import CssCart from '@/components/cart/CssCart';


export default function Index(props) {

    const { children } = props;

    // console.log('download props = ', props)

    return (
        <div style={{width:'100%'}}>
            <Flex>  
                <div  style={{width:'100%'}}>
                    {
                        React.Children.map(children, child => (
                            child
                        ))
                    }
                    </div>
                <div>
                    <CssCart width='20px' height='100%' padding='4px' margin='auto 6px '>
                        <svg t="1669881466959" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2339" width="20" height="20">
                            <path d="M505.7 661c3.2 4.1 9.4 4.1 12.6 0l112-141.7c4.1-5.2 0.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z" p-id="2340"></path><path d="M878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" p-id="2341"></path>
                        </svg>
                    </CssCart>
                </div>
                
            </Flex>
        </div>
    )
}
