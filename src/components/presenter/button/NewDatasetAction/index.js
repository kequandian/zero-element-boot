import React, { useState, useRef } from "react";
import {
    Modal,
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import { ConfirmContainer } from '@/components/container'
import { LowCodeDatasetManageList } from '@/components/list'
import { LS } from 'zero-element/lib/utils/storage';

export default function NewDatasetAction (props) {

    const { layoutName = LS.get('commonData'), onActionCompleted } = props;
    
    const initialRef = useRef()
    const finalRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalTitle, setModalTitle] = useState('')

    const config = {
        listApi:"/openapi/crud/lc_low_auto_module_dataset/module_dataset/dataset-name-list",
        isScroll: true,
        saveApi: '/openapi/lc/module/presenter/from-dataset-create',
        saveApiBody:{
            mainModuleName: typeof layoutName === 'object' ? LS.get('commonData').layoutName : '(layoutName)',
            datasetName: '(datasetName)'
        }
    }

    const onBtnClick = () => {
        onOpen()
    }

    const handleActionCompleted = (data) => {
        if(onActionCompleted){
            onActionCompleted(data)
        }
        onClose()
    }

    return (
        <>
            <Button onClick={onBtnClick}>
                NewDataset
            </Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                size='full'
            >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>{modalTitle}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <ConfirmContainer {...config} layoutName={layoutName} onActionCompleted={handleActionCompleted}>
                            <LowCodeDatasetManageList />
                        </ConfirmContainer>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}