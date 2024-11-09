import React from 'react';
import { Table, Tag } from 'antd';

const TransactionHistory = () => {
  // Sample transaction data
  const transactions = [
    {
      key: '1',
      transactionId: 'T123456789',
      date: '2024-11-01',
      description: 'Salary Credit',
      amount: 50000,
      balance: 150000,
      type: 'credit',
    },
    {
      key: '2',
      transactionId: 'T123456790',
      date: '2024-11-05',
      description: 'Grocery Shopping',
      amount: -2000,
      balance: 148000,
      type: 'debit',
    },
    {
      key: '3',
      transactionId: 'T123456791',
      date: '2024-11-07',
      description: 'Electricity Bill Payment',
      amount: -500,
      balance: 147500,
      type: 'debit',
    },
    {
      key: '4',
      transactionId: 'T123456792',
      date: '2024-11-09',
      description: 'Freelance Payment',
      amount: 12000,
      balance: 159500,
      type: 'credit',
    },
  ];

  // Table columns
  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Amount (₹)',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => (
        <span style={{ color: amount > 0 ? '#3f8600' : '#cf1322' }}>
          {amount > 0 ? `+₹${amount}` : `-₹${Math.abs(amount)}`}
        </span>
      ),
    },
    {
      title: 'Balance (₹)',
      dataIndex: 'balance',
      key: 'balance',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type) => (
        <Tag color={type === 'credit' ? 'green' : 'red'}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Tag>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={transactions}
      pagination={{ pageSize: 5 }}
      rowKey="transactionId"
    />
  );
};

export default TransactionHistory;
