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
import { LowCodeDatasetManageList } from '@/components/list'
import { LS } from 'zero-element/lib/utils/storage';
import BindingApiParamsAction from '../BindingApiParamsAction';

export default function DatasetBindingAction (props) {

    const { layoutName = LS.get('commonData'), onActionCompleted } = props;

    const _layoutName = typeof layoutName === 'object' ? LS.get('commonData').layoutName : layoutName
    const initialRef = useRef()
    const finalRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalTitle, setModalTitle] = useState('')

    
    const treeInitialRef = useRef()
    const treeFinalRef = useRef()
    const { isOpen:isTreeOpen, onOpen:onTreeOpen, onClose:onTreeClose } = useDisclosure()
    const [treeModalTitle, setTreeModalTitle] = useState('Binding Params')
    
    const [ datasetName, setDatasetName ] = useState('')

    const config = {
        listApi:"/openapi/crud/lc_low_auto_module_dataset/module_dataset/dataset-name-list",
    }

    const onBtnClick = () => {
        onOpen()
    }

    const handleActionCompleted = () => {
        if(onActionCompleted){
            onActionCompleted({moduleName: _layoutName})
        }
        onClose()
    }

    const datasetItemClick = (item) => {
        setDatasetName(item.datasetName)
        setTimeout(_=>{
            onTreeOpen()
        },100)
    }

    return (
        <>
            <Button onClick={onBtnClick}>
                DatasetBinding
            </Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={handleActionCompleted}
                size='full'
            >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>{modalTitle}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <LowCodeDatasetManageList {...config} onItemClick={datasetItemClick} />
                    </ModalBody>
                </ModalContent>
            </Modal>

            <Modal
                initialFocusRef={treeInitialRef}
                finalFocusRef={treeFinalRef}
                isOpen={isTreeOpen}
                onClose={onTreeClose}
                size='2xl'
            >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>{treeModalTitle}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <BindingApiParamsAction datasetName={datasetName} moduleName={_layoutName}/>
                    </ModalBody>
                </ModalContent>
            </Modal>


        </>
    )
}