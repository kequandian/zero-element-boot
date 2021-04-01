import React from 'react';
import Title from '@/pages/PresenterTestDemo/components/presenter/item/ItemTitle/Title';
import Text from '@/pages/PresenterTestDemo/components/presenter/item/ItemSubtitle/Text'
require('./index.less')
import {AutoComponent, AutoLayout } from '@/components';
// import layout from '@/plugins/TodoList/designLayout';

export default function ContentText(props){
    const allComponents={
        Title,
        Text,
    };
    const config={
        layout:{
            xname:'Flexbox',
            props:{
                align:"start",
                direction:"column",
                justidy:"center"
            },
            children:[
                {
                    presenter:"Title",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                title:"content"
                            }
                        }
                    }
                },
                {
                    presenter:"Text",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                text:"content"
                            }
                        }
                    }
                }
            ]

        },
        ...props,
    }
    
    return (
        <div className="Content_text">
            <AutoComponent {...config} allComponents={allComponents}/>
        </div>
    )
}


