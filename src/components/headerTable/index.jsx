import React, { lazy, Suspense } from "react";
import { Button, Col, Input, Row, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Loading from "@components/loading";

const { Search } = Input;

// Lazy load header table component
const HeaderTable = lazy(() => import("./headerTable"));

const HeaderTableComponent = () => {
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

// Wrapper component for lazy-loaded table components
const TableWrapper = ({ children }) => (
  <Suspense fallback={<Loading />}>{children}</Suspense>
);

export { HeaderTable, TableWrapper };
