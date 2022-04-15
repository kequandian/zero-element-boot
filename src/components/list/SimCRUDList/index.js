import React, { useRef, useState, useEffect } from 'react';
import { history } from 'umi';
import { useSize } from 'ahooks';
import { useForm } from 'react-hook-form';
import useLayout from '@/components/hooks/useLayout';
// import ContainerContext from '@/components/AutoX/ContainerContext';

import {
  ChakraProvider, Flex, Box, VStack, Spacer, Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input, // 文本框
  Stack, // 布局组件 设置子元素坚决
  FormControl, // 未表单元素添加动态效果 如校验 禁用等
  FormLabel, // label
  FormErrorMessage,
  Spinner
} from "@chakra-ui/react";
import promiseAjax from '@/components/utils/request';

import { InputCompx } from './formItemCompx'
// import InputCompx from './formItemCompx/InputCompx'

require('./index.less');

const formItemMap = {
  input: InputCompx
}

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjE2IiwidXNlcklkIjoiNCIsInRlbmFudE9yZ0lkIjoxNiwiYWNjb3VudCI6ImFkbWluIiwidXNlclR5cGUiOjAsImRldlVzZXJUeXBlIjowLCJiVXNlclR5cGUiOiJTWVNURU0iLCJpYXQiOjE2NDk5MTg5MjEsImp0aSI6IjQiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MDE3ODEyMX0.xsucJ55Y8mNKGfow38Ey6nTm9Zz0Cei2mieDsDpQoubAPOZ4Y0T1KQyYjwDMRK3NtuIbMre40aAuhy26GMtAlg'

/**
 * 列表属性{template}包括 [布局, Cart, 分隔线, 数据转换 [,子组件] ]
 * 简单列表仅向子组件传递数据源以及 子组件属性
 * @param {*} props 
 * @param {object} layout  布局
 * @param {array}} items,dataSource
 * 
 * @param { path: 跳转页面, model: 弹出模态框 } navigation 
 * @param { 回调方法 } cb 
 * @param { 切换CRUD开关 } isSwtich
 * 
 */
export default function AddMoreList(props) {

  const { children, layout, items, dataSource = items, navigation, onItemClick, cb, isSwtich = true, ...rest } = props;

  const { api: { createAPI, getAPI, updateAPI, deleteAPI } } = navigation.model;

  const [layoutRef, { getClassName, getStyles }] = useLayout();

  const [isOpen, setIsOpen] = useState(false)
  const [currentId, setCurrentId] = useState('')
  const [currentData, setCurrentData] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [modelTitle, setModelTitle] = useState('Title')

  const containerRef = useRef();
  const size = useSize(containerRef);

  const initialRef = useRef()
  const finalRef = useRef()

  const Child = React.Children.only(children);

  //根据 id 获取数据
  useEffect(() => {

    if (getAPI && currentId) {
      getData(currentId)
    }

  }, [currentId]);

  // 检查数据是否有效
  if (!(dataSource && Array.isArray(dataSource))) {
    return tips(dataSource)
  }

  // 列表 item 点击事件
  function clickAction(item) {
    if (navigation) {
      if (navigation.path) {
        const nav = navigation.detail;
        if (nav.indexOf('(id)') === -1) {
          history.push({
            pathname: nav,
            query: {
              itemData: item
            }
          })
        } else if (nav.indexOf('(id)') > -1) {
          const formatNav = nav.replace('(id)', item.id);
          history.push({
            pathname: formatNav,
            query: {
            }
          })
        }
      } else if (navigation.model && isSwtich) {
        setModelTitle('编辑')
        setCurrentId(item.id)
        setIsOpen(true)
      } else if (onItemClick) {
        onItemClick(item)
      }
    } else if (onItemClick) {
      onItemClick(item)
    }
  }

  // 新增 点击事件
  function clickAddAction(nav) {
    if (nav.path) {
      history.push({
        pathname: navigation.path,
        query: {
        }
      })
    } else if (nav.model) {
      setModelTitle('添加')
      setCurrentId('')
      setIsOpen(true)
    }

  }

  //关闭模态框
  function onClose() {
    reset()
    setCurrentData({})
    setIsOpen(false)
  }

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  function validateData(values) {

    return new Promise((resolve) => {
      setTimeout(() => {
        if (currentId) {
          putData(values, currentId)
        } else {
          postData(values)
        }
        resolve()
      }, 2000)
    })
  }

  //获取详情数据
  function getData(id) {
    const api = `http://app1.console.smallsaas.cn:8001${getAPI.replace('(id)', id)}`;
    const queryData = {};
    setLoading(true)
    promiseAjax(api, queryData, { token }).then(resp => {
      if (resp && resp.code === 200) {
        setCurrentData(resp.data)
      } else {
        console.error("获取数据失败")
      }
      setLoading(false)
    });
  }

  //新增数据
  function postData(values) {
    const api = `http://app1.console.smallsaas.cn:8001${createAPI}`;
    const queryData = { ...values };
    promiseAjax(api, queryData, { method: 'POST', token }).then(resp => {
      if (resp && resp.code === 200) {
        cb(true)
        setIsOpen(false)
      } else {
        console.error("提交失败")
      }
    });
  }

  //修改数据
  function putData(values, id) {
    const api = `http://app1.console.smallsaas.cn:8001${updateAPI.replace('(id)', id)}`;
    const queryData = { ...values };
    promiseAjax(api, queryData, { method: 'PUT', token }).then(resp => {
      if (resp && resp.code === 200) {
        console.log("修改成功")
        cb(true)
        setIsOpen(false)
      } else {
        console.error("修改失败")
      }
    });
  }

  //根据type 加载表单组件
  function handleFormItem(list) {
    const fieldList = list;
    return fieldList.map((item, index) => {

      const { label, field, type } = item;

      const C = formItemMap[type]

      return <FormControl isInvalid={errors[field]} key={`${index}_i`}>
        <FormLabel htmlFor={field}>{label}</FormLabel>
        <C {...item} register={register} errors={errors} defaultValue={currentData[field]} />
        <FormErrorMessage>
          {errors[field] && errors[field].message}
        </FormErrorMessage>
      </FormControl>
    })
  }

  return <div
    style={{
      overflow: 'auto',
      position: 'relative',
      alignItems: 'center'
    }}
    className={getClassName()}
    ref={containerRef}
  >
    {/* <ContainerContext.Provider value={size}> */}
    {dataSource.map((item, i) => {
      return (
        <div key={i} onClick={() => clickAction(item)} >
          {
            React.isValidElement(Child) ?
              React.cloneElement(Child, {
                ...rest,
                ...item,
                layout: layout,
                // key: i,
                ref: layoutRef,
                isLastItem: dataSource.length == (i + 1) ? true : false,
                index: i
              })
              : <Child key={i} {...rest} {...item} layout={layout} ref={layoutRef} onItemClick={onItemClick} index={i} />
          }
        </div>
      )
    })}
    {/* </ContainerContext.Provider> */}
    {
      navigation && isSwtich ? (
        <div className='footerBtn' onClick={() => clickAddAction(navigation)}>
          <div className='addBtn'>
          </div>
        </div>
      ) : <></>
    }


    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modelTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {isLoading ? (
            <Spinner />
          ) : (
            <form onSubmit={handleSubmit(validateData)}>
              <Stack spacing="2">
                {
                  handleFormItem(navigation.model.fields)
                }
                {/* <FormControl isInvalid={errors.account}>
                <FormLabel htmlFor='account'>用户名</FormLabel>
                <Input bgColor="gray.50" placeholder="请输入用户名" id='account'
                  {...register('account', {
                    required: '请输入用户名',
                    minLength: { value: 4, message: '最小长度应为4' },
                  })}
                />
                <FormErrorMessage>
                  {errors.account && errors.account.message}
                </FormErrorMessage>
              </FormControl> */}
                <Stack direction='row' spacing={4} align='center'>
                  <Button width='100px' colorScheme='teal' variant='solid' isLoading={isSubmitting} type='submit'>
                    保存
                  </Button>
                  <Button width='100px' colorScheme='teal' variant='outline' onClick={onClose}>取消</Button>
                </Stack>
              </Stack>
            </form>
          )}

        </ModalBody>

        {/* <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onOk}>
              Save
              </Button>
          </ModalFooter> */}
      </ModalContent>
    </Modal>


  </div>
}

function tips(dataSource) {
  return <div>PlainList 数据无效</div>;
}