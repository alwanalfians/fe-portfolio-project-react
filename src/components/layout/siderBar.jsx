import React from "react";
import { Layout, Menu, theme } from "antd";
import { Link, useLocation } from "react-router-dom";
import { listMenu } from "../../constants/menus";

const { Sider } = Layout;

const SideBar = () => {
  const location = useLocation();
  const listPath = location.pathname.split("/").filter((value) => value !== "");

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const generateListMenu = () => {
    return listMenu.map((item) => {
      return {
        key: item.key,
        label: (
          <Link
            to={`/${
              item.label === "home" ? "" : item.label.toLocaleLowerCase()
            }`}
          >
            {item.label}
          </Link>
        ),
        children: !item.children
          ? null
          : item.children.map((subItem) => {
              return {
                key: subItem.label,
                label: subItem.label,
              };
            }),
      };
    });
  };

  console.log(generateListMenu());

  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[listPath[0] !== "" ? listPath[0] : "home"]}
        style={{ height: "100%", borderRight: 0 }}
        items={generateListMenu()}
      />
    </Sider>
  );
};

export default SideBar;
