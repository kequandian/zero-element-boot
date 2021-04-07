const {
  useEffect,
  useState
} = require('react');

const promiseAjax = require("../utils/request");

module.exports = function useTokenRequest(apiUrl, requestData = {}, accountToken = '') {
  const [data, setRespData] = useState([]);
  const [postData, setPostData] = useState('');
  useEffect(() => {
    const reqData = requestData;
    const options = {
      token: accountToken
    };

    if (postData) {
      reqData = postData;
      options.method = 'POST';
    }

    promiseAjax(apiUrl, reqData, options).then(responseData => {
      if (responseData && responseData.code === 200) {
        setRespData(responseData.data);
      }
    });
  }, [postData]);

  function setData(data) {
    setPostData(data);
  }

  return [data, setData];
};