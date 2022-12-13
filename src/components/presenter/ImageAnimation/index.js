import React from 'react';

require('./index.less');

export default function (props) {
    //
    const { imgUrl } = props;

    return <div className="image-animation">
        <img src={imgUrl} alt="Image" />
    </div>

}