import React from 'react';

/**
 * 响应点击事件,直接响应传过来的所有参数
 * @param {Object} props 
 * @returns 
 */
export default function ClickIndicator(props) {

    const { children, onItemClick, indicatorData, ...rest } = props;

    function itemClick(){
        if(onItemClick){
            onItemClick(indicatorData)
        }
    }

    return (
        <div style={{width:'100%'}} onClick={()=>itemClick()}>
            {
                React.Children.map(children, child => (
                    child
                ))
            }
        </div>
    )
}
