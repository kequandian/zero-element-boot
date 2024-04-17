import React, { useState, useEffect, useRef } from 'react';
import {
    Button, useToast, Input,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure
} from '@chakra-ui/react';
import promiseAjax from '@/components/utils/request';
import { formatParams } from '@/components/utils/tools';
import _ from 'lodash'

/**
 * @param {*} props 
 * @param {object}} converter 绑定加载参数
 */

export default function ConfirmContainer(props) {

    const {
        children,
        converter,
        saveApi,
        saveApiBody,
        onActionCompleted,
        ...rest
    } = props

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [currentItem, setCurrentItem] = useState('')
    const [originSaveBody, setOriginSaveBody] = useState(saveApiBody)
    const [onRefresh, setOnRefresh] = useState(false)
    const Child = children && React.Children.only(children);

    const toast = useToast()
    const cancelRef = useRef()

    // useEffect(_ => {
    //     if (onRefresh) {
    //         setOnRefresh(false)
    //     }
    // }, [onRefresh])

    const handleSaveData = () => {

        if (!saveApi) {
            toastTips('未设置 saveApi ', 'warning')
            return
        }

        const api = formatParams(saveApi, {...rest, ...currentItem});
        let data = {}
        if(originSaveBody && JSON.stringify(originSaveBody) != "{}"){
            const cloneOriginSaveBody = _.cloneDeep(originSaveBody)
            data = formatParams(cloneOriginSaveBody, {...rest, ...currentItem})
        }

        
        console.log('handleSaveData handleSaveData = ', originSaveBody, rest, currentItem)  

        const queryData = {
            ...data
        }

        promiseAjax(api, queryData, { method: 'PUT' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('操作成功')
                onClose()
                if(onActionCompleted){
                    onActionCompleted(resp.data.moduleName)
                }
            } else {
                console.error("操作失败 === ", resp)
                toastTips('操作失败', 'error')
            }
        });
    }


    const itemClick = (item) => {
        // console.log('onNavItemClick item = ', item)   
        if (item.isSelected) {
            setCurrentItem(item)
            onOpen(true)
        }
    }


    //当所有现有节点已完成动画输出时触发
    const loadedDrawerData = () => {

        //TODO
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

    console.log('ConfirmContainer = ', rest)

    return (
        <>
            {

                React.isValidElement(Child) ? (
                    React.cloneElement(Child, {
                        ...rest,
                        onItemClick: itemClick,
                    })
                ) : <></>
            }

            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>提示</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        确定选择此项吗？
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            取消
                        </Button>
                        <Button colorScheme='blue' ml={3} onClick={handleSaveData}>
                            确定
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )

}