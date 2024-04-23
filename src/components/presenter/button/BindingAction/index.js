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

export default function BindingAction(props) {

    const { layoutName = LS.get('commonData'), onActionCompleted } = props;

    const initialRef = useRef()
    const finalRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalTitle, setModalTitle] = useState('')
    const _layoutName = typeof layoutName === 'object' ? LS.get('commonData').layoutName : layoutName
    
    const config = {
        layout: {
            children: [
                {
                    xname: 'PreviewAutoLayout',
                    props: {
                        layoutName:"BindingManageList"
                    }
                },
                {
                    xname: 'PreviewAutoLayout',
                    props: {
                        layoutName:"ParentParameterListAutoLayout",
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
        },
    }

    const onBtnClick = () => {
        onOpen()
    }

    const handleModalClose = () => {
        onClose()
        if (onActionCompleted) {
            const data = {
                moduleName: _layoutName
            }
            onActionCompleted(data)
        }
    }

    return (
        <>
            <Button onClick={onBtnClick}>
                Binding
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
                        <AutoLayout moduleName={_layoutName} {...config} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}