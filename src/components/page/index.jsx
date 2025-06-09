import React from "react";
import { Col, Layout, Row } from "antd";

import HeaderBar from "@components/layout/headBar";
import SideBar from "@components/layout/siderBar";
import BreadcrumbBar from "@components/layout/breadcrumbBar";
import ContentBar from "@components/layout/contentSection";
import FootBar from "@components/layout/footbar";

const Page = ({ title, icon, children }) => {
  return (
    <Layout>
      <HeaderBar />
      <Layout>
        <SideBar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <BreadcrumbBar />
          <ContentBar>
            <Row style={{ marginBottom: "32px" }}>
              <Col>
                <h1>
                  {icon}
                  {title}
                </h1>
              </Col>
            </Row>
            {children}
          </ContentBar>
          <FootBar />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Page;
