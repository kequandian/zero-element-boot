import React from 'react';
import { useToast } from '@chakra-ui/react';
import { bindingConvert } from '@/components/gateway/Binding'
import doFilter from '@/components/gateway/doFilter.mjs';
import promiseAjax from '@/components/utils/request';
import SelectAction from '@/components/presenter/button/SelectAction';
import { LS } from 'zero-element/lib/utils/storage';

/**
 * 
 * @param {string} api 提交api
 * @param {object} converter 转换提交的body 
 * 
 */

export default function PreviewSelectAction(props) {

    const { selection, api, converter, onActionCompleted } = props;

    const toast = useToast()

    const itemClick = (item) => {
        submitData(item)
    }

    //新增组件
    const submitData = (item) => {
        // const api = '/openapi/lc/module/presenter/based-on-presenter-create-presenter'
        if(!api){
            toastTips('未设置api', 'error')
            return
        }

        const _api = api
        let query = {
            // "mainModuleName": layoutName,
            // "addModuleId": item.id,
        }

        const getStrogeData = LS.get('commonData') || {}

        if(converter && JSON.stringify(converter) != '{}'){
            const bindingData = bindingConvert(converter, {...item, ...getStrogeData})
            query = doFilter(converter, bindingData)
        }

        return promiseAjax(_api, query, { method: 'POST' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('新增成功')
                if(onActionCompleted){
                    onActionCompleted(resp.data)
                }
            } else {
                toastTips('新增失败')
            }
        }).finally(_ => {
        });

    }

    // tips
    function toastTips(text, status = 'success') {
        toast({
            title: text,
            description: "",
            status: status,
            duration: 3000,
            isClosable: true,
            position: 'top'
        })
    }

    return (
        <SelectAction selection={selection} onItemClick={itemClick} />
    )
}