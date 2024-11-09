import React from 'react';
import { Tabs } from 'antd';
import TransactionHistory from './userAccountHistory';
import StockTransactionHistory from './userOrderHistory';

const items = [
  {
    key: '1',
    label: 'Account Transactions',
    children: <TransactionHistory />,
  },
  {
    key: '2',
    label: 'Order Transactions',
    children: <StockTransactionHistory />,
  },
];
const HistoryTabs = () => <Tabs defaultActiveKey="1" items={items}  />;
export default HistoryTabs;