import React from 'react';
import { useToast } from '@chakra-ui/react';
import promiseAjax from '@/components/utils/request';
import SelectAction from '@/components/presenter/button/SelectAction';
import { LS } from 'zero-element/lib/utils/storage';


export default function NewPresenterAction(props) {

    const { selection, layoutName=LS.get('layoutName'), onActionCompleted } = props;

    
    const toast = useToast()

    const itemClick = (item) => {
        addNewPresenter(item)
    }

    //新增组件
    const addNewPresenter = (item) => {
        const api = '/openapi/lc/module/presenter/based-on-presenter-create-presenter'
        const query = {
            "mainModuleName": typeof layoutName === 'object' ? LS.get('layoutName').layoutName : layoutName,
            "addModuleId": item.id,
        }

        return promiseAjax(api, query, { method: 'POST' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('新增成功')
                if(onActionCompleted){
                    onActionCompleted(resp.data.moduleName)
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