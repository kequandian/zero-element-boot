const { Controller } = require('egg');
const { v4: uuidv4 } = require('uuid');

class IndexController extends Controller {

  // 1获取组件 descriptor,  即 json数据
  async preview() {
    const { ctx, app } = this;

    const json = await app.redis.get('json');
    console.log('preview', json);

    ctx.body = {
      code: 200,
      data: JSON.parse(json)
    };
  }

  // 2新建组件，即重置 descritpor 数据,  数据自动缓存至 redis
  async new() {
    const { ctx, app } = this;

    // console.log(ctx.query);
    // const { xkey } = ctx.query;

    // 获取旧值
    const josn_old = await app.redis.get('josn');

    // 将旧值存储到另一个键
    if (josn_old) {
      await app.redis.set(`josn_old`, JSON.stringify(josn_old));
    }

    const josn = {
      "xkey": uuidv4(),
    }
    // 设置新值
    await app.redis.set('json', JSON.stringify(josn));

    console.log('new', josn);

    ctx.body = {
      code: 200,
      data: josn
    };
  }

  // 3. POST /api/auto/boot/todo/centralize 页面居中
  async centralize() {
    const { ctx, app } = this;
    const json = await app.redis.get('json');

    josn.cart = 'PageCenter'

    await app.redis.set('json', JSON.stringify(josn));

    ctx.body = {
      code: 200,
      data: josn
    }
  };

  // 4. POST /api/auto/boot/todo/clone 克隆多一个组件
  async clone() {
    const { ctx, app } = this;

    ctx.body = {
      code: 200,
      data: {
        "xkey": "c6fe946c-b786-11ef-9639-b3e576acf426",
        "presenter":
        {
          "xname": "Avatar"
        },
        "binding": {
          "imageUrl": "url"
        },
        "mock": [{
          "imageUrl": "http://"
        },
        {
          "imageUrl": "http://",
        }]
      }
    }
  };

  // 5. POST /api/auto/boot/todo/repeat/{:count} 设置子组件个数
  async repeat() {
    const { ctx, app } = this;
    console.log(ctx.params);

    ctx.body = {
      code: 200,
      data: {
        "xkey": "c6fe946c-b786-11ef-9639-b3e576acf426",
        "presenter":
        {
          "xname": "Avatar"
        },
        "binding": {
          "imageUrl": "url"
        },
        "mock": [{
          "imageUrl": "http://"
        },
        {
          "imageUrl": "http://",
        }]
      }
    }
  };


  // 17. POST /api/auto/boot/load/{:moduleName} 加载已入库组件
  async load() {
    const { ctx, app } = this;

    ctx.body = {
      code: 200,
      data: {
        moduleName: ctx.params
      }

    };
  }

  //  16 POST /api/auto/boot/zoomout 执行【zoomin】之后回滚回前一个父组件
  async zoomout() {
    const { ctx, app } = this;

    const josn_old = await app.redis.get('josn_old');

    console.log('josn_old', josn_old);

    ctx.body = {
      code: 200,
      data: josn_old
    };
  }

  // 19. POST /api/auto/boot/init  初始化为一个头像组件
  async init() {
    const { ctx, app } = this;

    const json = await app.redis.get('json');
    console.log('init', json);

    const new_json = {
      ...JSON.parse(json),
      "xname": "Avatar",
      "props": {
        "url": "assets/moerdeng2.png"
      }
    }
    await app.redis.set('json', JSON.stringify(new_json));

    ctx.body = {
      code: 200,
      data: new_json
    };
  }


}

module.exports = IndexController;