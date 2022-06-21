
<<<<<<< HEAD

module.exports = function useTokenRequest(props) {
    const { location } = props
    if(location && location.query){
        return location.query
    }
    return '当前路由路径没有参数'
=======
/**
 * 返回当前路由
 * @param {} location 从 umi 框架获取的 location 参数 
 * @returns 
 */
 module.exports = function useRouterParams({location}) {
    if(location && location.query){
        return location.query
    }
    return {}
>>>>>>> b9cf5aac3d9a24b92899e76f29e39133f6f790e3
}
