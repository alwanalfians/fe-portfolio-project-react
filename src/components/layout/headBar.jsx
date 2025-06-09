import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const HeadBar = () => {
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
    </Header>
  );
};

export default HeadBar;
