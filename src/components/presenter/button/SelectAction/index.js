import React, { useState, useEffect, useRef }  from "react";
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
import { bindingConvert } from '@/components/gateway/Binding'
import doFilter from '@/components/gateway/doFilter.mjs';
import PreviewAutoLayout from '@/components/PreviewAutoLayout'

export default function SelectAction(props) {
    const { Selection, selection={}, onItemClick, 
    onActionCompleted, onModalClose, ...rest } = props;

    const { converter } = selection

    const initialRef = useRef()
    const finalRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalTitle, setModalTitle] = useState('')

    const _selectionName = Selection ? '' : typeof selection === 'string' ? selection : selection.xname;

    // const _Selection = Selection || <PreviewAutoLayout layoutName={_selectionName} {..._selectionProps} />;
    const _selectionProps = typeof selection === 'object' && selection.props ? {...selection.props} : {}

    const onBtnClick = () => {
        onOpen()
    }

    const itemClick = (item) => {

        let data = item
        if (converter && JSON.stringify(converter) != '{}') {
            const bindingData = bindingConvert(converter, item)
            data = doFilter(converter, bindingData)
        } 

        if(onItemClick){
            onItemClick(data)
        } else if(onActionCompleted){
            onActionCompleted(data)
        }else{
            console.error('SelectAction 未设置 onActionCompleted 事件')
        }
        onClose()
    }

    const handleModalClose = () => {
        onClose()
        if(onModalClose){
            onModalClose()
        }
    }

    return ( 
        <>
        
        <Button onClick={onBtnClick}>
            {selection.label}
        </Button>

        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={handleModalClose}
            size='full'
        >
            <ModalOverlay />
            <ModalContent >
                <ModalHeader>{modalTitle}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <PreviewAutoLayout 
                    layoutName={_selectionName} {..._selectionProps} 
                    onItemClick={itemClick} {...rest}/>
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    );
}