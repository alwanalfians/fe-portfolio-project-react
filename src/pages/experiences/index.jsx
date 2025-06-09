import React from "react";
import { Table } from "antd";

import Page from "@components/page";
import { getList } from "@mockData/experiences";
import { ExperiencesColumn } from "@constants/columns";

const Experiences = () => {
  const data = getList();

  return (
    <Page title="Experiences">
      <Table dataSource={data} columns={ExperiencesColumn} />
    </Page>
  );
};

export default Experiences;
