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
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { APIContainer, NamedLayout } from '@/components';
import promiseAjax from '@/components/utils/request';
import SelectList from '@/components/list/SelectList';
import PlainAddNew from '@/components/presenter/button/PlainAddNew';

/**
 * @param {*} props 
 * @param {string}} listApi 列表api
 * @param {object}} converter listApi绑定数据
 * @param {string}} addApi 新增api
 * @param {object}} addApiBody 新增api提交数据
 * @param {string}} newKeyBinding 输入的值， 作为新增api提交字段
 * @param {string}} newValueBinding 输入的值， 作为新增api提交字段
 */

export default function KeyValueManageList(props) {

    const {
        children,
        listApi='',
        converter={},
        addApi = '',
        addApiBody={},
        newKeyBinding = '',
        newValueBinding = '',
        onItemClick,
        ...rest
    } = props

    //表单填写项
    const formFields = [
        { label: '键', field: 'newKey' },
        { label: '值', field: 'newValue' },
    ]
    const [ lsApi, setLsApi ] = useState(listApi)
    const [ isOpen, setIsOpen ] = useState(false)
    const [ onRefresh, setOnRefresh ] = useState(false)

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
        if(onRefresh){
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
        
        if(!addApi){
            toastTips('未设置 addApi ', 'warning')
            return
        }

        if(!newKeyBinding){
            toastTips('未设置 newKeyBinding 提交字段', 'warning')
            return
        }

        if(!newValueBinding){
            toastTips('未设置 newValueBinding 提交字段', 'warning')
            return
        }
        
        const queryData = {
            ...addApiBody,
        }
        queryData[newKeyBinding]=values.newKey
        queryData[newValueBinding]=values.newValue
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
                toastTips('新增失败', 'error')
            }
        });
    }

    const KVMItemClick = (item) => {
        if(onItemClick){
            onItemClick(item)
        }else{
            // TODO 组件内部处理点击事件
        }
    }

    // 删除事件
    const itemDeleted = (status) => {
        if(status){
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
                    <PlainAddNew onAddNew={onAddNewClick} />
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
        </>
    )

}