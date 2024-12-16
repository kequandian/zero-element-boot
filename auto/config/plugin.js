/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  jwt: {
    enable: true,
    package: "egg-jwt"
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  }
};
