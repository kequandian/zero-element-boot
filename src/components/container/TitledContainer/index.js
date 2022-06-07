import React from 'react';

  
/**
 * 
 * @param {title} title 文字内容
 * @param {style} style 文字样式
 * 
 * 
 */
export default function TitledContainer(props) {
    const { children, title='', style }=props;


return React.Children.map(children,child=>{
  

    return (
        <div style={{ ...style}}
        >
        {title}
           {child}
        </div>
          )
        } )
}