import React from 'react';

export default function Comment(props){
        console.log(props);
    function Avatar(props){
        return (
            <img className="Avatar"
                src={props.user.avatarUrl}
                alt={props.user.name}
            />
        );
    }

    function UserInfo(props){
        return(
            <div className="UserInfo">
                <Avatar user={props.user}/>
                <div className="UserInfo-name">
                    {props.user.name}
                </div>
                <div className="Comment-text-name">
                    {props.user.text_name}
                </div>
            </div>
        );
    }
    return (
        <div className="Comment">
            <div className="UserInfo">
                {/* <img
                    className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                /> */}
                {/* <Avatar user={props.author}/>
                <div className="UserInfo-name">
                    {props.author.name}
                </div> */}
                <UserInfo user={props.author}/>
            </div>
            <div className="Comment-text">{props.text}</div>
        </div>
    );
}