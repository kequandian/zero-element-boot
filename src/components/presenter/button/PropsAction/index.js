import React, { useState, useEffect, useRef }  from 'react';
import {
    Box,
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
import { LS } from 'zero-element/lib/utils/storage';
import { AutoLayout } from '@/components'

export default function PropsAction(props) {

    const { label='Props', onActionCompleted } = props;

    const initialRef = useRef()
    const finalRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalTitle, setModalTitle] = useState('')
    const moduleName = LS.get('commonData').layoutName || ''

    const config = {
        layout: {
            children: [
                {
                    xname: 'PreviewAutoLayout',
                    props: {
                        layoutName: "PropertyManage"
                    }
                },
                {
                    xname: 'PreviewAutoLayout',
                    props: {
                        layoutName: "PropKeyValueManage",
                    }
                },
            ],
            xname: 'HStack',
            props: {
                flexFlow: "no-wrap",
                spacing: 8,
                align: "center",
            },
            container: "DataFlowContainer"
        },
        converter: {
            assembledAs: "assembledAs"
        },
    }

    const onBtnClick = () => {
        onOpen()
    }

    const handleModalClose = () => {
        onClose()
        if (onActionCompleted) {
            const data = {
                moduleName: moduleName
            }
            onActionCompleted(data)
        }
    }

    return (
        <>
            <Button onClick={onBtnClick}>
                {label}
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
                        <AutoLayout moduleName={moduleName} {...config} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}