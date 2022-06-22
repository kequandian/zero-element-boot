

export default function useQuery(value = '') {


    function useQuery(dataString) {
        if (dataString) {
            const dsArray = dataString.split('&')
            const res = {}
            dsArray.map(item => {
                const dsItemArray = item.split('=')
                res[dsItemArray[0]] = dsItemArray[1]
            })
            return res
        } else {
            return {}
        }
    }

    const res = {}
    if (value) {
        const navArray = value.split('?')
        res.pathname = navArray[0]
        res.query = useQuery(navArray[1])
        return res
    } else {
        return {}
    }

}