/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const jwtVerify = app.middleware.jwtVerify();
  router.get('/', jwtVerify, controller.home.index);
  router.get('/index', controller.home.index);

  //获取组件 descriptor,  即 json数据
  router.get('/api/auto/boot/preview', controller.index.preview);

  // 新建组件，即重置 descritpor 数据,  数据自动缓存至 redis
  router.post('/api/auto/boot/new', controller.index.new);

  //  POST /api/auto/boot/zoomout 执行【zoomin】之后回滚回前一个父组件
  router.post('/api/auto/boot/zoomout', controller.index.zoomout);


};
