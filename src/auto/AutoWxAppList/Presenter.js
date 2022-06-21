import React from 'react';
import CssCart from '@/components/css/CssCart';
import TitledContainer from '@/components/container/TitledContainer'
import Cart from '@/components/cart/Cart'
import pagesLog from '@/assets/page.svg';
import { Text, Flex,Box } from '@chakra-ui/react'
import NamedCart from '@/components/NamedCart'
import Flexbox from '@/components/layout/Flexbox'
import StyleData from './index.less'


export default function index(props) {
    const { name, notes, id, pageNum, logo } = props
    console.log(props, '==props');
   
   const styles = {
        position: 'relative',
        margin:'auto 0 auto auto',
        }

    return (
        <>
    <NamedCart cart ={ { xname:'Cart', props:{margin:'0',padding:'4px', linewidth:'1px',lineColor:'#e9eef4' } }}
                        defaultIndicator='Cart' defaultIndicatorProps={{linewidth:'0', padding:'0',margin:'0'}}
                        indicator='ShadowIndicator'  hoverIndicatorProps={{linewidth:'0' ,padding:'0',margin:'0',borderRadius:'4px', boxShadow: '0 0px 8px rgba(0, 0, 0, 0.15)'}}
    >

            <CssCart linewidth='0' width='250px' backgroundColor='#ffffff'  >

                <>
                    <Flex>
                        <div style={{ margin:'4px',width: '80px', height: '80px', borderRadius: '8px', backgroundImage: `url(${logo})`, backgroundSize: '100% 100%' }}>
                        </div>
                        <Box w='190px' p={2}>
                      <Flexbox>
                            <div>
                                <div style={{fontWeight:'bold',fontSize:'20px'}}  >{name}</div>
                                <Text fontSize='xs' color='#899095' lineHeight='16px'>{notes}</Text>
                            </div>

                            <Flexbox direction= 'row'>
                                {/* <img src={pagesLog} width= '12px' height='12px' /> */}
                                <div style={styles} className={ StyleData.pages_log}>
                                     <img src={pagesLog} />
                                      <div style={{color:'#bfbfbf', fontSize:'6px',margin:'0 0 0 4px'}}>{pageNum}</div>
                                </div>
                     
                            </Flexbox>
                            </Flexbox>
                        </Box>
                    </Flex>



                </>

            </CssCart>
     </NamedCart>
        </>

    )

}