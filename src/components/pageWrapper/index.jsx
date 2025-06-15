import React from "react";
import { Col, Row } from "antd";

const PageWrapper = ({ title, icon, children }) => {
  return (
    <>
      <Row style={{ marginBottom: "32px" }}>
        <Col>
          <h1>
            {icon}
            {title}
          </h1>
        </Col>
      </Row>
      {children}
    </>
  );
};

export default PageWrapper;
