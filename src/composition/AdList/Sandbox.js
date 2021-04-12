import React, { useState, useEffect } from 'react';

import AdList from './index';

const promiseAjax = require('@/components/utils/request');

import { APIContainer } from '@/components';

export default function (props) {

    const api = '/api/adList';

    function onItemClickHandle (data) {
        // console.log('data = ', data)
    }

    //TODO, handle onClick event

    return (
        <APIContainer API={api} extend={false}>
            <AdList {...props} />
        </APIContainer>
    )
}