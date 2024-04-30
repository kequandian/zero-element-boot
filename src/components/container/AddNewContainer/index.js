import React, { useState, useEffect } from 'react';
import {
    useToast,
} from '@chakra-ui/react'
// import { bindingConvert } from '@/components/gateway/Binding'
// import doFilter from '@/components/gateway/doFilter.mjs';
const promiseAjax = require('@/components/utils/request');
import { formatParams } from '@/components/utils/tools';

/**
 * 
 * @param   Children        两个子组件
 * @param   addnewApi      第一组件新增api
 * @param   saveApi      第二组件保存api
 * 
 */
export default function AddNewContainer(props) {
    const {
        children,
        addnewApi,
        saveApi,
        ...rest
    } = props;

    const childList = React.Children.toArray(children)
    const [itemData, setItemData] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [onFirstRefresh, setOnFirstRefresh] = useState(false);
    const [onSecondRefresh, setOnSecondRefresh] = useState(false);
    const toast = useToast()

    useEffect(() => {
        if (onFirstRefresh) {
            setOnFirstRefresh(false)
        }
    }, [onFirstRefresh])

    useEffect(() => {
        if (onSecondRefresh) {
            setOnSecondRefresh(false)
        }
    }, [onSecondRefresh])

    const firstChildItemClick = (item) => {
        if(!saveApi){
            console.warn('未设置 saveApi ')
            return
        }
        setIsModalOpen(true)
        setOnSecondRefresh(true)
        setItemData(item)
    }

    const firstChildAddNew = () => {
        setIsModalOpen(true)
        setOnSecondRefresh(true)
        setItemData('')
    }

    const firstChildDelete = (status) => {
        if(status){
            setOnFirstRefresh(true)
        }
    }

    const secondChildFromAddNew = (data) => {
        // console.log('second child from add new = ')
        addNewData(data)
    }

    const secondChildonFormSaved = (data) => {
        // console.log('second child on form saved = ', data)
        saveData(data)
    }

    const secondChildActionCompleted = (data) => {
        // console.log('second child action completed = ', data)
        setOnFirstRefresh(true)
        setIsModalOpen(false)
    }

    //新增数据
    const addNewData = (data) => {

        if (!addnewApi) {
            toastTips('未设置 addnewApi ', 'warning')
            return
        }

        const queryData = {
            ...data,
        }

        // console.log('addNewData = ', saveApi, queryData)
        // return

        promiseAjax(addnewApi, queryData, { method: 'POST' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('save success')
                return new Promise((resolve) => {
                    setTimeout(() => {
                        setOnFirstRefresh(true)
                        setIsModalOpen(false)
                        resolve()
                    }, 500)
                })
            } else {
                toastTips(resp.message, 'error')
            }
        }).finally(_ => {
        });
    }

    //保存数据
    const saveData = (data) => {

        if (!saveApi) {
            toastTips('未设置 saveApi ', 'warning')
            return
        }

        const queryData = {
            ...data,
        }
        // console.log('saveData = ', saveApi, queryData)
        // return

        const api = formatParams(saveApi, itemData);

        promiseAjax(api, queryData, { method: 'PUT' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('save success')
                setOnFirstRefresh(true)
                setOnSecondRefresh(true)
                setIsModalOpen(false)
            } else {
                toastTips(resp.message, 'error')
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

    // console.log('childList[1] = ', childList[1])

    return (

        <>

            {

                !onFirstRefresh && childList[0] ? (
                    React.isValidElement(childList[0]) ? (
                        React.cloneElement(childList[0], {
                            ...rest,
                            onItemClick: firstChildItemClick,
                            onAddNewClick: firstChildAddNew,
                            onItemDeleted: firstChildDelete
                        })
                    ) : <></>
                ) : <></>
            }

            {
                !onSecondRefresh && childList[1] ? (
                    React.isValidElement(childList[1]) ? (
                        React.cloneElement(childList[1], {
                            ...itemData,
                            defaultData: itemData,
                            isModalOpen:isModalOpen,
                            ...rest,
                            onFormAddNew: secondChildFromAddNew,
                            onFormSaved: secondChildonFormSaved,
                            onActionCompleted:secondChildActionCompleted,
                        })
                    ) : <></>
                ) : <></>
            }


        </>


    )

}