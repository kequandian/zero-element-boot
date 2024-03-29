import React, { useState } from 'react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
} from '@chakra-ui/react';
require('./index.less')

/**
 * 使用例子
 * cart:{},
   indicator:{
    xname:'TipsIndicator',
    props:{
    },
    binding: {
      apiField:"title",
      apiField:"content",
    }
   },
   container:{}
 * 
 * @param { object } indicatorData 为上述 binding 处理的参数, apiField 为api字段
 * 
 */

export default function TipsIndicator(props) {

    const {
        children,
        indicatorData = { title: "", content:"" },
        ...rest
    } = props;


    return (
        <div className='tipsIndicatorContainer'>
            <Popover trigger='hover' placement='right'>
                <PopoverTrigger>
                    <div>
                        {
                            React.Children.map(children, child => (
                                child
                            ))
                        }
                    </div>
                </PopoverTrigger>
                <PopoverContent bg={'#F7F7FA'} maxWidth={220}>
                    <PopoverArrow />
                    {/* <PopoverCloseButton /> */}
                    <PopoverHeader fontWeight={'bold'} >{indicatorData.title || 'Title'}</PopoverHeader>
                    <PopoverBody>{indicatorData.content || "Content"}</PopoverBody>
                </PopoverContent>
            </Popover>
        </div>


    )
}
