import React, { useState, useEffect } from 'react';
import { history, connect } from 'umi';

import { 
    ChakraProvider,
    Button,
    Stack,
    Text,
} from "@chakra-ui/react"

import UserCheckboxDemo from '@/pages/UserCheckboxDemo/Sandbox';

function Index(props) {

  const { dispatch } = props;
  console.log('CheckboxMoadlDemo props = ', props)

  let checkedList = [];
  const [ selectData, setSelectData ] = useState([]);

  function onOk(){
    if(checkedList && checkedList.length > 0){
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
        <div style={{ width: '300px', minHeight: '100px', background: '#ffffff', padding: '20px'}}>
        
          <Stack align="stretch" spacing={3}>
            <Text fontSize="sm">多选</Text>
          </Stack>

          <div style={{marginBottom:'10px'}}>
            <UserCheckboxDemo onItemClick={(data) => onItemClickHandle(data)}/>
          </div>
          
          <Stack spacing="6">
              <Button colorScheme="teal" onClick={onOk}>确定</Button>
            </Stack>
        </div>
    </ChakraProvider>
  )

}

const mapStateToProps = ({ }) => {
  return {
  };
};

export default connect(mapStateToProps)(Index);