import React from 'react';

export default function FootContent(props){
    const {time,adType}=props;
    return (
        <div className="ExampleTime">
            <div className="theType">{adType}</div>
            <div className="theTime">{time}</div>
        </div>
    )
}