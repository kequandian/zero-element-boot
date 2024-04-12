const {
  useEffect,
  useState
} = require('react');
const promiseAjax = require("../utils/request");
module.exports = function useTokenRequest({
  api,
  bindFiles,
  requestData = {}
}, callBack) {
  const [data, setRespData] = useState('');
  const [useId, setId] = useState('');
  const [postData, setPostData] = useState('');
  const [mApi, setMApi] = useState('');
  useEffect(() => {
    let reqData = requestData;
    const options = {};
    if (postData) {
      reqData = postData;
      options.method = 'POST';
    }
    if (api) {
      query(mApi || api, reqData, options);
    } else {
      console.warn('API为空, 访问被拒绝');
    }
  }, [api, useId, postData]);
  function query(api, reqData, options) {
    if (!api) {
      return;
    }
    promiseAjax(api, reqData, options).then(responseData => {
      if (responseData && responseData.code === 200) {
        let data = responseData.data;
        if (bindFiles) {
          if (Array.isArray(data) || Array.isArray(data.records)) {
            const newList = [];
            const ls = Array.isArray(data) ? data : data.records;
            ls.map(item => {
              newList.push(doBind(bindFiles, item));
            });
            data = newList;
          } else {
            data = doBind(bindFiles, responseData.data);
          }
        }
        setRespData(data);
        if (useId) {
          callBack(data);
        }
      } else {
        setRespData(responseData);
      }
    });
  }
  function setData(data) {
    setPostData(data);
  }

  //根据ID获取数据
  function changeData({
    id,
    api
  }) {
    setId(id);
    setMApi(api);
  }
  function doBind(binding, data = {}) {
    let bindingData = {};
    Object.keys(binding).forEach(key => {
      bindingData[binding[key]] = data[key];
    });
    return {
      ...bindingData
    };
  }
  return [data, setData, changeData];
};