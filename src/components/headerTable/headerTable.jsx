import React from "react";
import { Button, Col, Input, Row, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Search } = Input;

const HeaderTable = () => {
  return (
    <Row style={{ marginBottom: "16px" }}>
      <Col span={12}>
        <Search
          placeholder="Search..."
          allowClear
          enterButton
          style={{ width: "300px" }}
        />
      </Col>
      <Col span={12} style={{ textAlign: "right" }}>
        <Space>
          <Button type="primary" icon={<PlusOutlined />}>
            Add New
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default HeaderTable;
