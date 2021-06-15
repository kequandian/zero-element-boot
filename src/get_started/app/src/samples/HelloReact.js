// #### 如何写一个React组件
import React from 'react'

// Manner #1

// export default function Hello(){
//     return <div> Hello React! </div>
// }

// Manner #2

// function Hello(){
//     return <div> Hello React! </div>
// }

// export default Hello;


// Manner #3

const Hello = () => {
    return <div> Hello React! </div>
}

export default Hello;
