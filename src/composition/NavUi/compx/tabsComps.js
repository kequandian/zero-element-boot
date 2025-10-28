import React, { useState, useEffect, useRef } from 'react';
import {
    Box, Spinner, FormControl, FormLabel, Tabs, TabList, TabPanels, Tab, TabPanel,
    Button, useTab, useMultiStyleConfig, Image, Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    FormErrorMessage,
    useToast,
    Radio, RadioGroup
} from "@chakra-ui/react";
import { useForm } from 'react-hook-form';

const promiseAjax = require('@/components/utils/request');
const useTokenRequest = require('@/components/hooks/useTokenRequest');

import tabFormConfig from './tabsformConfig';
require('./index.less')
import pluOn from './icons/plus-on.png';
import pluOff from './icons/plus-off.png';
import minusOn from './icons/minus-on.png';
import minusOff from './icons/minus-off.png';

import { Wrap } from '@/components/layout';

const formItemTypeMap = require('@/components/config/FormItemTypeConfig').get();

export default function Index(props) {

    const { items = [], currentTabIndex = 0, onSwitchTab, isSwitch, cb, navApi } = props;
    const {
        api: { createAPI, getAPI, updateAPI, deleteAPI }
    } = tabFormConfig;

    // const [navCateListData, setNavCateListData] = useState(items)
    const [isLoading, setLoading] = useState(false)
    const [currentId, setCurrentId] = useState('')
    const [currentData, setCurrentData] = useState({})
    const [tabIndex, setTabIndex] = useState(currentTabIndex)
    const [isOpenEditTabModel, setIsOpenEditModel] = useState(false)
    const [isDelOpen, setIsDelOpen] = useState(false)
    const [modelTitle, setModelTitle] = useState('Title');
    const [formData, setFormData] = useState({})

    const [delValue, setDelValue] = useState('')
    const initialRef = useRef()
    const finalRef = useRef()
    const toast = useToast()

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    // useEffect(() => {
    //     console.log('加载')
    //     setTabIndex(0)
    // }, [items]);

    //tab切换
    const switchTab = (item, index) => {
        if (index != tabIndex) {
            setTabIndex(index)
            const queryData = {
                typeId: item.id
            }
            // fetchData(navListApi, queryData)
        }
    }

    //添加tab按钮
    const CustomAddTab = React.forwardRef((props, ref) => {
        // 1. Reuse the `useTab` hook
        const tabProps = useTab({ ...props, ref })
        const isSelected = !!tabProps['aria-selected']

        // 2. Hook into the Tabs `size`, `variant`, props
        const styles = useMultiStyleConfig('Tabs', tabProps)

        return (
            <Button __css={styles.tab} {...tabProps}>
                <Box as='span' mr='0' display='flex' alignItems='center'>
                    {isSelected ? <Image src={pluOn} /> : <Image src={pluOff} />}
                </Box>
                {/* {tabProps.children} */}
            </Button>
        )
    })

    //添加tab按钮
    const CustomDelTab = React.forwardRef((props, ref) => {
        // 1. Reuse the `useTab` hook
        const tabProps = useTab({ ...props, ref })
        const isSelected = !!tabProps['aria-selected']

        // 2. Hook into the Tabs `size`, `variant`, props
        const styles = useMultiStyleConfig('Tabs', tabProps)

        return (
            <Button __css={styles.tab} {...tabProps}>
                <Box as='span' mr='0' display='flex' alignItems='center'>
                    {isSelected ? <Image src={minusOn} /> : <Image src={minusOff} />}
                </Box>
                {/* {tabProps.children} */}
            </Button>
        )
    })


    //获取详情数据
    function getData(id) {
        const api = `${getAPI.replace('(id)', id)}`;
        const queryData = {};
        setLoading(true)
        promiseAjax(api, queryData).then(resp => {
            if (resp && resp.code === 200) {
                setCurrentData(resp.data)
            } else {
                console.error("获取数据失败")
            }
        }).finally(_ => {
            setLoading(false)
        });
    }

    //新增数据
    function postData(values) {

        // let rtValue;
        // let formatApi = `${createAPI}`;
        // if(createAPI.indexOf('(') != -1){
        //   rtValue = handleChangeApiParam(createAPI)
        //   formatApi = createAPI.replace(`(${rtValue})`, currentTabItem[rtValue]);
        // }
        // const api = `${formatApi}`;
        const api = `${createAPI}`;
        const queryData = { ...values, ...formData };
        promiseAjax(api, queryData, { method: 'POST' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('新增成功')
                cb(true)
            } else {
                console.error("新增失败 === ", resp)
                toastTips('新增失败', 'error')
            }
        }).finally(_ => {
            setIsOpenEditModel(false)
        });
    }

    //修改数据
    function putData(values, id) {

        // let rtValue;
        // let formatApi = `${updateAPI}`;
        // if(updateAPI.indexOf('(') != -1){
        //   rtValue = handleChangeApiParam(updateAPI)
        //   formatApi = updateAPI.replace(`(${rtValue})`, currentTabItem[rtValue]);
        // }
        // const api = `${formatApi}`;
        const api = `${updateAPI.replace('(id)', id)}`;
        const queryData = { ...values, ...formData };
        promiseAjax(api, queryData, { method: 'PUT' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('修改成功')
                cb(true)
            } else {
                console.error("修改失败 == ", resp)
                toastTips('修改失败', 'error')
            }
        }).finally(_ => {
            setIsOpenEditModel(false)
        });
    }

    //删除确认提示
    function showDelModel(item) {
        if (deleteAPI && item && item.id) {
            setCurrentId(item.id)
            setIsDelOpen(true)
        } else {
            console.log('未设置 deleteAPI 或 item 数据异常')
        }
    }

    //删除数据
    function delData(values) {

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

    //处理额外提交的字段和值
    function handleFormData(data) {
        const newFormData = {
            ...formData,
            ...data
        }
        setFormData(newFormData)
    }

    //添加导航
    function addNavItem() {
        setModelTitle('添加类别')
        setIsOpenEditModel(true)
    }

    //删除导航
    function delNavItem() {
        setModelTitle('删除类别')
        setIsDelOpen(true)
    }

    //关闭模态框
    function onCloseEditTabModel() {
        reset()
        setIsOpenEditModel(false)
    }

    //根据type 加载表单组件
    function handleFormItem(list) {
        const fieldList = list;

        return fieldList.map((item, index) => {

            const { label, field, type, rules = { isRequired:false }  } = item;

            const C = formItemTypeMap[type]

            return <FormControl isRequired={rules.isRequired} isInvalid={rules.isRequired && rules.isRequired && errors[field]} key={`${index}_i`}>
                <FormLabel htmlFor={field}>{label}</FormLabel>
                <C {...item} register={register} errors={errors} defaultValue={currentData[field]} onChange={handleFormData} />
                <FormErrorMessage>
                    {errors[field] && errors[field].message}
                </FormErrorMessage>
            </FormControl>
        })
    }

    //验证数据
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

    // 内部维护的导航分类数据
    const [navItems, setNavItems] = useState([])
    // 通过 useTokenRequest 获取导航分类
    const [navData] = useTokenRequest({ api: navApi });
    useEffect(() => {
        if (navData !== '') {
            const list = Array.isArray(navData) ? navData : (navData && Array.isArray(navData.records) ? navData.records : []);
            const newList = [...list];
            if (isSwitch) {
                newList.push({ id: '-1' });
                newList.push({ id: '-2' });
            }
            setNavItems(newList);
            if (newList.length > 0 && onSwitchTab) {
                onSwitchTab(newList[0], 0);
            }
        }
    }, [navData, isSwitch])

    // 通过 useTokenRequest 封装详情数据获取
    const [detailData, , changeHookData] = useTokenRequest({ api: '' }, (data) => {
    setCurrentData(data);
    setLoading(false);
    });
    
    useEffect(() => {
    if (detailData !== '') {
    setLoading(false);
    }
    }, [detailData]);

    // 获取详情数据（改为通过 hook）
    function getDataByHook(id) {
        if (!getAPI) return;
        const api = `${getAPI.replace('(id)', id)}`;
        setLoading(true);
        changeHookData({ id, api });
    }

    // Tab 点击逻辑（编辑模式打开详情，普通模式回调父组件）
    function handleSwitchTab(item, index) {
        setTabIndex(index);
        if (isSwitch) {
            setModelTitle('编辑类别');
            setIsOpenEditModel(true);
            setCurrentId(item.id);
            if (item && item.id) {
                getDataByHook(item.id);
            }
        } else {
            if (onSwitchTab) {
                onSwitchTab(item, index);
            }
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

    // 优先使用外部传入的 items，否则使用内部拉取的 navItems
    const displayItems = (items && items.length > 0) ? items : navItems

    return (
        <>

            {displayItems && displayItems.length > 0 ? (
                <Tabs variant='enclosed' defaultIndex={tabIndex}>
                    <TabList>
                        {displayItems.map((item, index) => {
                            if (item.id === '-1' && isSwitch) {
                                return <CustomAddTab key={`${index}_tab`} onClick={() => addNavItem()}></CustomAddTab>
                            }
                            if (item.id === '-2' && isSwitch) {
                                return <CustomDelTab key={`${index}_tab`} onClick={() => delNavItem()}></CustomDelTab>
                            }
                            return <Tab key={`${index}_tab`} onClick={() => handleSwitchTab(item, index)}>{item.name}</Tab>
                        })}
                    </TabList>
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
                                            {displayItems && displayItems.map((item, index) => {
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