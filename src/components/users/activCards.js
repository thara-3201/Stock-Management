import React, { useState } from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Statistic } from "antd";

const ActiveCards = () => {
  const [value, setValue] = useState({
    orderStatus: "Pending",
    balance: 1000,
  });

  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card bordered={false}>
          <Statistic
            title="Account Balance"
            value={value.balance}
            precision={2}
            valueStyle={{
              color: value.balance < 100 ? "#cf1322" : "#3f8600",
            }}
            prefix={<span> ₹</span>}
          />
          <Button
            style={{
              marginTop: 16,
              padding:0
            }}
            type="link"
          >
            Add Funds
          </Button>
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          <Statistic
            title="Recent Order Status"
            value={value.orderStatus}
            precision={2}
            valueStyle={{
              color: value.orderStatus === "Pending" ? "#cf1322" : "#3f8600",
            }}
          />
          <Button
            style={{
              marginTop: 16,
              padding:0
            }}
            type="link"
          >
            View Orders
          </Button>
        </Card>
      </Col>
    </Row>
  );
};
export default ActiveCards;
