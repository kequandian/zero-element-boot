import React, { useState, useEffect } from 'react';

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
    Text
} from "@chakra-ui/react"

import UserCheckboxDemo from '@/pages/UserCheckboxDemo/Sandbox';

export default function Index(props) {

  const [ isOpen, setIsOpen ] = useState(false);
  const [ selectData, setSelectData ] = useState([]);
  const [ onShow, setOnShow ] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  function onOk(){
    setIsOpen(false);
    setOnShow(true)
  }
  
  function onItemClickHandle (data) {
    console.log('data111111 = ', data)
    setSelectData(data)
  }

  return (
      
    <ChakraProvider>
        <div style={{width: '200px', minHeight: '100px', background: '#ffffff', padding: '20px'}}>
            <Button colorScheme="teal" onClick={onOpen}>Button</Button>

            {
              onShow ? (
                <>
                  <div style={{marginTop:'10px'}}>选中内容</div>
                  <Stack spacing={3}>
                      { selectData && selectData.length > 0 && selectData.map((item, index) => {
                        <Text fontSize="sm" key={index}>{item.name}</Text>
                      })}
                  </Stack>
                </>
              ):<></>
            }
            
        </div>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>多选框</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <UserCheckboxDemo onItemClick={onItemClickHandle}/>
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
