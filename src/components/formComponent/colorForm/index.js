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

export default function ColorFrom(props) {

    const { isModalOpen, defaultData, onFormAddNew, onFormSaved } = props;

    const initialRef = useRef()
    const finalRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalTitle, setModalTitle] = useState('')
    const [requestType, setRequestType] = useState('')

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    useEffect(() => {
        if (isModalOpen) {
            onOpen()
        } else {
            onClose()
        }
    }, [isModalOpen])


    useEffect(() => {
        if (defaultData && JSON.stringify(defaultData) !== '{}') {
            setModalTitle('编辑')
            setRequestType('edit')
        } else {
            setModalTitle('新增')
            setRequestType('add')
        }
    }, [defaultData])


    function validateData(values) {

        console.log('validateData', values)

        if (values.color.indexOf('#') === -1) {
            values.color = '#' + values.color
        }

        if (requestType === 'add') {
            if (onFormAddNew) {
                onFormAddNew(values)
            }
        } else if (requestType === 'edit') {
            if (onFormSaved) {
                onFormSaved(values)
            }
        }
        reset()



        // return new Promise((resolve) => {
        //     setTimeout(() => {

        //         resolve()
        //     }, 2000)
        // })
    }

    function handleColorValue(value) {
        if (value && value.indexOf('#') != -1) {
            value = value.replace('#', '')
        }
        return value
    }


    return (

        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            size='xl'
        >
            <ModalOverlay />
            <ModalContent >
                <ModalHeader>{modalTitle}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <form onSubmit={handleSubmit(validateData)} noValidate>
                        <Stack spacing="2">

                            <FormControl isInvalid={errors.paletteName}>
                                <FormLabel htmlFor='paletteName'>Hex #</FormLabel>
                                <Input bgColor="gray.50" placeholder="色板名" id='paletteName'
                                    defaultValue={defaultData ? handleColorValue(defaultData.paletteName) : ''}
                                    {...register('paletteName', {
                                        required: '请输入色板名称'
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.paletteName && errors.paletteName.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.color}>
                                <FormLabel htmlFor='color'>Hex #</FormLabel>
                                <Input bgColor="gray.50" placeholder="1E1E1E" id='color'
                                    defaultValue={defaultData ? handleColorValue(defaultData.color) : ''}
                                    {...register('color', {
                                        required: '请输入颜色值'
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.color && errors.color.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.name}>
                                <FormLabel htmlFor='name'>Name</FormLabel>
                                <Input bgColor="gray.50" placeholder="名称" id='name'
                                    defaultValue={defaultData ? defaultData.name : ''}
                                    {...register('name', {
                                        // required: '请输入颜色名',
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.name && errors.name.message}
                                </FormErrorMessage>
                            </FormControl>

                            <Stack direction='row' spacing={4} align='center'>
                                <Button width='100px' colorScheme='teal' variant='solid' isLoading={false} type='submit' size='sm'>
                                    保存
                                </Button>
                                <Button width='100px' colorScheme='teal' variant='outline' onClick={onClose} size='sm'>取消</Button>
                            </Stack>
                        </Stack>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>

    )
}