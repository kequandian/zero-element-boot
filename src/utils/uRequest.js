import { useRequest } from 'ahooks';

module.exports = function requestOfApi(url, data = {}, queryData) {

    const { method = 'get', token} = queryData;


    const response =  useRequest({
        url: url,
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      
    console.log(response)

    return false

}