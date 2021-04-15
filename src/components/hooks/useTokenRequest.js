const { useEffect, useState } = require('react');
const promiseAjax = require('@/components/utils/request');

module.exports = function useTokenRequest({api, bindFiles, requestData = {}, accountToken = ''}) {
   
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

        if (api) {
            promiseAjax(api, reqData, options)
                .then(responseData => {
                    if (responseData && responseData.code === 200) {
                        let data = responseData.data;
                        
                        if(bindFiles){
                            if(Array.isArray(data)){
                                const newList = [];
                                data.map(item => {
                                    newList.push(doBind(bindFiles, item));
                                })
                                data = newList;
                            }else{
                                data = doBind(bindFiles, responseData.data);
                            }
                        }
                        setRespData(data)
                    }
                })
        }else{
            console.warn('API为空, 访问被拒绝');
        }


    }, [postData]);

    function setData(data) {
        setPostData(data)
    }

    function doBind(binding, data={}) {
        let bindingData = {}
        Object.keys(binding).forEach(key => {
          bindingData[binding[key]] = data[key];
        })
        return { ...bindingData };
      }

    return [data, setData];
}