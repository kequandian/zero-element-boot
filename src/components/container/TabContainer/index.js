import React, { useState, useEffect, useRef } from 'react';
import {
    Box, Spinner, FormControl, FormLabel, Tabs, TabList, TabPanels, Tab, TabPanel,
    Button, useTab, useMultiStyleConfig, Image, Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormErrorMessage,
    useToast,
    Radio, RadioGroup
} from "@chakra-ui/react";
import { useForm } from 'react-hook-form';

const promiseAjax = require('@/components/utils/request');

import useLayout from '@/components/hooks/useLayout';
import tabFormConfig from './config/tabsformConfig';
require('./index.less')
import pluOn from './icons/plus-on.png';
import pluOff from './icons/plus-off.png';
import minusOn from './icons/minus-on.png';
import minusOff from './icons/minus-off.png';

import { Wrap } from '@/components/layout';

const FormItemTypeMap = require('@/components/config/FormItemTypeConfig').get();

export default function Index(props) {

    const { children, items = [], onSwitchTab, tabIndex = 0, isSwitch = false, onItemDeleted: cb } = props
    const [isLoading, setLoading] = useState(false)
    const [isOpenEditTabModel, setIsOpenEditModel] = useState(false)
    const [isDelOpen, setIsDelOpen] = useState(false)
    const [currentData, setCurrentData] = useState({})
    const [modelTitle, setModelTitle] = useState('')
    const [currentId, setCurrentId] = useState('')
    const [delValue, setDelValue] = useState('')

    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const toast = useToast()

    const [layoutRef, { getClassName }] = useLayout();

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

    useEffect(() => {
        setDelValue(items && items.length > 0 ? items[0].componentOption : '')
    }, [])

    function getData(id) {
        setLoading(true)
        const api = `${tabFormConfig.api.getAPI.replace('(id)', id)}`;
        const queryData = {};
        promiseAjax(api, queryData).then(resp => {
            if (resp && resp.code === 200) {
                setCurrentData(resp.data)
            } else {
                console.error("查询失败 == ", resp)
                toastTips('查询失败', 'error')
            }
        }).finally(_ => {
            setLoading(false)
        })
    }

    function postData(values) {
        setLoading(true)
        const api = tabFormConfig.api.createAPI;
        const queryData = { ...values };
        promiseAjax(api, queryData, { method: 'POST' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('新增成功')
                setIsOpenEditModel(false)
            } else {
                console.error("新增失败 == ", resp)
                toastTips('新增失败', 'error')
            }
        }).finally(_ => {
            setLoading(false)
        })
    }

    function putData(values, id) {
        const api = `${tabFormConfig.api.updateAPI.replace('(id)', id)}`;
        const queryData = { ...values };
        promiseAjax(api, queryData, { method: 'PUT' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('修改成功')
                setIsOpenEditModel(false)
            } else {
                console.error("修改失败 == ", resp)
                toastTips('修改失败', 'error')
            }
        })
    }

    function delData(values) {
        const { deleteAPI } = tabFormConfig.api;
        const api = `${deleteAPI.replace('(id)', delValue)}`;
        const queryData = { };
        promiseAjax(api, queryData, { method: 'DELETE' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('删除成功')
                cb(true)
            } else {
                console.error("删除失败 == ", resp)
                toastTips('删除失败', 'error')
            }
        }).finally(_ => {
            setIsOpenEditModel(false)
        });
    }

    function handleFormData(data) {
        const newFormData = {
            ...formData,
            ...data
        }
        setFormData(newFormData)
    }

    function addNavItem() {
        setModelTitle('添加类别')
        setIsOpenEditModel(true)
    }

    function delNavItem() {
        setModelTitle('删除类别')
        setIsDelOpen(true)
    }

    function onCloseEditTabModel() {
        reset()
        setIsOpenEditModel(false)
    }

    function handleFormItem(list) {
        const fieldList = list;

        return fieldList.map((item, index) => {

            const { label, field, type, rules = { isRequired:false }  } = item;

            const C = FormItemTypeMap[type]

            return <FormControl isRequired={rules.isRequired} isInvalid={rules.isRequired && rules.isRequired && errors[field]} key={`${index}_i`}>
                <FormLabel htmlFor={field}>{label}</FormLabel>
                <C {...item} register={register} errors={errors} defaultValue={currentData[field]} onChange={handleFormData} />
                <FormErrorMessage>
                    {errors[field] && errors[field].message}
                </FormErrorMessage>
            </FormControl>
        })
    }

    function validateData(values) {

        return new Promise((resolve) => {
            setTimeout(() => {
                if (currentId) {
                    putData(values, currentId)
                } else {
                    postData(values)
                }
                resolve()
            }, 2000)
        })
    }

    function handleSwitchTab(item, index) {
        if (isSwitch) {
            getData(item.id)
            setCurrentId(item.id)
            setModelTitle('编辑导航类别')
            setIsOpenEditModel(true)
        } else {
            onSwitchTab(item, index)
        }
    }

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

            {items && items.length > 0 ? (
                <Tabs variant='enclosed' style={{ width: '1000px' }} defaultIndex={tabIndex}>
                    <TabList>
                        {items.map((item, index) => {
                            if (item.id === '-1' && isSwitch) {
                                return <CustomAddTab key={`${index}_tab`} onClick={() => addNavItem()}></CustomAddTab>
                            }
                            if (item.id === '-2' && isSwitch) {
                                return <CustomDelTab key={`${index}_tab`} onClick={() => delNavItem()}></CustomDelTab>
                            }
                            return <Tab key={`${index}_tab`} onClick={() => handleSwitchTab(item, index)}>{item.name}</Tab>
                        })}
                    </TabList>
                    <TabPanels>
                        {items.map((item, index) => (
                            <TabPanel key={`${index}_tabPanel`} >
                                {isLoading ? (
                                    <Spinner />
                                ) : (
                                    <Box>
                                        {
                                            React.Children.map(children, child => {
                                                return (
                                                    React.isValidElement(Child) ?
                                                        React.cloneElement(Child, {
                                                            key:i,
                                                            index:i
                                                        })
                                                    : <Child key={i} index={i} />
                                                )
                                            })
                                        }
                                    </Box>
                                )}
                                
                            </TabPanel>
                        ))}

                    </TabPanels>
                </Tabs>
            ) : null}

            {/* 编辑模态框 */}
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpenEditTabModel}
                onClose={onCloseEditTabModel}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{modelTitle}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <form onSubmit={handleSubmit(validateData)} noValidate>
                                <Stack spacing="2">
                                    {
                                        handleFormItem(tabFormConfig.fields)
                                    }
                                    <Stack direction='row' spacing={4} align='center'>
                                        <Button width='100px' colorScheme='teal' variant='solid' isLoading={isSubmitting} type='submit'>
                                            保存
                                        </Button>
                                        <Button width='100px' colorScheme='teal' variant='outline' onClick={onCloseEditTabModel}>取消</Button>
                                    </Stack>
                                </Stack>
                            </form>
                        )}

                    </ModalBody>
                </ModalContent>
            </Modal>


            {/* 删除提示模态框 */}
            <Modal isOpen={isDelOpen} onClose={() => setIsDelOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{modelTitle}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <form onSubmit={handleSubmit(delData)}>
                            <Wrap direction='column' xgap='8px'>
                                <FormControl>
                                    <FormLabel>类别</FormLabel>
                                    <RadioGroup onChange={setDelValue} value={delValue}>
                                        <Wrap flexFlow='row-wrap' xgap='8px'>
                                            {items && items.map((item, index) => {
                                                if(item.id != '-1' && item.id != '-2'){
                                                   return <Radio value={item.id} key={`${index}_radio`}>{item.name}</Radio>
                                                }
                                            })}
                                        </Wrap>
                                    </RadioGroup>
                                </FormControl>
                                <Wrap align='center' xgap='12px'>
                                    <Button width='100px' colorScheme='teal' variant='solid' isLoading={isSubmitting} type='submit'>
                                        保存
                                    </Button>
                                    <Button width='100px' colorScheme='teal' variant='outline' onClick={()=>setIsDelOpen(false)}>取消</Button>
                                </Wrap>
                            </Wrap>
                         </form>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </>
    )

}