import React from 'react';
import { Input } from "@chakra-ui/react";

export function InputCompx({ field, props = {}, register, rules = {}, defaultValue, onChange }) {
  const registerProps = register ? register(field, rules?.isRequired ? { required: '请输入' } : {}) : {};
  const placeholder = props?.placeholder;

  return (
    <Input
      id={field}
      placeholder={placeholder}
      defaultValue={defaultValue}
      {...registerProps}
      onChange={(e) => {
        // 保持与 react-hook-form 的注册事件一致
        registerProps?.onChange && registerProps.onChange(e);
        // 额外上报用于 ManageList 的扩展保存数据
        onChange && onChange({ [field]: e.target.value });
      }}
    />
  );
}