import React, { useState } from "react";
import Page from "../../components/page";
import { BookOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { listEducations } from "@mockData/educations";
import { EducationsColumn } from "@constants/columns";
import { HeaderTable, TableWrapper } from "@components/headerTable";

const Educations = () => {
  const [page, setPage] = useState(1);

  return (
    <Page
      title="Educations"
      icon={<BookOutlined style={{ marginRight: "8px" }} />}
    >
      <TableWrapper>
        <HeaderTable />
      </TableWrapper>
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
    </Page>
  );
};

export default Educations;
