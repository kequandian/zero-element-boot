import React, { useState, useEffect, useRef } from 'react';
import {
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import PreviewAutoLayout from '@/components/PreviewAutoLayout';
import promiseAjax from '@/components/utils/request';

export default function ChildParamstListModal(props) {

    const { isModalOpen, onModalClose, moduleName, onCompleted,
        keyName
    } = props;

    const toast = useToast()
    const initialRef = useRef()
    const finalRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalTitle, setModalTitle] = useState('')

    // const Child = React.Children.only(children);

    useEffect(() => {
        if (isModalOpen) {
            onOpen()
        } else {
            onClose()
        }
    }, [isModalOpen])

    const handleModalClose = () => {
        if(onModalClose){
            onModalClose()
        }
    }

    const handleSubmit = (item) => {

        const api = `/openapi/lc/module/add-binding-by-name/${moduleName}`

        const query = {
            bindingKey: keyName,
            bindingValue: item.propName,
            childModuleName: item.childModuleName,
        }

        // console.log('handleSubmit = ', query, item)

        return promiseAjax(api, query, { method: 'POST' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips(`绑定成功`)
                if(onCompleted){
                    onCompleted()
                    onModalClose()
                }
            } else {
                toastTips(`绑定失败, ${resp.message}`, 'error')
            }
        }).finally(_ => {
        });

        
    }

    // tips
    function toastTips(text, status = 'success') {
        toast({
            title: text,
            description: '',
            status: status,
            duration: 3000,
            isClosable: true,
            position: 'top'
        })
    }

    return (

        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={handleModalClose}
            size='xl'
            // closeOnOverlayClick={false} //点击遮罩层不关闭
        >
            <ModalOverlay />
            <ModalContent >
                <ModalHeader>{modalTitle}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <PreviewAutoLayout layoutName='ChildrenParamsAutolayout' 
                        moduleName={moduleName} 
                        onItemClick={handleSubmit}
                    />
                </ModalBody>
            </ModalContent>
        </Modal>

    )
}