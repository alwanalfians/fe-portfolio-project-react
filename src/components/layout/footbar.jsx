import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FootBar = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      ReactJS + ANT Design Demo ©{new Date().getFullYear()} Created by
      alwanalfias
    </Footer>
  );
};

export default FootBar;
