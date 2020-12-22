const {
  useState,
  useEffect
} = require('react');

const promiseAjax = require("../../../utils/request");

module.exports = function useUaasTestUser({
  endpoint,
  accountToken
}, callBack) {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(''); //获取用户列表

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
          callBack({
            token: responseData.data.accessToken,
            permissions: responseData.data.perms
          });
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