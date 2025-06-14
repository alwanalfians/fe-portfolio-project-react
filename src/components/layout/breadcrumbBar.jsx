import React from "react";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../../helper";

const BreadcrumbBar = () => {
  const location = useLocation();
  const listPath = location.pathname.split("/").filter((value) => value !== "");

  return (
    <Breadcrumb
      items={listPath.map((value, index) => {
        return {
          key: index,
          title: capitalizeFirstLetter(value),
        };
      })}
      style={{ margin: "16px 0" }}
    />
  );
};

export default BreadcrumbBar;
