import React from 'react';
import checkOff from '@/assets/check_off.svg';
import checkOn from '@/assets/pinkSelected.svg';

require('./index.less');

/**
 */

export default function Index(props) {

    const { children, defaultStyles = {}, state = 'unselect' } = props;

    const color = (state == "selected") ? "#d84465" : "#333333"

    const styles = {
        position: 'relative',
        margin: '1px 6px 1px 6px',
        padding: '5px',
        fontWeight: "bold",
        color: `${color}`,
        backgroundColor: 'transparent',
        borderRadius: '8px',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        boxShadow: '0 0px 6px rgba(255, 255, 255, 1)',
        ...defaultStyles
    }

    console.log('state =',state)

    return (
        <div style={styles}>
            <div className={'right_icon_off'} >
                {state == "selected" ?
                    <img src={checkOn} /> : <></>
                }
            </div>
            {
                React.Children.map(children, child => {
                    return child
                })
            }
        </div>

    )
}