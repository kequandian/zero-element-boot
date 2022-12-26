import React from 'react';

import useTokenRequest from '@/components/hooks/useTokenRequest';
import { HCenter } from '@/components/cart';
import RssRender from './index'

export default function (props) {

    const { } = props;

    //25, 6， 76, 83， 32
    let api = '/api/u/rss/master/32';

    const rsp = useTokenRequest({ api });

    const data = rsp && rsp[0] || ""
    
    // console.log('data == ', data)

    return (
        data ? (
            <HCenter>
                <RssRender data={data.content} />
            </HCenter>
        ):<></>
    )
}