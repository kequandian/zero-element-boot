import { isEmpty } from 'lodash';
import React from 'react'

const Foo = () => <div>foo</div>;

class Bar extends React.Component {
    render() {
       return (
          <div>bar</div>
       )
    }
}

const Gone = () => 0

export default function IsValidElementTest(props) {

    const sep={}
    console.log('sep?=', sep)

    if(sep.name){
        console.log('sep...')
    }

    const content = 'string'

    console.log('<Foo/>:', React.isValidElement(<Foo />));
    console.log('Bar:', React.isValidElement(Bar));
    console.log('<Ba/>:', React.isValidElement(<Bar />));
    console.log('string:', React.isValidElement(content));
    console.log('Gone:', React.isValidElement(Gone));
    console.log('<Gone/>:', React.isValidElement(<Gone/>));

    return <Bar/>
}



