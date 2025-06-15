import React, { useState } from "react";
import PageWrapper from "../../components/pageWrapper";
import { BookOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { listEducations } from "@mockData/educations";
import { EducationsColumn } from "@constants/columns";
import HeaderTable from "@components/headerTable";

const Educations = () => {
  const [page, setPage] = useState(1);

  return (
    <PageWrapper
      title="Educations"
      icon={<BookOutlined style={{ marginRight: "8px" }} />}
    >
      <HeaderTable />
      <Table
        dataSource={listEducations}
        columns={EducationsColumn(page)}
        scroll={{ x: "max-content" }}
        pagination={{
          onChange(current) {
            setPage(current);
          },
        }}
      />
    </PageWrapper>
  );
};

export default Educations;
