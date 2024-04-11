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
import PreviewAutoLayout from '@/components/PreviewAutoLayout'

export default function SelectAction(props) {
    const { Selection, selection } = props;

    const initialRef = useRef()
    const finalRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalTitle, setModalTitle] = useState('')

    const _selectionName = Selection ? '' : typeof selection === 'string' ? selection : selection.xname;

    // const _Selection = Selection || <PreviewAutoLayout layoutName={_selectionName} {..._selectionProps} />;
    const _selectionProps = typeof selection === 'object' && selection.props ? {...selection.props} : {}

    const onActionCompleted = (item) => {
    }

    const onBtnClick = () => {
        onOpen()
    }

    return ( 
        <>
        
        <Button onClick={onBtnClick}>
            {selection.content}
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
                    {/* <_Selection onItemClick={onActionCompleted} /> */}
                    <PreviewAutoLayout layoutName={_selectionName} {..._selectionProps} />
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    );
}