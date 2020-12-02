import React, { useState, useEffect } from 'react';
import { Alert, Button, Layout, Row, Col } from 'antd';

const { Content } = Layout;

export default function (props) {

  console.log('新组件 props = ', props)

  const { name, items, tabs } = props;

  const [ count, setCount ] = useState(0);
  const [ btnLoading, setBtnLoading ] = useState(false);

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // }, [count]);

  const changeLoading = () => {
    setBtnLoading(true)
  }

  if(btnLoading){
    setTimeout(() => {
      setBtnLoading(false)
    }, 3000);
  }

  return (

    <Content style={{margin: '16px', padding: '20px', background: '#FFFFFF', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
          
      <Row spen={24}>
        <h2>{items.title}</h2>
      </Row>

        <Row>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
          Click me
          </button>
        </Row>

        <Row>
          <Col style={{marginRight:'16px'}}>
          <Button type="primary" ghost loading={btnLoading} onClick={() => changeLoading()}>
            数据库对比
          </Button>
        </Col>
        </Row>
        {/* <div style={{height:20}}></div> */}
        {/* {resultMessage ? (
          <Alert
            closable
            onClose={handleClose}
            message={<pre>{resultMessage}</pre>}
          />
        ) : null} */}
      </Content>
  
    
  )
  

}