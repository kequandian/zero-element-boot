import React from 'react';

import useTokenRequest from '@/components/hooks/useTokenRequest';

import RssRender from './index'

export default function (props) {

    const { } = props;

    let api = '/api/u/rss/master/25';

    const rsp = useTokenRequest({ api });

    const data = rsp && (Array.isArray(rsp[0]) && rsp[0] || ( rsp[0].records && rsp[0].records.length > 0 && rsp[0].records)) || []

    return (
        data && Array.isArray(data) && data.length > 0 ? (
            data.map((item, index)=> (
                <RssRender data={item.title} key={index} />
            ))
        ):<></>
    )
}