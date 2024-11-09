import React from 'react';
import { Select, Space } from 'antd';


const SelectUser = () => {
    const [user, setUser] = React.useState('lucy');

    const handleChange = (value) => {
        setUser(value);
    }
    return(
  <Space wrap>
    <Select
      defaultValue="lucy"
      value={user}
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
      ]}
    />
  </Space>
)};
export default SelectUser;