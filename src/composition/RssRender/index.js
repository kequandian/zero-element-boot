import React, { useState } from 'react';
import { VStack  } from "@chakra-ui/react";
import _ from 'lodash'
import {getTypeContent} from '@/components/utils/tools'

require('./index.less')
import RssText from '@/components/presenter/rss/RssRender/RssText'
import RssSpace from '@/components/presenter/rss/RssRender/RssSpace'
import RssImage from '@/components/presenter/rss/RssRender/RssImage'
import RssTag from '@/components/presenter/rss/RssRender/RssTag'
import RssParagraph from '@/components/presenter/rss/RssRender/RssParagraph'

export default function Index(props) {

    const { data='' } = props;
    console.log('data == ', data.split('\n'))

    const dataList = data.indexOf('\n') !== -1 ? data.split('\n') : data

    return (
        <VStack alignItems='flex-start' padding='8px'>
            { dataList.map((item,index) => {

                if(!item.startsWith('<!>')){
                    const keyStr = item.substr(0, 1)
                    switch (keyStr) {
                        case '<':
                            return <RssText key={index} type={getTypeContent(item)} content={item} />
                        case '#':
                            return <RssText key={index} type={getTypeContent(item)} content={item} />
                        case '>':
                            if(item.startsWith('>>>')){
                                return <RssSpace key={index} data={item}/>
                            }
                            if(item.startsWith('> ')){
                                return <RssParagraph data={item} key={index}/>
                            }
                        case '[':
                            return <RssImage key={index} data={item}/>
                        case ';':
                            return <RssTag key={index} data={item}/>
                        default:
                            break;
                    }
                }else{
                }

            })}
        </VStack>
    )
}