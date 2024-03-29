//替换括号内容
function formatParams(str, data){

    if(typeof str === 'string'){
        if(str && str.indexOf('(') !== -1){
            let regex = /\((.*?)\)/g; //匹配(*) 小括号里面任意内容的正则
            let arr = str.match(regex); //字符串匹配出来的数组
            let formatString = str
            arr.map(item => {
                const cutStr = item.substring(1, item.length - 1)
                if(data[cutStr]){
                    formatString = formatString.replace(`${item}`, data[cutStr])
                }
            })
            return formatString
        }
    }else if(typeof str === 'object'){
        Object.keys(str).map(key => {
            if(str[key]){
                str[key] = formatParams(str[key], data)
            }
        })
        return str
    }
    
    return str
}

//获取尖括号内容 
function getTypeContent(str){
    if(str && str.indexOf('#') !== -1 && str.indexOf('<') != -1){
        const value = str.split('<')[0]
        return value
    }else if(str && str.indexOf('<') != -1){
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