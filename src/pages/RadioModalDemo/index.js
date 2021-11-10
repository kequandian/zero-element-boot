import React, { useState, useEffect } from 'react';
import { history, connect } from 'umi';
import qs from 'qs';

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

function Index(props) {

  const { radioDataModel, dispatch, location } = props;
  
  // const { list=[] } = qs.parse(location.search.replace('?', ''));

  // const { list } = radioDataModel;
  
  const { list=[] } = location.query;

  // console.log('RadioMoadlDemo list = ', list)

  let selectData = '';
  const [ isOpen, setIsOpen ] = useState(false);
  const [ showData, setShowData ] = useState([]);
  const [ onShow, setOnShow ] = useState(false);

  function onOpen() {
    setIsOpen(true);
    setOnShow(false);
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

  //跳转页面
  function goToCheckboxPage() {
    history.push({
      pathname: '/CheckboxPageDemo',
      query: {
      }
    })
  }

  //修改modal 数据
  function editValew() {
    dispatch({
      type: "radioDataModel/changeData",
      payload: {
        title: "修改123456",
      },
    })
  }

  return (
      
    <ChakraProvider>
        <div style={{width: '200px', minHeight: '100px', background: '#ffffff', padding: '20px'}}>
            <Stack spacing="6">
              <Button colorScheme="teal" onClick={onOpen}>单选框</Button>
              <Button colorScheme="teal" onClick={goToCheckboxPage}>跳转多选页面</Button>
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

            {
              list && list.length > 0 ? (
                <>
                  <div style={{marginTop:'10px', marginBottom: '10px'}}>多选框选中内容</div>
                  <Stack spacing={3}>
                      { list && list.length > 0 && list.map((item, index) => {
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

// 这里的 pageModel 是对应 model 的 namespace
const mapStateToProps = ({ radioDataModel }) => {
  return {
    radioDataModel
  };
};

export default connect(mapStateToProps)(Index);

