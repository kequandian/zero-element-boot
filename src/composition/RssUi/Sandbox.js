import React from 'react';

import useTokenRequest from '@/components/hooks/useTokenRequest';

import RssUi from './index'

export default function (props) {

    const { } = props;

    let api = '/api/u/rss/master/25';

    const rsp = useTokenRequest({ api });

    const data = rsp && (Array.isArray(rsp[0]) && rsp[0] || ( rsp[0].records && rsp[0].records.length > 0 && rsp[0].records[0])) || []

    const rssComponentList = data && data.rssComponentList && data.rssComponentList.length > 0 && data.rssComponentList || []

    console.log('rssComponentList == ', rssComponentList)

    return (
        rssComponentList && rssComponentList.length > 0 ? (
            <RssUi data={rssComponentList} />
        ):<></>
    )
}