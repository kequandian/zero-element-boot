/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1733911618761_399';

  // add your middleware config here
  config.middleware = [];
  // config.middleware = ['cors'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  config.cluster = {
    listen: {
      // path: ‘’,
      port: 3001,
      hostname: '0.0.0.0', //localhost
    }
  };

  // app/config/config.default.js
  config.jwt = {
    secret: '12345678',
  };
  config.security = {
    csrf: {
      enable: false,
    },
    // 配置白名单
    domainWhiteList: ['http://127.0.0.1:8848', 'http://192.168.3.22:3001'],
  };
  // cors 配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  // redis
  config.redis = {
    client: {
      host: '202.189.7.191',
      port: 6379,
      password: 'jfeat.com.24',
      db: '1',
    },
  }


  return {
    ...config,
    ...userConfig,
  };
};
