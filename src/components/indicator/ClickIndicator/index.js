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
 * @param { object } indicatorData 为上述 binding 处理的参数
 * 
 */

export default function Index(props) {

    const { children, onItemClick, indicatorData, ...rest } = props;

    console.log('12312412')
    
    function itemClick(){
        console.log('indicatorData = ', onItemClick)
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
