import React from 'react'

export default function Viewport(props){
    const {
        children,
        width="100vw", //设定宽度, 100% width
        height="100vh", //设定高度, 100 height
        ...otherStyle
    }=props 
    
    let centerStyles = { //居中样式
        display:"flex",
        "alignItems":"center",
        "justifyContent":"center",
        "width":width,
        "height":height,
        "margin":0,
        "padding":0,
        ...otherStyle
    }

    return <div style={centerStyles}>
        {Array.isArray(children) ? children.map((item, i)=>{
            return item
        }) : children}
    </div>
}
