import React from 'react';
import SelectAction from '@/components/presenter/button/SelectAction';
import { LS } from 'zero-element/lib/utils/storage';

/**
 * 
 * @param {string} api 提交api
 * @param {object} converter 转换提交的body 
 * @param {string} method 提交方式
 * @param {function} onActionCompleted 访问完成后回调事件
 * 
 */

export default function PreviewSelectAction(props) {

    const { selection, onActionCompleted } = props;

    const moduleName = LS.get('commonData').layoutName || ''

    const onModalClose = () => {
        if(onActionCompleted){
            const data = {
                moduleName: moduleName
            }
            onActionCompleted(data)
        }
    }

    return (
        <SelectAction selection={selection} onModalClose={onModalClose} moduleName={moduleName} />
    )
}