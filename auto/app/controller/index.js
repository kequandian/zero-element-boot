const { Controller } = require('egg');
const { v4: uuidv4 } = require('uuid');

class IndexController extends Controller {

  // 1获取组件 descriptor,  即 json数据
  async new() {

    const { ctx, app } = this;

    // 获取请求参数
    const { xkey } = ctx.request.body;

    // 获取旧值
    const oldRes = await app.redis.get(xkey);

    // 设置新值
    await app.redis.set(xkey, uuidv4());
    const getRes = await app.redis.get(xkey);

    // 将旧值存储到另一个键
    if (oldRes) {
      await app.redis.set(`xkey_old`, oldRes);
    }
    const txt = `
          旧值：${oldRes}
          新值：${getRes}
        `;
    ctx.body = txt;
  }

  // 2新建组件，即重置 descritpor 数据,  数据自动缓存至 redis
  async preview() {
    const { ctx, app } = this;
    console.log(ctx.query);
    const { xkey } = ctx.query;

    const oldRes = await app.redis.get(xkey);

    console.log('oldRes', oldRes);

    const txt = `
          查询值：${oldRes}
        `;
    ctx.body = txt;
  }

  //  16 POST /api/auto/boot/zoomout 执行【zoomin】之后回滚回前一个父组件
  async zoomout() {
    const { ctx, app } = this;


    const xkey_old = await app.redis.get('xkey_old');

    console.log('xkey_old', xkey_old);

    const txt = `
          查询旧值：${xkey_old}
        `;
    ctx.body = txt;
  }

  // 19. POST /api/auto/boot/init  初始化为一个头像组件

  async init() {
    const { ctx, app } = this;

    // const xkey = 'xkey';

    // 设置新值
    // await app.redis.set(xkey, uuidv4());
    // const getRes = await app.redis.get(xkey);


    ctx.body = {
      code: 200,
      data: {
        "xkey": "c6fe946c-b786-11ef-9639-b3e576acf426",
        "xname": "Avatar",
        "props": {
          "url": "/auto/app/public/log.svg"
        }
      }
    };
  }


}

module.exports = IndexController;