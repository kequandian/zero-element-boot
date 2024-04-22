import React, { useState } from 'react';
import {
    useToast, Button, Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import promiseAjax from '@/components/utils/request';
import SelectAction from '@/components/presenter/button/SelectAction';
import { LS } from 'zero-element/lib/utils/storage';


export default function NoPresenterAction(props) {

    const { selection, layoutName = LS.get('commonData'), onActionCompleted } = props;

    const _layoutName = typeof layoutName === 'object' ? LS.get('commonData').layoutName : layoutName
    const presenterListApi = `/openapi/lc/module/childModuleList?componentOption=presenter&moduleName=${_layoutName}`

    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLoading, setLoading] = useState(false)
    const [currentItem, setCurrentItem] = useState({})

    const itemClick = (item) => {
        setCurrentItem(item)
        onOpen()
    }

    const submitData = () => {
        delPresenter()
    }

    //新增组件
    const delPresenter = () => {
        setLoading(true)
        const api = '/openapi/lc/module/remove-child-module-of-presenter-option'
        const query = {
            "mainModuleName": _layoutName,
            "removeModuleId": currentItem.id,
        }

        return promiseAjax(api, query, { method: 'DELETE' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('删除成功')
                if (onActionCompleted) {
                    onActionCompleted(resp.data)
                }
            } else {
                toastTips('删除失败', 'error')
            }
        }).finally(_ => {
            setCurrentItem({})
            setLoading(false)
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
        <>
            <SelectAction selection={selection} onItemClick={itemClick} api={presenterListApi} />

            <Modal isOpen={isOpen} onClose={onClose}
                closeOnOverlayClick={false}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>提示</ModalHeader>
                    {/* <ModalCloseButton /> */}
                    <ModalBody>
                        <div>确定 {currentItem.moduleName} 删除吗?</div>
                    </ModalBody>

                    <ModalFooter>

                        <Stack direction='row' spacing={4} align='center'>
                            <Button isLoading={isLoading} variant='ghost' onClick={onClose}>取消</Button>
                            <Button isLoading={isLoading} colorScheme='blue' mr={3} onClick={() => submitData()}>
                                确定
                            </Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}