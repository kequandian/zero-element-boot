import React from 'react';

require('./index.less');

/**
 * 
 * @param {color} color 
 * @returns 
 */
export default function Clear({color='#FFB6C1'}) {

    return (
        <section className="color" id="clear" >
            <h2 className="name">Clear</h2>
            <ul className="details">
                <li>{color}</li>
                <li>RGB(255,182,193)</li>
            </ul>
        </section>
    )
}