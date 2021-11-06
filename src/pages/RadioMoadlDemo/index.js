import React, { useState, useEffect } from 'react';

import { history } from 'umi';

import { 
    ChakraProvider,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Stack,
    Text,
    ButtonGroup
} from "@chakra-ui/react"

import UserRadioDemo from '@/pages/UserRadioDemo/Sandbox';

export default function Index(props) {

  let selectData = '';
  const [ isOpen, setIsOpen ] = useState(false);
  const [ showData, setShowData ] = useState([]);
  const [ onShow, setOnShow ] = useState(false);

  function onOpen() {
    setIsOpen(true);
    setOnShow(false)
  }

  function onClose() {
    setIsOpen(false);
    setOnShow(false);
    selectData = [];
    setShowData([]);
  }

  function onOk(){
    setIsOpen(false);
    setOnShow(true);
    if(selectData && JSON.stringify(selectData) != '{}'){
      setShowData(selectData)
    }
  }
  
  function onItemClickHandle (data) {
    console.log('data111111 = ', data)
    selectData = data;
  }

  function goToCheckboxPage() {
    history.push('/CheckBoxMoadlDemo')
  }

  return (
      
    <ChakraProvider>
        <div style={{width: '200px', minHeight: '100px', background: '#ffffff', padding: '20px'}}>
            <Stack spacing="6">
              <Button colorScheme="teal" onClick={onOpen}>单选框</Button>
              {/* <Button colorScheme="teal" onClick={goToCheckboxPage}>跳转多选框</Button> */}
            </Stack>
            {
              onShow ? (
                <>
                  <div style={{marginTop:'10px', marginBottom: '10px'}}>选中内容</div>
                  <Stack spacing={3}>
                        <Text fontSize="sm">{showData.name}</Text>
                  </Stack>
                </>
              ):<></>
            }
            
        </div>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>单选框</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <UserRadioDemo onItemClick={(data) => onItemClickHandle(data)}/>
            </ModalBody>
            <ModalFooter>
                <Button variant="ghost" onClick={onClose}>关闭</Button>
                <Button colorScheme="blue" mr={3} onClick={onOk}> 确定 </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    </ChakraProvider>
  )

}
