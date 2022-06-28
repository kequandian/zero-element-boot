const {
  useState,
  useEffect
} = require('react');

import promiseAjax from "../../../components/hooks/useTokenRequest";

module.exports = function useUaasTestUser({
  endpoint,
  accountToken
}, callBack) {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(''); //获取用户列表 / 根据ID获取用户详情

  useEffect(() => {
    const API = `${endpoint}/api/adm/users/testUserList`;
    const queryData = {
      token: accountToken
    };

    if (userId) {
      const API = `${endpoint}/api/adm/users/getToken/${userId}`;
      const queryData = {
        token: accountToken
      };
      promiseAjax(API, {}, queryData).then(responseData => {
        if (responseData && responseData.code === 200) {
          // setToken(responseData.accessToken);
          // setPermissions(responseData.perms);
          const data = responseData.data;
          callBack(data);
        }
      });
    } else {
      promiseAjax(API, {}, queryData).then(responseData => {
        // console.log('request rst: ', responseData);
        if (responseData && responseData.code === 200) {
          setUsers(responseData.data);
        }
      });
    }
  }, [userId]);

  function changeUser(userId) {
    setUserId(userId);
  }

  return [users, changeUser];
};