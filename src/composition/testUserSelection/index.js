import React, { useState, useEffect } from 'react';
import { ChakraProvider, Flex, Box, VStack, Spacer, Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input, // 文本框
    Stack, // 布局组件 设置子元素坚决
    FormControl, // 未表单元素添加动态效果 如校验 禁用等
    FormLabel, // label
    FormErrorMessage
} from "@chakra-ui/react";

import { useForm } from 'react-hook-form'

import { AutoLayout } from '@/components';

import layout from './layout';

import UserItem from './UserItem';

export default function Index(props) {

    const { data=[] } = props;

    const [ listData, setListData ] = useState(data)

    const [ isOpen, setIsOpen ] = useState(false)

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
      } = useForm()

    useEffect(() => {
        if (data && data.length > 0) {
            setListData(data);
        }
    }, [data]); 

    const initialRef = React.useRef()
    const finalRef = React.useRef()

    let layoutData = '';
    const layoutJsonPath = '';
    const localLayoutJson = layout;

    if(layoutJsonPath){
        layoutData = { path: layoutJsonPath};
    }else{
        layoutData = localLayoutJson;
    }
    const config = {
        items: listData,
        layout: layoutData
    };

    const onUserItemClick = (item) => {
        const id = item.id;
        console.log('id = ', id)
        alert(`选择的用户id为: ${id}`)
    }

    const onOpen = () => {
        setIsOpen(true)
    }

    const onOk = (data) => {
        setIsOpen(false)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    function validateData(values) {
        return new Promise((resolve) => {
            setTimeout(() => {
              //alert(JSON.stringify(values, null, 2))
              values.id = listData.length + 1;
              values.avatar = 'https://avatars1.githubusercontent.com/u/37545?s=460&v=4';
              listData.push(values)
              setListData(listData)
              resolve()
              setIsOpen(false)
            }, 3000)
          })
    }
    
    return (
        <ChakraProvider>
            <div style={{width: '450px'}}>
                <VStack align='stretch' spacing='-2'>
                    <Box>
                        <AutoLayout {...config} onItemClick={onUserItemClick}>
                            <UserItem/>
                        </AutoLayout>
                    </Box>
                    <Box flex='1'>
                        <div style={{ width:'100%', marginTop:'8px'}}>
                            <Flex>
                                <Box p='4'>
                                </Box>
                                <Spacer />
                                <Box p='4'>
                                    <Button
                                        size='md'
                                        height='48px'
                                        width='150px'
                                        border='2px'
                                        borderColor='green.500'
                                        onClick={onOpen}
                                        >
                                        添加
                                    </Button>
                                </Box>
                            </Flex>
                        </div>
                    </Box>
                </VStack>
            </div>
            

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>添加用户</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>

                    <form onSubmit={handleSubmit(validateData)}>
                        <Stack spacing="2">
                            <FormControl isInvalid={errors.account}>
                                <FormLabel htmlFor='account'>用户名</FormLabel>
                                <Input bgColor="gray.50" placeholder="请输入用户名" id='account'
                                    {...register('account', {
                                        required: '请输入用户名',
                                        minLength: { value: 4, message: '最小长度应为4' },
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.account && errors.account.message}
                                </FormErrorMessage>
                            </FormControl>
                            <Stack direction='row' spacing={4} align='center'>
                                <Button width='100px' colorScheme='teal' variant='solid' isLoading={isSubmitting} type='submit'>
                                    保存
                                </Button>
                                <Button width='100px' colorScheme='teal' variant='outline' onClick={onClose}>取消</Button>
                            </Stack>
                        </Stack>
                    </form>
                </ModalBody>

                {/* <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onOk}>
                    Save
                    </Button>
                </ModalFooter> */}
                </ModalContent>
            </Modal>
        </ChakraProvider>
    )

}