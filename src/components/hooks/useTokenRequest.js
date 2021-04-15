const { useEffect, useState } = require('react');
const promiseAjax = require('@/components/utils/request');

module.exports = function useTokenRequest(apiUrl, requestData = {}, accountToken = '') {

    const [data, setRespData] = useState([]);

    const [postData, setPostData] = useState('');

    useEffect(() => {

        const reqData = requestData;

        const options = {
            token: accountToken,
        }

        if (postData) {
            reqData = postData;
            options.method = 'POST';
        }

        if (apiUrl) {
            promiseAjax(apiUrl, reqData, options)
                .then(responseData => {
                    if (responseData && responseData.code === 200) {
                        setRespData(responseData.data)
                    }
                })
        }else{
            console.warn('API为空, 访问被拒绝');
        }


    }, [postData]);

    function setData(data) {
        setPostData(data)
    }

    return [data, setData];
}