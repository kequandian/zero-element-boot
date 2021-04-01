import React from 'react';
// import layout from '@/plugins/TodoList/designLayout'
require('./index.less')
import ImageAnimation from '@/pages/PresenterTestDemo/components/presenter/item/ItemAvator'
import ContentText from '@/pages/PresenterTestDemo/plugins/TodoList/TodoItem/Content_text'
import ContentFinish from '@/pages/PresenterTestDemo/components/presenter/item/ItemIconAction'
import { AutoComponent, AutoLayout} from '@/components';
import layout from './layout'

const CartSet = require('@/components/cart');

export default function TodoItem(props){
    
    // console.log(props)

    const { onToDoItemClick } = props;
    
    const allComponents={
        ImageAnimation,
        ContentText,
        ContentFinish,
    };


    const config={
        layout,
        ...props
    }
    return (
            <AutoComponent onItemClick={onToDoItemClick}  {...config} cartSet={CartSet} allComponents={allComponents}/>
    )
}