// 定制白名单
const whiteList = ['/', '/index'];

module.exports = () => {
    return async function (ctx, next) {
        // console.log('jwtm---ctx.request.url----: ', ctx);
        if (!whiteList.some(item => item == ctx.request.url)) {//判断接口路径是否在白名单
            let token = ctx.request.header.token//拿到token
            // console.log('jwtm---token----: ', token);
            if (token) {//如果token存在
                try {
                    let decoded = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret)//解密token
                    // decoded= {name, password, iat, exp} // jwt.sign时的数据，和iat,exp
                    await next()
                } catch (err) {
                    ctx.body = {
                        code: 1,
                        msg: 'token不对'
                    }
                }
            } else {

                ctx.body = {
                    code: 1,
                    msg: '没有token'
                }
            }
        } else {
            await next()
        }
    }
}
