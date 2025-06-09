import React from "react";
import Page from "@components/page";
import { HomeOutlined } from "@ant-design/icons";

const Home = () => {
  return (
    <Page title="Home" icon={<HomeOutlined style={{ marginRight: "8px" }} />}>
      home
    </Page>
  );
};

export default Home;
