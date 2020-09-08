import React from 'react';
import { Select } from 'antd';

const CustomizedSelect = ({ children, onChange, defaultValue }) => {
  return (
    <Select
      size="large"
      defaultValue={defaultValue}
      bordered={false}
      onChange={onChange}
      style={{
        width: '100%',
      }}
    >
      {children}
    </Select>
  );
};

export default CustomizedSelect;
