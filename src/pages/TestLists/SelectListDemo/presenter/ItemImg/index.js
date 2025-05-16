import React from 'react';

require('./index.less');

/**
 * @param {String} url image src url
 */
export default function (props) {
    const { url } = props;

    return (url?
        <img src={url} className="item-img"/>:
        <img src='' className={`item-img default`} />
    );
}
