const { Controller } = require('egg');
const { v4: uuidv4 } = require('uuid');

class IndexController extends Controller {

  // 辅助方法：切换组件
  async switchComponent(direction) {
    const { app } = this;

    try {
      const componentList = await app.redis.lrange('json_list', 0, -1);
      if (!componentList || componentList.length === 0) {
        return null;
      }

      let currentIndex = parseInt(await app.redis.get('current_index'), 10) || 0;

      switch (direction) {
        case 'prev':
          currentIndex = Math.max(currentIndex - 1, 0);
          break;
        case 'next':
          currentIndex = Math.min(currentIndex + 1, componentList.length - 1);
          break;
        case 'first':
          currentIndex = 0;
          break;
        case 'last':
          currentIndex = componentList.length - 1;
          break;
      }

      await app.redis.set('current_index', currentIndex);
      const moduleKey = componentList[currentIndex];
      return await this.getRedisJson(moduleKey);
    } catch (error) {
      console.error('Error switching component:', error);
      return null;
    }
  }
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
    const { ctx, app } = this;

    const json = {
      "xkey": uuidv4(),
    }

    // 存储到redis
    await this.setRedisJson(json.xkey, json);
    // 储存到当前
    await this.setRedisJson('current_json', json);


    // 将新组件的 xkey 添加到 jos n 列表中
    // await app.redis.rpush('json_list', JSON.stringify(json_obj));
    await app.redis.rpush('json_list', json.xkey);

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

  // 17. POST /api/auto/boot/load/{:moduleKey} 获取指定组件
  async loadAppoint() {
    const { ctx, app } = this;
    console.log(ctx?.params);
    if (!ctx?.params?.moduleKey) {
      ctx.body = {
        code: 400,
        message: 'moduleKey is required'
      };
      return;
    }

    const moduleKey = ctx?.params?.moduleKey;
    let json;

    switch (moduleKey) {
      // 切换至前一个组件
      case 'back':
        json = await this.switchComponent('prev');
        break;
      // 切换至下一个组件
      case 'next':
        json = await this.switchComponent('next');
        break;
      // 切换至第一个组件
      case 'head':
        json = await this.switchComponent('first');
        break;
      // 切换至最后一个组件
      case 'last':
        json = await this.switchComponent('last');
        break;

      default:
        json = await this.getRedisJson(moduleKey);
        break;
    }

    console.log(ctx.params, json);
    ctx.body = {
      code: 200,
      data: json
    };
  }

  // 移除指定的组件
  async loadDel() {
    const { ctx, app } = this;
    if (!ctx?.params?.moduleKey) return

    const moduleKey = ctx?.params?.moduleKey;

    const json = await this.getRedisJson(moduleKey);

    const allKeys = await app.redis.keys('*')

    if (!json) {
      ctx.body = {
        code: 404,
        message: 'Data not found'
      };
      return;
    } else {
      await app.redis.del(moduleKey);
      ctx.body = {
        code: 200,
        data: allKeys
      };
    }
    // 删除 Redis 中的数据

    ctx.body = {
      code: 200,
      data: allKeys
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
        "url": "https://img01.sogoucdn.com/app/a/200797/4c031d4b-3926-4ff5-bb89-07cd97e33d8a"
      }
    };

    await this.setRedisJson('current_json', new_json);

    ctx.body = {
      code: 200,
      data: new_json
    };
  }
  // 获取所有组件(仅返回 xkey)
  async list() {
    const { ctx, app } = this;


    // 获取 json_list 列表中的所有元素
    const componentList = await app.redis.lrange('json_list', 0, -1);
    // const parsedComponentList = componentList.map(item => JSON.parse(item));



    const json_arr = []
    for (const item of componentList) {
      console.log(item, '2', await this.getRedisJson(item));
      let json = await this.getRedisJson(item);
      json_arr.push(json);
    }

    ctx.body = {
      code: 200,
      data: json_arr
    };
  }

  // 编辑指定的组件名称
  async editName() {
    const { ctx, app } = this;

    const moduleKey = ctx?.params?.moduleKey;
    // const moduleName = ctx?.query?.moduleName;
    // const name = ctx?.query?.name;

    const { moduleName, name } = ctx.request.body; // 获取请求体中的数据

    console.log('editName', moduleKey, moduleName, name);
    if (!moduleKey || !moduleName || !name) {
      ctx.body = {
        code: 400,
        message: 'moduleKey/moduleName/name is required'
      };
      return;
    }

    // 获取 json_list 列表中的所有元素 是否重复
    const componentList = await app.redis.lrange('json_list', 0, -1);
    let nameExists = false;

    for (const item of componentList) {
      const json = await this.getRedisJson(item);
      if (json && json.moduleName === moduleName) {
        nameExists = true;
        break;
      }
    }

    if (nameExists) {
      ctx.body = {
        code: 409,
        message: `A component with the moduleName "${moduleName}" already exists`
      };
      return;
    }


    const json = await this.getRedisJson(moduleKey);

    if (json) {
      json.moduleName = moduleName;
      json.name = name;
    }

    await this.setRedisJson(json.xkey, json);

    ctx.body = {
      code: 200,
      data: json
    };
  }

  // 根据名称查询组件
  async getName() {
    const { ctx, app } = this;
    const nameToFind = ctx.params.moduleName;

    if (!nameToFind) {
      ctx.body = {
        code: 400,
        message: 'name query parameter is required'
      };
      return;
    }
    console.log(nameToFind);
    try {
      // 获取 json_list 列表中的所有元素
      const componentList = await app.redis.lrange('json_list', 0, -1);

      for (const item of componentList) {
        const json = await this.getRedisJson(item);
        if (json?.moduleName && json?.moduleName === nameToFind) {
          ctx.body = {
            code: 200,
            data: json
          };
          return;
        }
      }

      // 如果没有找到匹配的组件
      ctx.body = {
        code: 404,
        message: `No component found with name: ${nameToFind}`
      };
    } catch (error) {
      console.error('Error finding component by name:', error);
      ctx.body = {
        code: 500,
        message: 'Internal server error'
      };
    }
  }

}

module.exports = IndexController;