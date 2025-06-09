import React, { useEffect, useState } from "react";
import { Layout, Menu, theme } from "antd";
import { Link, useLocation } from "react-router-dom";
import { listMenu } from "../../constants/menus";

const { Sider } = Layout;

const SideBar = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    if (location) {
      if (current !== location.pathname) {
        setCurrent(location.pathname);
      }
    }
  }, [location, current]);

  const handleClick = (e) => {
    setCurrent(e);
  };

  const generateListMenu = () => {
    return listMenu.map((item) => {
      const loweredItemLabel = item.label.toLocaleLowerCase();
      return {
        key: item.key,
        icon: item.icon,
        label: <Link to={`/${loweredItemLabel}`}>{item.label}</Link>,
        children: !item.children
          ? null
          : item.children.map((subItem) => {
              return {
                key: subItem.key,
                icon: subItem.icon,
                label: (
                  <Link
                    to={`/${loweredItemLabel}/${subItem.label.toLocaleLowerCase()}`}
                  >
                    {subItem.label}
                  </Link>
                ),
              };
            }),
      };
    });
  };

  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        defaultOpenKeys={["/data"]}
        selectedKeys={[current]}
        style={{ height: "100%", borderRight: 0 }}
        onClick={handleClick}
        items={generateListMenu()}
      />
    </Sider>
  );
};

export default SideBar;
