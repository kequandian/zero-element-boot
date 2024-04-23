import React, { useState, useEffect, useRef } from 'react';
import {
    Button, useToast, Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Stack, // 布局组件 设置子元素坚决
    FormControl, // 未表单元素添加动态效果 如校验 禁用等
    FormLabel, // label
    FormErrorMessage,
    Text
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { APIContainer, NamedLayout } from '@/components';
import promiseAjax from '@/components/utils/request';
import SelectList from '@/components/list/SelectList';
import PlainAddNew from '@/components/presenter/button/PlainAddNew';
import { formatParams } from '@/components/utils/tools';

/**
 * @param {*} props 
 * @param {string}} listApi 列表api
 * @param {object}} converter listApi绑定数据
 * @param {string}} addApi 新增api
 * @param {object}} addApiBody 新增api提交数据
 * @param {string}} addApi 编辑api
 * @param {object}} addApiBody 编辑api提交数据
 */

export default function QueryManageList(props) {

    const {
        children,
        listApi = '',
        converter = {},
        addApi = '',
        addApiBody = {},
        editApi = '',
        editApiBody = {},
        onItemClick,
        ...rest
    } = props

    //表单填写项
    const formFields = [
        { label: '键', field: 'newKey' },
        { label: '值', field: 'newValue' },
    ]
    const [lsApi, setLsApi] = useState(listApi)
    const [isOpen, setIsOpen] = useState(false)
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const [onRefresh, setOnRefresh] = useState(false)
    const [selectData, setSelectData] = useState({})

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    const initialRef = useRef()
    const finalRef = useRef()
    const toast = useToast()

    useEffect(_ => {
        if (onRefresh) {
            setOnRefresh(false)
            setLsApi(listApi)
        }
    }, [onRefresh])

    // //新增
    const onAddNewClick = () => {
        showModal(true)
    }

    function showModal() {
        setIsOpen(true)
    }

    //关闭模态框
    function onClose() {
        reset()
        setIsOpen(false)
    }

    function onConfirmClose(){
        reset()
        setIsConfirmOpen(false)
    }

    function validateData(values) {

        return new Promise((resolve) => {
            setTimeout(() => {
                createData(values)
                resolve()
            }, 100)
        })
    }

    //新增数据
    function createData(values) {

        if (!addApi) {
            toastTips('未设置 addApi ', 'warning')
            return
        }

        const queryData = {
            ...addApiBody,
        }

        promiseAjax(addApi, queryData, { method: 'POST' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('新增成功')
                setLsApi('')
                setOnRefresh(true)
                setIsOpen(false)
                // 重置表单
                reset()
            } else {
                console.error("新增失败 === ", resp)
                toastTips(resp.message, 'error')
            }
        });
    }

    //变更数据
    const editData = () => {

        if (!editApi) {
            toastTips('未设置 editApi ', 'warning')
            return
        }

        const convertBodyData = formatParams(editApiBody, selectData)

        const queryData = {
            ...convertBodyData,
        }

        promiseAjax(editApi, queryData, { method: 'POST' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('操作成功')
                setLsApi('')
                setOnRefresh(true)
                setIsConfirmOpen(false)
            } else {
                console.error("操作失败 === ", resp)
                toastTips(resp.message, 'error')
            }
        }).finally(_=>{
            reset()
            setSelectData({})
        });
    }

    const KVMItemClick = (item) => {
        setSelectData(item)
        //
        setIsConfirmOpen(true)
        
        
    }

    // 删除事件
    const itemDeleted = (status) => {
        if (status) {
            setLsApi('')
            setOnRefresh(true)
        }
    }

    // tips
    function toastTips(text, status = 'success') {
        toast({
            title: text,
            description: "",
            status: status,
            duration: 3000,
            isClosable: true,
            position: 'top'
        })
    }

    return (
        <>
            <APIContainer api={lsApi} converter={converter} {...rest}>
                <NamedLayout xname="VStack">
                    <SelectList onItemDeleted={itemDeleted} onItemClick={KVMItemClick}>
                        {children}
                    </SelectList>
                    {addApi ? <PlainAddNew onAddNew={onAddNewClick} /> : <></>}
                </NamedLayout>
            </APIContainer>


            {/* 编辑模态框 */}
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                size='xl'
            >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>新增</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSubmit(validateData)} noValidate>
                            <Stack spacing="2">
                                {
                                    formFields.map((item, index) => (
                                        <FormControl key={`form_${index}`} isInvalid={errors.account}>
                                            <FormLabel htmlFor={item.field}>{item.label}</FormLabel>
                                            <Input bgColor="gray.50" placeholder={item.label} id={item.field}
                                                {...register(item.field, {
                                                    required: item.label
                                                })}
                                            />
                                            <FormErrorMessage>
                                                {errors.account && errors.account.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    ))
                                }

                                <Stack direction='row' spacing={4} align='center'>
                                    <Button width='100px' colorScheme='teal' variant='solid' isLoading={isSubmitting} type='submit' size='sm'>
                                        保存
                                    </Button>
                                    <Button width='100px' colorScheme='teal' variant='outline' onClick={onClose} size='sm'>取消</Button>
                                </Stack>
                            </Stack>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/* 确认模态框 */}
            <Modal isOpen={isConfirmOpen} onClose={onConfirmClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>提示</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontWeight='bold' mb='1rem'>
                            确认绑定参数吗？
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onConfirmClose}>
                            取消
                        </Button>
                        <Button variant='ghost' onClick={editData}>确认</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}