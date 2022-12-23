function getContentName(str){
    if(str && str.indexOf('<<') !== -1){
        let regex = /\<\<(.*?)\>\>/g; 
        let arr = str.match(regex); 
        return arr[0].substr(2, arr[0].length-4)
    }
}

export {
    getContentName
}