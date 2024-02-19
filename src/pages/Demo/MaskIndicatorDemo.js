import React from 'react';
import MaskIndicator from "@/components/indicator/MaskIndicator";
import { ItemPlaceholder } from '@/components/presenter';

export default function Index(props) {

    const maskProps = {
        color:'#909090', 
        // opacity:'50%',
    }

    return (
        <MaskIndicator {...maskProps} >
            <ItemPlaceholder/>
        </MaskIndicator>
       
    )
}
