import React, { useState } from "react";
import { Table } from "antd";

import Page from "@components/page";
import { ExperiencesColumn } from "@constants/columns";
import { listExperiences } from "@mockData/experiences";
import { ProfileOutlined } from "@ant-design/icons";
import { HeaderTable, TableWrapper } from "@components/headerTable";

const Experiences = () => {
  const [page, setPage] = useState(1);

  return (
    <Page
      title="Experiences"
      icon={<ProfileOutlined style={{ marginRight: "8px" }} />}
    >
      <TableWrapper>
        <HeaderTable />
      </TableWrapper>
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
