import React, { useState, useEffect, useRef } from 'react';
import {
    Button, useToast, Input,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import { APIContainer, NamedLayout, NamedContainer, NamedCart } from '@/components';
import promiseAjax from '@/components/utils/request';
import { bindingConvert } from '@/components/gateway/Binding'
import doFilter from '@/components/gateway/doFilter.mjs';
import PreviewAutoLayout from '@/components/PreviewAutoLayout';

/**
 * @param {*} props 
 * @param {object}} converter 绑定Drawer加载参数
 * @param {string}} layoutName tab列表layoutMame
 */

export default function DrawerContainer(props) {

    const {
        children,
        layoutName='',
        converter,
        postApiBody,
        moduleId,
        ...rest
    } = props
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ currentNavItem, setCurrentNavItem ] = useState('')
    const [ currentDrawerItem, setCurrentDrawerItem ] = useState('')
    const [ onRefresh, setOnRefresh ] = useState(false)
    const Child = children && React.Children.only(children);

    const toast = useToast()

    useEffect(_ => {
        if(onRefresh){
            setOnRefresh(false)
        }
    }, [onRefresh])

    const handleChangeData = () => {
        promiseAjax(addApi, queryData, { method: 'POST' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('操作成功')
                setLsApi('')
                setOnRefresh(true)
                onClose()
            } else {
                console.error("操作失败 === ", resp)
                toastTips('操作失败', 'error')
            }
        });
    }


    const onNavItemClick = (item) => {
        // console.log('onNavItemClick item = ', item)   
        if(item.isSelected){
            const convertData = bindingConvert(converter, item)
            const filterData = doFilter(converter, convertData)
            console.log('convertData = ', converter, item, convertData)         
            console.log('filterData = ', filterData)         
            setCurrentNavItem(filterData)
            onOpen(true)
        }
    }

    const onDrawerItemClick = (item) => {
        console.log('onDrawerItemClick = ', item)
        if(item.isSelected){
            setCurrentDrawerItem(item)
        }
    }

    const onDrawerOk = () => {
        handleChangeData()
    }


    //当所有现有节点已完成动画输出时触发
    const loadedDrawerData = () => {

        //TODO
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
            <NamedLayout xname="VStack" {...rest}>
                {layoutName?(
                    <PreviewAutoLayout layoutName={layoutName} moduleId={moduleId} onItemClick={onNavItemClick}  />
                ):<></>}


            </NamedLayout>

            <Drawer
                size='xl'
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                closeOnOverlayClick={false}
                onCloseComplete={loadedDrawerData}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>切换组件</DrawerHeader>

                <DrawerBody>
                    <PreviewAutoLayout {...currentNavItem} moduleId={moduleId} onItemClick={onDrawerItemClick}  />
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                    取消
                    </Button>
                    <Button colorScheme='blue' onClick={onDrawerOk}>确定</Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )

}