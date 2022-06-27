
//用来把传入的路径参数转化为字典格式的工具

export default function useQuery(value = '') {

    function useQuery(dataString) {
        if (dataString) {
            const res = {}
            if (dataString.indexOf('&') != -1) {
                const dsArray = dataString.split('&')
                dsArray.map(item => {
                    const dsItemArray = item.split('=')
                    res[dsItemArray[0]] = dsItemArray[1]
                })
            } else {
                const dataString = item.split('=')
                res[dataString[0]] = dataString[1]
            }
            return res
        } else {
            return {}
        }
    }

    const res = {}
    if (value) {
        if (value.indexOf('?') != -1) {
            const navArray = value.split('?')
            res.pathname = navArray[0]
            res.query = useQuery(navArray[1])
        } else {
            res.pathname = value
            res.query = {}
        }
        return res
    } else {
        return {}
    }

}