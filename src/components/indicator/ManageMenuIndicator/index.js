import React, {useState, useContext } from 'react';
import { 
    Stack,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useToast,
} from '@chakra-ui/react';
import styles from './index.less';
import { MoreIcon, UpdateIcon, DelIcon } from './icons';
import { formatParams } from '@/components/utils/tools';
import { getEndpoint } from '@/components/config/common';
const promiseAjax = require('@/components/utils/request');

/**
 * 使用例子
 * cart:{},
   indicator:{
    xname:'DownloadIndicator',
    props:{
      action: '/dev/logs/down/log?fileName=(fieldName)'
    },
    binding: {
      "value":"fieldName"
    }
   },
   container:{}
 * 
 * @param { object } indicatorData 为上述 binding 处理的参数
 * @param { function } onItemAdded 新增
 * @param { function } onItemChanged 修改
 * @param { function } onItemDeleted 删除
 * @param { function } onItemIndicated 自定义传参, 例子： onItemIndicated("indicator": 'MangeMenuList', id: 'deleted',  data{})
 * @param { object } action 传访问API 参数为： createAPI, getAPI, updateAPI, deleteAPI
 * 
 */

export default function Index(props) {

    const { 
        children, 
        action = {},
        indicatorData,
        onItemDeleted, onItemAdded, onItemChanged, onItemIndicated,
    } = props;

    const { 
        createAPI, getAPI, updateAPI, deleteAPI,
    } = action;

    console.log('props = ', props)
    
    const toast = useToast()
    const endpoint = getEndpoint()
    const [isDelOpen, setIsDelOpen] = useState(false)
    const [isLoading, setLoading] = useState(false)

    // const ctx = useContext(containerContext);

    // console.log('ctx = ', ctx)
    function updateAction(){
        if(onItemChanged){
            onItemChanged(indicatorData)
        }
    }

    function showDelModel () {
        setIsDelOpen(true)
    }

    //删除
    function delAction () {
        setLoading(true)
        const api = formatParams(deleteAPI, indicatorData);
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
        <div className={styles.menuIndicator} style={{width:'100%'}}>
            {
                React.Children.map(children, child => (
                    child
                ))
            }
            <div className={styles.menuIconContainer}>
                <Menu placement='left'>
                    <MenuButton>
                        <div className={styles.menuIcon}>
                            <MoreIcon />
                        </div>
                    </MenuButton>
                    <MenuList minWidth={120}>
                        <MenuItem icon={<UpdateIcon />} onClick={()=> updateAction()}>
                            编辑
                        </MenuItem>
                        <MenuItem icon={<DelIcon />} onClick={()=>showDelModel()}>
                            删除
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>

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
