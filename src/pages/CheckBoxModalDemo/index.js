import React, { useState, useEffect } from 'react';
import { history, connect } from 'umi';

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
} from "@chakra-ui/react"

import UserCheckboxDemo from '@/pages/UserCheckboxDemo/Sandbox';

function Index(props) {

  const { dispatch } = props;
  console.log('CheckboxMoadlDemo props = ', props)

  let checkedList = [];
  const [ isOpen, setIsOpen ] = useState(false);
  const [ selectData, setSelectData ] = useState([]);
  const [ onShow, setOnShow ] = useState(false);

  function onOpen() {
    setIsOpen(true);
    setOnShow(false)
  }

  function onClose() {
    setIsOpen(false);
    setOnShow(false);
    checkedList = [];
    setSelectData([]);
  }

  function onOk(){
    setIsOpen(false);
    // setOnShow(true);
    if(checkedList && checkedList.length > 0){
      // setSelectData(checkedList)
      dispatch({
        type: "radioDataModel/changeData",
        payload: {
          list: checkedList,
        },
      })
      
      history.push({
        pathname: '/RadioModalDemo',
        query: {
          list: checkedList
        }
      })
    }
  }
  
  function onItemClickHandle (data) {
    console.log('data111111 = ', data)
    checkedList = data;
  }

  return (
      
    <ChakraProvider>
        <div style={{ width: '200px', minHeight: '100px', background: '#ffffff', padding: '20px'}}>
          <Stack align="stretch" spacing={6}>
            <Button colorScheme="teal" onClick={onOpen}>多选框</Button>
          </Stack>

            {
              onShow ? (
                <>
                  <div style={{marginTop:'10px', marginBottom: '10px'}}>选中内容</div>
                  <Stack spacing={3}>
                      { selectData && selectData.length > 0 && selectData.map((item, index) => {
                        return <Text fontSize="sm" key={index}>{item.name}</Text>
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
                <UserCheckboxDemo onItemClick={(data) => onItemClickHandle(data)}/>
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

const mapStateToProps = ({ }) => {
  return {
  };
};

export default connect(mapStateToProps)(Index);