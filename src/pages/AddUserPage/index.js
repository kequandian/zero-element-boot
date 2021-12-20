import React from 'react';
import { history } from 'umi';
import { 
    ChakraProvider,
    Button,
    Input, // 文本框
    Stack, // 布局组件 设置子元素坚决
    FormControl, // 未表单元素添加动态效果 如校验 禁用等
    FormLabel, // label
    FormErrorMessage
} from "@chakra-ui/react";
import { useForm } from 'react-hook-form';

export default function Index(props) {

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
      } = useForm()

    function validateData(values) {
        values.id = values.length;
        values.avatar = 'https://avatars1.githubusercontent.com/u/37545?s=460&v=4';
        history.push({
            pathname: '/TestUserListDemo',
            query: {
                data: JSON.stringify(values, null, 2)
            }
        })
    }

    
    const onCancel = () => {
        history.push({
            pathname: '/TestUserListDemo',
            query: {
            }
        })
    }

    return (
        <ChakraProvider>
            <div style={{width: '300px', background: '#ffffff', padding: '12px'}}>

                <form onSubmit={handleSubmit(validateData)}>
                    <Stack spacing="2">
                        <FormControl isInvalid={errors.account}>
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
                        </FormControl>
                        <Stack direction='row' spacing={4} align='center'>
                            <Button width='100px' colorScheme='teal' variant='solid' isLoading={isSubmitting} type='submit'>
                                提交
                            </Button>
                            <Button width='100px' colorScheme='teal' variant='outline' onClick={onCancel}>返回</Button>
                        </Stack>
                    </Stack>
                </form>

            </div>

        </ChakraProvider>
    )
}