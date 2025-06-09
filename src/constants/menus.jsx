import {
  BookOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  HomeOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import React from "react";

export const listMenu = [
  { key: "/home", icon: <HomeOutlined />, label: "Home" },
  { key: "/dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
  {
    key: "/data",
    icon: <DatabaseOutlined />,
    label: "Data",
    children: [
      { key: "/data/educations", icon: <BookOutlined />, label: "Educations" },
      {
        key: "/data/experiences",
        icon: <ProfileOutlined />,
        label: "Experiences",
      },
    ],
  },
];
