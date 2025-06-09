import React from "react";
import Page from "../../components/page";
import { HomeOutlined } from "@ant-design/icons";

const Dashboard = () => {
  return (
    <Page
      title="Dashboard"
      icon={<HomeOutlined style={{ marginRight: "8px" }} />}
    >
      hehe
    </Page>
  );
};

export default Dashboard;
