import React from "react";
import { Layout } from "antd";
import HeaderBar from "./headBar";
import SideBar from "./siderBar";
import BreadcrumbBar from "./breadcrumbBar";
import ContentBar from "./contentSection";
import FootBar from "./footbar";

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <HeaderBar />
      <Layout>
        <SideBar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <BreadcrumbBar />
          <ContentBar>{children}</ContentBar>
          <FootBar />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
