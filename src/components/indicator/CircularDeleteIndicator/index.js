import React, { useState } from 'react';
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
require('./index.less')

/**
 * 使用例子
 * cart:{},
   indicator:{
    xname:'CircularDeleteIndicator',
    props:{
      action: '/openapi/lc/apis/(id)',
      isDisabled: 'edit'
    },
    binding: {
      "id":"id",
    }
   },
   container:{}
 * 
 * @param { object } indicatorData 为上述 binding 处理的参数
 * @param { function } onItemDeleted 删除
 * @param { string } action 删除API  
 * @param { string } isDisabled 显示删除按钮
 * 
 */

export default function CircularDeleteIndicator(props) {

    const { 
        children, 
        action,
        indicatorData,
        onItemDeleted,
        isDisabled,
        ...rest
    } = props;

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
        // setLoading(true) 
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
        <div className='del_indicator_container' style={{width:'100%'}}>
            {
                React.Children.map(children, child => (
                    child
                ))
            }
            {
                isDisabled ? (
                    <div className='del_icon_container' style={{...rest}}>
                        <div className='del_icon' onClick={(e)=>showDelModel(e)}>
                            <svg t="1711613887763" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5148" width="20" height="20">
                                <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#8F9EAC" p-id="5149"></path>
                                <path d="M512 466.752l158.4-158.4 45.248 45.248L557.248 512l158.4 158.4-45.248 45.248L512 557.248l-158.4 158.4-45.248-45.248L466.752 512 308.352 353.6l45.248-45.248L512 466.752z" fill="#FFFFFF" p-id="5150"></path>
                            </svg>
                        </div>
                    </div>
                ):<></>
            }

            {/* 删除提示模态框 */}
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
        </div>
    )
}
