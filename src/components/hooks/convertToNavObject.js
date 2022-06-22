

module.exports = function convertToNavObject(value = '') {


    function convertToQuery(dataString){
        if(dataString){
            const dsArray = dataString.split('&')
            const res = {}
            dsArray.map(item =>{
                const dsItemArray = item.split('=')
                res[dsItemArray[0]]=dsItemArray[1]
            })
            return res
        }else{
            return {}
        }
    }

    const res = {}
    if(value){
        const navArray = value.split('?')
        res.pathname = navArray[0]
        res.query = convertToQuery(navArray[1])
        return res
    }else{
        return {}
    }

}