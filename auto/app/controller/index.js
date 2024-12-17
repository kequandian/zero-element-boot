const { Controller } = require('egg');
const { v4: uuidv4 } = require('uuid');

class IndexController extends Controller {

  // 通用方法：获取 Redis 数据并尝试解析为 JSON
  async getRedisJson(key) {
    const { app } = this;

    try {
      const value = await app.redis.get(key);
      if (value) {
        return JSON.parse(value);
      }
      return null; // 或者返回其他默认值
    } catch (error) {
      console.error(`Failed to parse JSON for key: ${key}`, error);
      return value; // 返回原始字符串
    }
  }

  // 通用方法：设置 Redis 数据为 JSON
  async setRedisJson(key, obj) {
    const { app } = this;

    try {
      const jsonString = JSON.stringify(obj);
      await app.redis.set(key, jsonString);
    } catch (error) {
      console.error(`Failed to set JSON for key: ${key}`, error);
    }
  }

  // 1获取组件 descriptor,  即 json数据
  async preview() {
    const { ctx } = this;

    const current_json = await this.getRedisJson('current_json');
    console.log('preview-current_json', current_json);

    ctx.body = {
      code: 200,
      data: current_json
    };
  }

  // 2新建组件，即重置 descritpor 数据,  数据自动缓存至 redis
  async new() {
    const { ctx } = this;

    const json = {
      "xkey": uuidv4(),
    }

    // 存储到redis
    await this.setRedisJson(json.xkey, json);
    // 储存到当前
    await this.setRedisJson('current_json', json);

    console.log('new', json);

    ctx.body = {
      code: 200,
      data: json
    };
  }

  // 3. POST /api/auto/boot/todo/centralize 页面居中
  async centralize() {
    const { ctx } = this;

    const json = await this.getRedisJson('current_json');

    if (!json) {
      ctx.body = {
        code: 404,
        message: 'No data found for key: json'
      };
      return;
    }

    json.cart = 'PageCenter';
    console.log('json', json);

    await this.setRedisJson('current_json', json);

    ctx.body = {
      code: 200,
      data: json
    };
  }

  // 4. POST /api/auto/boot/todo/clone 克隆多一个组件
  async clone() {
    const { ctx } = this;

    ctx.body = {
      code: 200,
      data: {
        "xkey": "c6fe946c-b786-11ef-9639-b3e576acf426",
        "presenter": {
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
    };
  }

  // 5. POST /api/auto/boot/todo/repeat/{:count} 设置子组件个数
  async repeat() {
    const { ctx } = this;
    console.log(ctx.params);

    ctx.body = {
      code: 200,
      data: {
        "xkey": "c6fe946c-b786-11ef-9639-b3e576acf426",
        "presenter": {
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
    };
  }

  // 17. POST /api/auto/boot/load/{:moduleName} 加载已入库组件
  async load() {
    const { ctx } = this;

    ctx.body = {
      code: 200,
      data: {
        moduleName: ctx.params
      }
    };
  }

  //  16 POST /api/auto/boot/zoomout 执行【zoomin】之后回滚回前一个父组件
  async zoomout() {
    const { ctx } = this;

    const json_old = await this.getRedisJson('json_old');

    if (!json_old) {
      ctx.body = {
        code: 404,
        message: 'No data found for key: json_old'
      };
      return;
    }

    console.log('json_old', json_old);

    ctx.body = {
      code: 200,
      data: json_old
    };
  }

  // 19. POST /api/auto/boot/init  初始化为一个头像组件
  async init() {
    const { ctx } = this;

    const json = await this.getRedisJson('current_json');

    if (!json) {
      ctx.body = {
        code: 404,
        message: 'No data found for key: json'
      };
      return;
    }

    const new_json = {
      ...json,
      "xname": "Avatar",
      "props": {
        "url": "auto/app/public/log.svg"
      }
    };

    await this.setRedisJson('current_json', new_json);

    ctx.body = {
      code: 200,
      data: new_json
    };
  }

}

module.exports = IndexController;