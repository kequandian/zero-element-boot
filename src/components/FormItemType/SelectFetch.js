import React, { useEffect, useState } from 'react';
import { Select } from "@chakra-ui/react";

const promiseAjax = require('@/components/utils/request');

export function SelectFetch({ field, props = {}, register, rules = {}, defaultValue, onChange, options = {}, saveData = {} }) {
  const [list, setList] = useState([]);
  const [value, setValue] = useState(defaultValue);

  const labelField = options?.label || 'label';
  const valueField = options?.value || 'value';
  const api = options?.api;


  useEffect(() => {
    let mounted = true;
    if (api) {
      promiseAjax(api, {}).then(resp => {
        if (!mounted) return;
        // 兼容多种后端返回结构
        const data = resp?.data ?? resp?.records ?? resp?.result ?? [];
        const arr = Array.isArray(data) ? data : (data?.list || []);
        setList(arr);
        // 选项到达后，确保默认值能正确展示
        if (defaultValue !== undefined && defaultValue !== null) {
          setValue(defaultValue);
        }
      }).catch(() => {
        setList([]);
      });
    }
    return () => { mounted = false; };
  }, [api]);

  // defaultValue 变化时同步到受控值
  useEffect(() => {
    if (defaultValue !== undefined && defaultValue !== null) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  const registerProps = register ? register(field, rules?.isRequired ? { required: '请选择' } : {}) : {};

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    // 同步 react-hook-form
    registerProps?.onChange && registerProps.onChange(e);

    // 查找选中项并按 saveData 规则生成额外字段
    const selected = list.find(item => String(item[valueField]) === String(val));
    const extra = {};
    if (saveData && selected) {
      Object.keys(saveData).forEach(k => {
        const sourceField = saveData[k];
        extra[k] = selected[sourceField];
      });
    }
    onChange && onChange({ [field]: val, ...extra });
  };



  return (
    <>
      <Select
        id={field}
        placeholder={props?.placeholder}
        value={value ?? ''}
        name={registerProps?.name}
        ref={registerProps?.ref}
        onChange={handleChange}
      >
        {list.map(item => (
          <option key={item[valueField]} value={item[valueField]}>
            {item[labelField]}
          </option>
        ))}
      </Select>
    </>
  );
}