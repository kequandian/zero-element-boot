import React from 'react';
import { useForm } from 'react-hook-form';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input, // 文本框
} from "@chakra-ui/react";

export default function InputCompx(props) {

    const { label, field, required, register, errors } = props;

    return (
        <FormControl isInvalid={errors[field]}>
            <FormLabel htmlFor={field}>{label}</FormLabel>
            <Input bgColor="gray.50" placeholder={`请输入${label}`} id={field}
                {...register(field,
                    required ? {
                        required: `请输入${label}`
                    } : {}
                )}
            />
            <FormErrorMessage>
            {errors[field] && errors[field].message}
            </FormErrorMessage>
      </FormControl>
    )

    // return <Input {...props}/>
}