import React, { useState, useEffect } from 'react';
import { Spinner, Select } from "@chakra-ui/react";
import { useForceUpdate } from '@/components/hooks/lifeCycle';
const promiseAjax = require('@/components/utils/request');

export default function SelectFetch(props) {

    const { field, required, register, defaultValue, options, saveData, onChange } = props;
    const { api: optionAPI, label, value } = options;

    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false)
    const [selectedValue, setSelectedValue] = useState('')

    const forceUpdate =  useForceUpdate()

    useEffect(_ => {
        getSelectList()
    }, [])

    //获取下拉框列表
    function getSelectList() {

        const api = `${optionAPI}`;
        const queryData = {};
        setLoading(true)
        promiseAjax(api, queryData).then(resp => {
            if (resp && resp.code === 200) {
                setData(resp.data.records)
                // if(onChange){
                //     onChange(resp.data.records)
                // }
            } else {
                console.error("select 获取数据失败")
            }
        }).finally(_ => {
            setLoading(false)
            forceUpdate()
        });
    }

    //处理额外提交的字段和值
    function selectedChange(s) {
        const id = s.target.value
        let currentSelected;
        setSelectedValue(id)
        data.map(item => {
            if (item.id === id) {
                currentSelected = item
            }
        })
        if (onChange) {
            if (saveData) {
                const formatData = {}
                Object.keys(saveData).map(key => {
                    formatData[key] = currentSelected[saveData[key]]
                })
                console.log(' formatData == ', formatData)
                onChange(formatData)
            }
        }
    }

    return (
        <>
            {loading ? <Spinner /> : (
                <Select bgColor="gray.50" placeholder={required.placeholder ? required.placeholder : `请选择`} id={field}
                    value={selectedValue || defaultValue}
                    {...register(field,
                        required ? {
                            required: required.placeholder ? required.placeholder : `请选择`
                        } : {}
                    )}
                    onChange={selectedChange}
                >
                    {data && data.length > 0 && data.map((item, index) => (
                        <option key={`${index}_option`} value={item[value]}>{item[label]}</option>
                    ))}
                </Select>
            )}
        </>
    )


}