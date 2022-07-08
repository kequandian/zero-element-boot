import React from 'react';

require('./index.less');

export default function Pink(props) {

    return (
        <section className="color" id="pink">
            <h2 className="name">Pink</h2>
            <ul className="details">
                <li>#ffb6c1</li>
                <li>RGB(255,182,193)</li>
            </ul>
        </section>
    )
}