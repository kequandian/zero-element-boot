const { strict: assert } = require('node:assert');
const path = require('node:path');
const { statSync } = require('node:fs');
const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  it('should assert', async () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('should typings exists', async () => {
    const typings = path.join(__dirname, '../../../typings');
    assert(statSync(typings));
  });

  it('should GET /', async () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, egg')
      .expect(200);
  });

  it('should POST /api/auto/boot/new', async () => {
    const xkey = 'test-key';
    const response = await app.httpRequest()
      .post('/api/auto/boot/new')
      .send({ xkey })
      .expect(200);

    const { body } = response;
    assert(body.includes('旧值：'));
    assert(body.includes('新值：'));
  });

  it('should GET /api/auto/boot/preview', async () => {
    const xkey = 'test-key';
    const oldValue = 'old-value';
    await app.redis.set(xkey, oldValue);

    const response = await app.httpRequest()
      .get(`/api/auto/boot/preview?xkey=${xkey}`)
      .expect(200);

    const { body } = response;
    assert(body.includes(`查询值：${oldValue}`));
  });

  it('should POST /api/auto/boot/todo/centralize', async () => {
    const response = await app.httpRequest()
      .post('/api/auto/boot/todo/centralize')
      .expect(200);

    const { body } = response;
    assert.deepStrictEqual(body, {
      code: 200,
      data: {
        presenter: {
          xname: 'Avatar',
          props: {
            url: '/auto/app/public/log.svg'
          }
        },
        cart: 'PageCenter'
      }
    });
  });

  it('should POST /api/auto/boot/todo/clone', async () => {
    const response = await app.httpRequest()
      .post('/api/auto/boot/todo/clone')
      .expect(200);

    const { body } = response;
    assert.deepStrictEqual(body, {
      code: 200,
      data: {
        xkey: 'c6fe946c-b786-11ef-9639-b3e576acf426',
        presenter: {
          xname: 'Avatar'
        },
        binding: {
          imageUrl: 'url'
        },
        mock: [
          { imageUrl: 'http://' },
          { imageUrl: 'http://' }
        ]
      }
    });
  });

  it('should POST /api/auto/boot/todo/repeat/:count', async () => {
    const count = 2;
    const response = await app.httpRequest()
      .post(`/api/auto/boot/todo/repeat/${count}`)
      .expect(200);

    const { body } = response;
    assert.deepStrictEqual(body, {
      code: 200,
      data: {
        xkey: 'c6fe946c-b786-11ef-9639-b3e576acf426',
        presenter: {
          xname: 'Avatar'
        },
        binding: {
          imageUrl: 'url'
        },
        mock: [
          { imageUrl: 'http://' },
          { imageUrl: 'http://' }
        ]
      }
    });
  });

  it('should POST /api/auto/boot/load/:moduleName', async () => {
    const moduleName = 'test-module';
    const response = await app.httpRequest()
      .post(`/api/auto/boot/load/${moduleName}`)
      .expect(200);

    const { body } = response;
    assert.deepStrictEqual(body, {
      code: 200,
      data: {
        moduleName: { moduleName }
      }
    });
  });

  it('should POST /api/auto/boot/zoomout', async () => {
    const oldValue = 'old-value';
    await app.redis.set('xkey_old', oldValue);

    const response = await app.httpRequest()
      .post('/api/auto/boot/zoomout')
      .expect(200);

    const { body } = response;
    assert(body.includes(`查询旧值：${oldValue}`));
  });

  it('should POST /api/auto/boot/init', async () => {
    const response = await app.httpRequest()
      .post('/api/auto/boot/init')
      .expect(200);

    const { body } = response;
    assert.deepStrictEqual(body, {
      code: 200,
      data: {
        xkey: 'c6fe946c-b786-11ef-9639-b3e576acf426',
        xname: 'Avatar',
        props: {
          url: '/auto/app/public/log.svg'
        }
      }
    });
  });
});