import React, { useState } from "react";
import { Col, Row, Space, Table, Input, Button } from "antd";

import Page from "@components/page";
import { ExperiencesColumn } from "@constants/columns";
import { listExperiences } from "@mockData/experiences";
import { PlusOutlined, ProfileOutlined } from "@ant-design/icons";

const { Search } = Input;

const Experiences = () => {
  const [page, setPage] = useState(1);

  return (
    <Page
      title="Experiences"
      icon={<ProfileOutlined style={{ marginRight: "8px" }} />}
    >
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
      <Table
        dataSource={listExperiences}
        columns={ExperiencesColumn(page)}
        scroll={{ x: "max-content" }}
        pagination={{
          onChange(current) {
            setPage(current);
          },
        }}
      />
    </Page>
  );
};

export default Experiences;
