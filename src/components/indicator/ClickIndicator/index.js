import React from 'react';

/**
 * 使用例子
 * container：'',
   presenter -> children
   [{
        xname: 'JarItem',
        indicator:{
            xname:'ClickIndicator',
            binding: {
                "value":"value"
            }
        },
    }]
 * 
 * @param { {xname:'', binding:{}, props:{}} } indicator 为上述 binding 处理的参数
 * 
 */

export default function ClickIndicator(props) {

    const { children, onItemClick, indicator, ...rest } = props;

    function itemClick(){
        if(onItemClick){
            onItemClick(indicator)
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
