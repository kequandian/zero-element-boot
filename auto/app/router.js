/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const jwtVerify = app.middleware.jwtVerify();
  router.get('/', jwtVerify, controller.home.index);
  router.get('/index', controller.home.index);

  // 1. GET /api/auto/boot/preview 获取组件 descriptor, 即 json数据
  router.get('/api/auto/boot/preview', controller.index.preview);

  // 2. POST /api/auto/boot/new 新建组件，即重置 descritpor 数据, 数据自动缓存至 redis
  router.post('/api/auto/boot/new', controller.index.new);

  // 3. POST /api/auto/boot/todo/centralize 页面居中
  router.post('/api/auto/boot/todo/centralize', controller.index.centralize);

  // 4. POST /api/auto/boot/todo/clone 克隆多一个组件
  router.post('/api/auto/boot/todo/clone', controller.index.clone);

  // 5. POST /api/auto/boot/todo/repeat/{:count} 设置子组件个数
  router.post('/api/auto/boot/todo/repeat/:count', controller.index.repeat);

  // 16. POST /api/auto/boot/zoomout 执行【zoomin】之后回滚回前一个父组件
  router.post('/api/auto/boot/zoomout', controller.index.zoomout);

  // 17. POST /api/auto/boot/load/{:moduleName} 加载已入库组件
  router.post('/api/auto/boot/load/:moduleName', controller.index.load);

  // 19. POST /api/auto/boot/init  初始化为一个头像组件
  router.post('/api/auto/boot/init', controller.index.init);

};
