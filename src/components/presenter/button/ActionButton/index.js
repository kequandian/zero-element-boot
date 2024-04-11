import React from 'react';
import { Button } from '@chakra-ui/react';

export default function NavButton(props){

    const { props: otherProps, onActionCompleted, ...rest } = props;

    const { content } = otherProps;

    const btnClick = () => {
        if(onActionCompleted){
            onActionCompleted(otherProps)
        }
    }

    return (
        <Button onClick={btnClick}>
            {content}
        </Button>
    )
}