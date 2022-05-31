import React from 'react';

import { NamedCart } from '@/components';
import RightIconIndicatorDefault from '@/components/indicator/RightIconIndicatorDefault';
import RightIconIndicatorHover from '@/components/indicator/RightIconIndicatorHover';
import RightIconIndicatorSelected from '@/components/indicator/RightIconIndicatorSelected';

export default function index(props) {

    return (
        <>
            <NamedCart xname="Cart" props={{  margin: "10px", padding: '0', linewidth: '0' }}>
                <RightIconIndicatorDefault>123</RightIconIndicatorDefault>
            </NamedCart>
            <div style={{ marginTop: "20px" }}></div>
            <NamedCart xname="Cart" props={{ margin: "10px", padding: '0', linewidth: '0' }}>
                <RightIconIndicatorHover>123</RightIconIndicatorHover>
            </NamedCart>
            <div style={{ marginTop: "20px" }}></div>
            <NamedCart xname="Cart" props={{ margin: "10px", padding: '0', linewidth: '0' }}>
                <RightIconIndicatorSelected>123</RightIconIndicatorSelected>
            </NamedCart>
        </>
    )
}