import React, { useState } from 'react';
import { LightingCart } from '@/components/cart';
import { 
    Stack,
    Button,
    
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useToast,
} from '@chakra-ui/react';
import { formatParams } from '@/components/utils/tools';
const promiseAjax = require('@/components/utils/request');



const DeleteIcon = () => {
    return (
        <svg t="1712634112171" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6052" width="25" height="25"><path d="M509.9 71.1C265.3 71.1 67 269.4 67 514c0 244.6 198.3 443 442.9 443 244.6 0 442.9-198.3 442.9-442.9 0.1-244.7-198.3-443-442.9-443z m181.6 565.8c7.5 7.5 12.2 17.9 12.2 29.3 0 23-18.6 41.5-41.5 41.5-11.4 0-21.8-4.6-29.3-12.2l-123-122.7-122.8 122.9c-7.6 7.5-17.9 12.2-29.4 12.2-22.9 0-41.5-18.6-41.5-41.5 0-11.5 4.6-21.8 12.1-29.3l122.9-123-122.9-123c-7.5-7.5-12.1-17.9-12.1-29.4 0-22.9 18.6-41.5 41.5-41.5 11.4 0 21.8 4.6 29.3 12.1l122.8 122.9 122.9-122.9c7.5-7.5 17.9-12.1 29.3-12.1 22.9 0 41.5 18.6 41.5 41.5 0 11.5-4.6 21.9-12.2 29.4L568.7 514l122.8 122.9z" fill="#bfbfbf" p-id="6053" data-spm-anchor-id="a313x.search_index.0.i13.a1c13a81KTjKop" className="selected"></path></svg>
    )
}

/**
 * 
 * 
 */

export default function DeleteBtn(props) {

    const { props: otherProps, onItemDeleted, indicatorData, ...rest  } = props;

    const { action='' } = otherProps;

    
    const toast = useToast()
    const [isDelOpen, setIsDelOpen] = useState(false)
    const [isLoading, setLoading] = useState(false)

    function showDelModel (e) {
        // 阻止事件冒泡到父组件
        e.stopPropagation(); 
        // 打开删除提示
        setIsDelOpen(true)
    }

    //删除
    function delAction () {
        setLoading(true) 
        const api = formatParams(action, indicatorData);

        const queryData = {};
        promiseAjax(api, queryData, { method: 'DELETE' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('删除成功')
                setIsDelOpen(false)
                if(onItemDeleted){
                    onItemDeleted(true)
                }
            } else {
                console.error("删除失败 == ", resp)
                if(onItemDeleted){
                    onItemDeleted(false)
                }
                toastTips('删除失败', 'error')
            }
        })
        .finally(_=>{
            setLoading(false)
        });
    }

    // tips
    function toastTips(text, status = 'success') {
        toast({
            title: text,
            description: "",
            status: status,
            duration: 2500,
            isClosable: true,
            position: 'top'
        })
    }

    return (
        <LightingCart>
            <div onClick={showDelModel}>
                <DeleteIcon/>
            </div>

            <Modal isOpen={isDelOpen} onClose={() => setIsDelOpen(false)}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>提示</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <div>确定删除吗?</div>
                </ModalBody>

                <ModalFooter>

                <Stack direction='row' spacing={4} align='center'>
                    <Button isLoading={isLoading} variant='ghost' onClick={() => setIsDelOpen(false)}>取消</Button>
                    <Button isLoading={isLoading} colorScheme='blue' mr={3} onClick={() => delAction()}>
                        确定
                    </Button>
                </Stack>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </LightingCart>
    )
}