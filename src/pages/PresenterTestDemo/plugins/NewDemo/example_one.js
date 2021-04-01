import React, { useState, useEffect } from 'react';
import Comment from "./Comment"
const promiseAjax = require('@/components/utils/request');

export default function Index(props) {

    const api = '/api/adListaaa';

    // const [data, setData] = useState([]);

    // function handleQuery(API, queryData) {
    //     console.log("API ", API);
    //     return promiseAjax(API, queryData).then(response => {
    //         console.log("response ", response);
    //         if (response && response.code === 200) {
    //             setData(response.data);
    //             console.log("response.data ", response.data);
    //         }
    //     });
    // }

    // useEffect(_ => {
    //     handleQuery(api);
    // }, []);

    const data = {
        text:'I hope you enjoy learning React!',
        author:{
            text_name:'one',
            name:'Hello Kitty',
            avatarUrl:'https://placekitten.com/g/64/64',
        }
      }
    
    return (
        <Comment  {...data} 
        />
    )
}