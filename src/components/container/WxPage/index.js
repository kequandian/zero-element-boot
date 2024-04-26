import React, { useState, useEffect, useBoolean } from 'react';
import Cart from '@/components/cart/Cart';
import { Radio, RadioGroup, Button, Flex, Stack, ChakraProvider } from '@chakra-ui/react'
import CssCart from '@/components/cart/Cart';
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

require('./index.less')


/**
 * 
 * @param {deviceModel} deviceModel 设备型号
 * @param {title} title 标题
 * @param {device} device 设备 [wx,pc]
 * 
 *  deviceModel={ iPhoneSE iPhoneXR iPhone12Pro Pixel5 SamsungGalaxyS8+ iPadAir iPadMini} 
 * 
 * @returns 
 */


const map = {
  "iPhoneSE": { width: '375px', height: '667px' },
  "iPhoneXR": { width: '414px', height: '896px' },
  "iPhone12Pro": { width: '390px', height: '844px' },
  "Pixel5": { width: '393px', height: '851px' },
  "SamsungGalaxyS8+": { width: '360px', height: '740px' },
  "iPadAir": { width: '820px', height: '1180px' },
  "iPadMini": { width: '768px', height: '1024px' },
  "window": { width: '1024px', height: '720px' },
}

let stylePropsData = {
  // background: '#f0f0f0',
  background: '#ffffff',
  padding: ' 0',
  margin: '10px 20px',
  borderRadius: '10px',
  boxShadow: ' 0 2px 6px rgba(0, 0, 0, 0.1)',
  width: '375px', height: '667px',
  overflow: 'hidden',
  overflowY: 'auto'
}


export default function WxPage(props) {

  const { children, title = '',  deviceModel = 'iPhoneSE', device = 'wx', ...rest } = props;
  const [modelName, setModelName] = useState(deviceModel)
  const [styleProps, setStyleProps] = useState(stylePropsData)


  useEffect(_ => {

    if (modelName && device === 'wx') {
      stylePropsData = {
        ...stylePropsData,
        ...map[modelName]
      }
      setStyleProps(stylePropsData)
    } else if (device === 'pc') {
      stylePropsData = {
        ...stylePropsData,
        borderRadius: '6px',
        background: '#fff',
        ...map['window'],
        overflowX: 'auto',
      }
      setStyleProps(stylePropsData)
    }

  }, [modelName])

  function modelNameChange(value) {
    console.log(value, '==value');
    setModelName(value)
  }

  return (
    <div id="wx-page" style={styleProps}>
      {device === 'wx' ? (
        <Cart fill='#ffffff' linewidth='0' corner='10px 10px 0 0' padding='auto auto 60px auto' margin='0' >
          <Flex justify='end'>
            <Popover>
              <PopoverTrigger>
                <div>
                  <Button size='sm' margin='16px' borderColor='transparent' >· · ·</Button>
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
                      <Radio value='window'>window</Radio>
                    </Stack>
                  </RadioGroup>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <div style={{ margin: 'auto', padding: 'auto', color: '', fontSize: '24px', fontWeight: 'bold', }}>
              {title}
            </div>

            <CssCart borderWidth='1px ' borderStyle='solid' borderColor='#e1e1e1' borderRadius='62px' padding='0' margin='10px' width='120px' height='40px' >
              <svg width='100%' height='38px'>
                <circle cx="20%" cy="50%" r="1" stroke="black" strokeWidth="3" fill="" />
                <circle cx="29%" cy="50%" r="2.8" stroke="black" strokeWidth="3" fill="" />
                <circle cx="38%" cy="50%" r="1" stroke="black" strokeWidth="3" fill="" />
                <rect width="1" height="26px" x="50%" y="14%" fill='#e2e2e2'></rect>
                <circle cx="80%" cy="50%" r="10" stroke="black" strokeWidth="3" fill="transparent" />
                <circle cx="80%" cy="50%" r="3.5" stroke="black" strokeWidth="2" fill="" />
              </svg>
            </CssCart>

          </Flex>
        </Cart>
      ) : (
        device === 'pc' ? (
          <Cart fill='#9EADBA' linewidth='0' corner='6px 6px 0 0' padding='auto auto 60px auto' margin='0' >
            <Flex justify='start'>
              <Popover>
                <PopoverTrigger>
                  <div>
                    <svg width='100px' height='38px'>
                      <circle cx="20%" cy="50%" r="2" stroke="#8F9EAC" strokeWidth="3" fill="" />
                      <circle cx="29%" cy="50%" r="2" stroke="#8F9EAC" strokeWidth="3" fill="" />
                      <circle cx="38%" cy="50%" r="2" stroke="#8F9EAC" strokeWidth="3" fill="" />
                    </svg>
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
                        <Radio value='window'>window</Radio>
                      </Stack>
                    </RadioGroup>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              {/* <div style={{ fontSize: '24px', fontWeight: 'bold', display: 'flex', alignItems:'center' }}>
                {title}
              </div> */}
            </Flex>
          </Cart>
        ) : <></>
      )}
      <div style={{padding: '10px'}}>
        {
          React.Children.map(children, child => {
            return React.cloneElement(child, {
              ...rest
            })
          })
        }
      </div>
      
    </div>
  )
}