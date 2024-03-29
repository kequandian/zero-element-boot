import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
const promiseAjax = require('@/components/utils/request');


export default function useLowCodePalette(paletteName) {

    const [palette, setPalette] = useState([]);
    const [localPalette, setLocalPalette] = useLocalStorage('palette', '');

    useEffect(() => {
        if(localPalette && localPalette.length > 0){
            setPalette(localPalette)
        }else{
            getPalette();
        }
    },[])

    const convertData = (data) => {
        const keyValue = {
            "name": "color"
        }
        if(data && data.length > 0){
            const list = []
            data.forEach(item => {
                Object.keys(keyValue).map(key => {
                    const newItem = {}
                    newItem[item[key]] = item[keyValue[key]];
                    list.push(newItem);
                })
            });
            return list
        }
        return []
    }

    const getPalette = () => {
        const api = `/openapi/lc/palette?paletteName=${paletteName}&pageNum=1&pageSize=100`;
        const reqData = {};
        promiseAjax(api, reqData)
            .then(respData => {
                if (respData && respData.code === 200) {
                    const data = respData.data && (respData.data.records || respData.data);
                    const list = convertData(data);
                    setLocalPalette(list);
                    setPalette(list);
                }
            })
    }
    return palette;
}