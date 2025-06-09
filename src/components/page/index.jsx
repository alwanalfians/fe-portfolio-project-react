import React from "react";
import { Layout, Row, Typography } from "antd";

import HeaderBar from "@components/layout/headBar";
import SideBar from "@components/layout/siderBar";
import BreadcrumbBar from "@components/layout/breadcrumbBar";
import ContentBar from "@components/layout/contentSection";

const { Title } = Typography;

const Page = ({ title, children }) => {
  return (
    <Layout>
      <HeaderBar />
      <Layout>
        <SideBar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <BreadcrumbBar />
          <ContentBar>
            <Row>
              <Title>{title}</Title>
            </Row>
            {children}
          </ContentBar>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Page;
