import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const Page = ({ children }) => {
  const location = useLocation();
  const listPath = location.pathname.split("/").filter((value) => value !== "");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const listMenu = [
    "home",
    "dashboard",
    "educations",
    "experiences",
    "profile",
  ].map((menu, index) => {
    return {
      key: menu,
      label: (
        <Link to={`/${menu === "home" ? "" : menu.toLocaleLowerCase()}`}>
          {menu}
        </Link>
      ),
    };
  });

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[listPath[0] !== "" ? listPath[0] : "home"]}
            style={{ height: "100%", borderRight: 0 }}
            items={listMenu}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb
            items={listPath.map((value, index) => {
              return {
                key: index,
                title: value,
              };
            })}
            style={{ margin: "16px 0" }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Page;
