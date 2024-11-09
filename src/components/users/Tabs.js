import React from 'react';
import { Tabs } from 'antd';

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Account Transactions',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Order Transactions',
    children: 'Content of Tab Pane 2',
  },
];
const HistoryTabs = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default HistoryTabs;