import React, { useState } from "react";
import { Table } from "antd";

import PageWrapper from "@components/pageWrapper";
import { ExperiencesColumn } from "@constants/columns";
import { listExperiences } from "@mockData/experiences";
import { ProfileOutlined } from "@ant-design/icons";
import HeaderTable from "@components/headerTable";

const Experiences = () => {
  const [page, setPage] = useState(1);

  return (
    <PageWrapper
      title="Experiences"
      icon={<ProfileOutlined style={{ marginRight: "8px" }} />}
    >
      <HeaderTable />
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
    </PageWrapper>
  );
};

export default Experiences;
