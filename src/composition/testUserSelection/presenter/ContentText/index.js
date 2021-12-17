import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

import Title from '../Title';
import Subtitle from '../Subtitle'

/**
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @returns
 */

 
export default function ContentText(props){
    const allComponents={
        Title,
        Subtitle
    }
    const config={
        layout:{
            xname:'Flexbox',
            props:{
                align:"column"
            },
            children:[
                {
                    presenter:"Title",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                title:"title"
                            }
                        }
                    }
                },
                {
                    presenter:"Subtitle",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                description:"content"
                            }
                        }
                    }
                }
            ]
        },
        ...props,
    }
    return (
        <div style={{padding: '0 5px 0 5px'}}>
            <AutoComponent {...config} allComponents={allComponents}/>
        </div>
    )
}


