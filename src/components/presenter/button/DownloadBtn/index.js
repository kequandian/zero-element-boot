import React from 'react';
import { LightingCart } from '@/components/cart'

/**
 * 
 * 
 */

export default function DownloadBtn(props) {

    const { onItemDownloaded, action, indicatorData  } = props;

    const DownloadIcon = ({w = 25,h = 25}) => {
        return (
            <svg t="1712633781386" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3731" width={w} height={h}><path d="M135.377782 340.114235l277.111319 0L412.4891 65.657372l207.41905 0 0 274.457886 272.656867 0L513.970376 748.358149 135.377782 340.114235 135.377782 340.114235zM892.268258 750.773152l0 66.952878L136.666124 817.72603l0-66.952878L65.878918 750.773152l0 204.12912L136.666124 954.902272l755.603157 0 65.849754 0 0-204.12912L892.268258 750.773152 892.268258 750.773152zM892.268258 750.773152" fill="#bfbfbf" p-id="3732"></path></svg>
        )
    }

    const onIconClick = () => {
        console.log('onIconClick')
        if(onItemDownloaded){
            onItemDownloaded()
        }
    }

    return (
        <LightingCart>
            <div onClick={onIconClick}>
                <DownloadIcon/>
            </div>
        </LightingCart>
    )
}