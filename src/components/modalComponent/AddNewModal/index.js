import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
    Button,
    Input,
    Stack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react";

export default function AddNewModal(props) {

    const { children, isModalOpen, defaultData, ...rest } = props;

    const initialRef = useRef()
    const finalRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalTitle, setModalTitle] = useState('')

    const Child = React.Children.only(children);

    useEffect(() => {
        if (isModalOpen) {
            onOpen()
        } else {
            onClose()
        }
    }, [isModalOpen])

    return (

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
                {
                    React.isValidElement(Child) ?
                    React.cloneElement(Child, {
                        ...rest,
                        ...defaultData
                    })
                    : <Child {...defaultData }/>
                }
                </ModalBody>
            </ModalContent>
        </Modal>

    )
}