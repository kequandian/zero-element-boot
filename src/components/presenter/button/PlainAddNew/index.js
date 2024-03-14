import React from 'react';

require('./index.less');

/**
 * 
 * 
 */

export default function PlainAddNew(props) {

    const { onAddNew } = props;
    return (
        <div className='plainAddNewContainer' onClick={onAddNew} >
            <div className='plainAddNewBtn'>
            </div>
        </div>
    )
}