import React from 'react';
import { Table, Tag } from 'antd';

const StockTransactionHistory = () => {
  // Sample stock transaction data
  const transactions = [
    {
      key: '1',
      orderId: 'ORD1001',
      date: '2024-11-01',
      stockSymbol: 'AAPL',
      transactionType: 'buy',
      quantity: 10,
      pricePerShare: 150,
      totalAmount: 1500,
    },
    {
      key: '2',
      orderId: 'ORD1002',
      date: '2024-11-03',
      stockSymbol: 'GOOGL',
      transactionType: 'sell',
      quantity: 5,
      pricePerShare: 2800,
      totalAmount: 14000,
    },
    {
      key: '3',
      orderId: 'ORD1003',
      date: '2024-11-05',
      stockSymbol: 'TSLA',
      transactionType: 'buy',
      quantity: 20,
      pricePerShare: 600,
      totalAmount: 12000,
    },
    {
      key: '4',
      orderId: 'ORD1004',
      date: '2024-11-07',
      stockSymbol: 'NFLX',
      transactionType: 'sell',
      quantity: 15,
      pricePerShare: 550,
      totalAmount: 8250,
    },
  ];

  // Table columns
  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Stock Symbol',
      dataIndex: 'stockSymbol',
      key: 'stockSymbol',
    },
    {
      title: 'Transaction Type',
      dataIndex: 'transactionType',
      key: 'transactionType',
      render: (type) => (
        <Tag color={type === 'buy' ? 'green' : 'red'}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Tag>
      ),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price per Share (₹)',
      dataIndex: 'pricePerShare',
      key: 'pricePerShare',
      render: (price) => `₹${price.toFixed(2)}`,
    },
    {
      title: 'Total Amount (₹)',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      render: (amount, record) => (
        <span style={{ color: record.transactionType === 'buy' ? '#3f8600' : '#cf1322' }}>
          {record.transactionType === 'buy' ? `-₹${amount.toFixed(2)}` : `+₹${amount.toFixed(2)}`}
        </span>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={transactions}
      pagination={{ pageSize: 5 }}
      rowKey="orderId"
    />
  );
};

export default StockTransactionHistory;
