import React, { useState } from 'react';
import { useToast, Button, Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import { bindingConvert } from '@/components/gateway/Binding'
import doFilter from '@/components/gateway/doFilter.mjs';
import promiseAjax from '@/components/utils/request';
import { LS } from 'zero-element/lib/utils/storage';
import { formatParams } from '@/components/utils/tools';

/**
 * 
 * @param {string} api 提交api
 * @param {object} converter 转换提交的body 
 * @param {function} onActionCompleted 访问完成后回调事件
 * 
 */

export default function DeleteAction(props) {

    const { label='Delete', api, apiBody, converter, onActionCompleted } = props;

    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLoading, setLoading] = useState(false)

    //新增组件
    const submitData = (item) => {
        setLoading(true)
        if(!api){
            toastTips('未设置api', 'error')
            return
        }

        const _api = api

        const getStrogeData = LS.get('commonData') || {}
        let _convertData = {}
        if(converter && JSON.stringify(converter) != '{}'){
            const bindingData = bindingConvert(converter, {...item, ...getStrogeData})
            _convertData = doFilter(converter, bindingData)
        }
        
        let _apiBody = {}
        if(apiBody && JSON.stringify(apiBody) != '{}'){
            _apiBody = formatParams(apiBody, {...item, ...getStrogeData})
        }

        let query = {
            ..._convertData,
            ..._apiBody
        }

        return promiseAjax(_api, query, { method: 'DELETE' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips(`移除成功`)
                if(onActionCompleted){
                    onActionCompleted(resp.data)
                }
            } else {
                toastTips(`移除失败`, 'error')
            }
        }).finally(_ => {
            setLoading(false)
        });

    }

    const onBtnClick = () => {
        onOpen()
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
        <Button onClick={onBtnClick}>
            {label}
        </Button>
        
        <Modal isOpen={isOpen} onClose={onClose}
            closeOnOverlayClick={false}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>提示</ModalHeader>
                {/* <ModalCloseButton /> */}
                <ModalBody>
                <div>确定删除吗?</div>
                </ModalBody>

                <ModalFooter>

                <Stack direction='row' spacing={4} align='center'>
                    <Button isLoading={isLoading} variant='ghost' onClick={onClose}>取消</Button>
                    <Button isLoading={isLoading} colorScheme='blue' mr={3} onClick={() => submitData()}>
                        确定
                    </Button>
                </Stack>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    )
}