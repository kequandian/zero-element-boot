import React, { useState, useEffect,useBoolean } from 'react';
import Cart from '@/components/cart/Cart';
import { Radio, RadioGroup, Button,Flex,Stack,ChakraProvider } from '@chakra-ui/react'
import CssCart from '@/components/css/CssCart';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'


/**
 * 
 * @param {deviceModel} deviceModel 设备型号
 * @param {title} title 标题
 * 
 *  deviceModel={ iPhoneSE iPhoneXR iPhone12Pro Pixel5 SamsungGalaxyS8+ iPadAir iPadMini} 
 * 
 * @returns 
 */


const map = {
  "iPhoneSE": { width: '375px', height:'667px' },
  "iPhoneXR": { width: '414px', height:'896px' },
  "iPhone12Pro": { width: '390px', height:'844px' },
  "Pixel5": { width: '393px', height:'851px' },
  "SamsungGalaxyS8+": { width: '360px', height:'740px' },
  "iPadAir": { width: '820px', height:'1180px' },
  "iPadMini": { width: '768px', height:'1024px' },
}

let stylePropsData={
    background: '#f0f0f0',
    padding:' 0',
    margin:'20px', 
    borderRadius:'10px' ,
    boxShadow :' 0 2px 6px rgba(0, 0, 0, 0.1)',
    width: '375px', height:'667px'
}


export default  function Index(props) {

  const { children,title='' ,deviceModel='iPhoneSE'} = props;
  const [modelName, setModelName] = useState(deviceModel)
  const [styleProps, setStyleProps] = useState(stylePropsData)



  useEffect(_=>{

    if(modelName){
      stylePropsData = {
        ...stylePropsData,
        ...map[modelName]
      }
      setStyleProps(stylePropsData)
    }
    
  }, [modelName])

function modelNameChange(value){
  console.log(value,'==value');
  
  setModelName(value)
}




  return (
    <div style={styleProps}>
        <Cart  fill='#ffffff' linewidth='0' corner ='10px 10px 0 0' padding='auto auto 60px auto' margin='0' >
            <Flex justify='end'>
              <ChakraProvider>
                    <Popover>
                        <PopoverTrigger>
                            <div>
                                <Button size='sm'margin='16px'  borderColor='transparent' >· · ·</Button>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent margin='4px 40px'>
                            <PopoverBody>
                            <PopoverHeader fontWeight='semibold'>deviceModel:</PopoverHeader>
                                <RadioGroup onChange={(value) => modelNameChange(value)}>
                                  <Stack>
                                    <Radio value='iPhoneSE'>iPhoneSE</Radio>
                                    <Radio value='iPhoneXR'>iPhoneXR</Radio>
                                    <Radio value='iPhone12Pro'>iPhone12Pro</Radio>
                                    <Radio value='Pixel5'>Pixel5</Radio>
                                    <Radio value='SamsungGalaxyS8'>SamsungGalaxyS8</Radio>
                                    <Radio value='iPadAir'>iPadAir</Radio>
                                    <Radio value='iPadMini'>iPadMini</Radio>
                                  </Stack>
                                </RadioGroup>
                            </PopoverBody>
                        </PopoverContent>
                      </Popover>
                </ChakraProvider>
                <div style={ { margin: 'auto', padding:'auto', color:'',fontSize:'24px',fontWeight:'bold' }}>
                       {title}
                </div>
                <CssCart borderWidth='1px ' borderStyle ='solid' borderColor ='#e1e1e1' borderRadius='62px' padding='0'margin='10px' width='120px'height='40px' >
                    <svg  width='' height='38px'>
                        <circle cx="20%" cy="50%" r="1" stroke="black" stroke-width="3" fill="" />
                        <circle cx="29%" cy="50%" r="2.8" stroke="black" stroke-width="3" fill="" />
                        <circle cx="38%" cy="50%" r="1" stroke="black" stroke-width="3" fill="" />
                        <rect width="1" height="26px" x="50%" y="14%" fill='#e2e2e2'></rect>
                        <circle cx="80%" cy="50%" r="10" stroke="black" stroke-width="3" fill="transparent" />
                        <circle cx="80%" cy="50%" r="3.5" stroke="black" stroke-width="2" fill="" />
                    </svg>
                </CssCart>
            </Flex>
       </Cart>
      {
        React.Children.map(children, child =>(
          child
        ))
      }
  </div>
  )
}