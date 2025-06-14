import React from "react";
import { Col, Layout, Row } from "antd";

import {
  HeaderBar,
  SideBar,
  BreadcrumbBar,
  ContentBar,
  FootBar,
  LayoutWrapper,
} from "@components/layout";

const Page = ({ title, icon, children }) => {
  return (
    <Layout>
      <LayoutWrapper>
        <HeaderBar />
      </LayoutWrapper>
      <Layout>
        <LayoutWrapper>
          <SideBar />
        </LayoutWrapper>
        <Layout style={{ padding: "0 24px 24px" }}>
          <LayoutWrapper>
            <BreadcrumbBar />
          </LayoutWrapper>
          <LayoutWrapper>
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
          </LayoutWrapper>
          <LayoutWrapper>
            <FootBar />
          </LayoutWrapper>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Page;
