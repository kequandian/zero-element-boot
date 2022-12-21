//替换括号内容
function formatParams(url, data){

    if(url && url.indexOf('(') !== -1){
        let regex = /\((.*?)\)/g; //匹配(*) 小括号里面任意内容的正则
        let arr = url.match(regex); //字符串匹配出来的数组
        let formatString = url
        arr.map(item => {
            const str = item.substring(1, item.length - 1)
            formatString = formatString.replace(`${item}`, data[str])
        })
        return formatString
    }
    return url
}

//获取尖括号内容 
function getTypeContent(str){
    if(str && str.indexOf('<') != -1){
        let regex = /\<(.*?)\>/g; //匹配<*> 尖括号里面任意内容的正则
        let arr = str.match(regex); //字符串匹配出来的数组
        return arr[0].substring(1, arr[0].length - 1)
    }else if(str && str.startsWith('#')){
        const value = str.split(' ')[0]
        return value
    }
    return ''
}

export {
    formatParams,
    getTypeContent
}