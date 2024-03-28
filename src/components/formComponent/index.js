import React from 'react';
import { useForm } from 'react-hook-form';
import {
    Button,
    Input,
    Stack,
    FormControl,
    FormLabel,
    FormErrorMessage,
} from "@chakra-ui/react";

export default function FormComponent(props) {

    const { formType, onModalClose, onFormAddNew, onFormSaved } = props;

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    console.log('formType', formType)


    function validateData(values) {

        console.log('form data', values)

        if(onFormSaved){
            onFormSaved(values)
        }

        // return new Promise((resolve) => {
        //     setTimeout(() => {
                
        //         resolve()
        //     }, 2000)
        // })
    }


    return (
        <form onSubmit={handleSubmit(validateData)} noValidate>
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
                    <Button width='100px' colorScheme='teal' variant='solid' isLoading={false} type='submit' size='sm'>
                        保存
                    </Button>
                    <Button width='100px' colorScheme='teal' variant='outline' onClick={onModalClose} size='sm'>取消</Button>
                </Stack>
            </Stack>
        </form>
    )
}