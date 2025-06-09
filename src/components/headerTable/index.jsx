import React from "react";
import { Button, Col, Input, Row, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Search } = Input;

const HeaderTable = () => {
  return (
    <Row style={{ marginBottom: "16px" }}>
      <Col span={12}>
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            onSearch={(value) => alert("search data: " + value)}
            enterButton
            style={{ width: "300px" }}
            allowClear
          />
        </Space>
      </Col>
      <Col span={12}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ float: "right", width: "150px" }}
          onClick={() => alert("Create new Data")}
        >
          Create Data
        </Button>
      </Col>
    </Row>
  );
};

export default HeaderTable;
