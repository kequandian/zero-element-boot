const {
  useState,
  useEffect
} = require('react');

const promiseAjax = require("./request");

module.exports = function useUaasTestUser({
  endpoint,
  accountToken
}, callBack) {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');
  const [permissions, setPermissions] = useState([]); //获取用户列表

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
        console.log('userInfo request rst: ', responseData);

        if (responseData && responseData.code === 200) {
          setToken(responseData.accessToken);
          setPermissions(responseData.perms);
          callBack(responseData.accessToken);
        }
      });
    } else {
      promiseAjax(API, {}, queryData).then(responseData => {
        console.log('request rst: ', responseData);

        if (responseData && responseData.code === 200) {
          setUsers(responseData.data);
        }
      });
    }
  }, [userId]);

  function changeUser(userId) {
    console.log('userId = ', userId);
    setUserId(userId);
  }

  return [users, token, permissions, changeUser];
};