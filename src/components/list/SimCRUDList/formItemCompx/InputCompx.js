import React from 'react';

import {
    Input, // 文本框
} from "@chakra-ui/react";

export default function InputCompx(props) {

    const { field, required, register, defaultValue } = props;

    
    return <Input bgColor="gray.50" placeholder={required.placeholder ? required.placeholder : `请输入`} id={field} defaultValue={defaultValue}
        {...register(field,
            required ? {
                required: required.placeholder ? required.placeholder : `请输入`
            } : {}
        )}
    />

}