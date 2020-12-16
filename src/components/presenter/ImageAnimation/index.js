import React from 'react';

require('./index.less');

export default function (props) {
    //
    const { imgUrl } = props;

    return <div className="image-scaling">
        <img src={imgUrl} alt="Image" />
    </div>

}