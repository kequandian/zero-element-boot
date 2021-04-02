import React from 'react';
// import layout from '@/plugins/TodoList/designLayout'
require('./index.less')
import { AutoComponent, AutoLayout} from '@/components';
import layout from './layout'

export default function TodoItem(props){
    
    console.log(props)

    const { onToDoItemClick } = props;
    
    const config={
        layout,
        ...props
    }
    return (
            <AutoComponent onItemClick={onToDoItemClick}  {...config} />
    )
}