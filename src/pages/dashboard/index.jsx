import React from "react";
import PageWrapper from "../../components/pageWrapper";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  DashboardOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Card, Col, Divider, Row, Statistic } from "antd";

import UserEngagementChart from "@components/charts/userEngagementChart";
import ContentPerformanceChart from "@components/charts/contentPerformanceChart ";
import TrafficSourcesChart from "@components/charts/trafficSourcesChart";
import PublishingActivityChart from "@components/charts/publishingActivityChart";

const Dashboard = () => {
  return (
    <PageWrapper
      title="Dashboard"
      icon={<DashboardOutlined style={{ marginRight: "8px" }} />}
    >
      <Row gutter={24} style={{ marginBottom: "24px" }}>
        <Col span={8}>
          <Card variant="borderless">
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card variant="borderless">
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card variant="borderless">
            <Statistic
              title="Feedback"
              value={1128}
              prefix={<LikeOutlined />}
            />
          </Card>
        </Col>
      </Row>
      <Divider orientation="left" />
      <Row gutter={[24, 24]}>
        <Col span={12}>
          <Card title="User Engagement Over Time" variant="borderless">
            <UserEngagementChart />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Content Performance Distribution" variant="borderless">
            <ContentPerformanceChart />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Publishing Activity & Trends" variant="borderless">
            <PublishingActivityChart />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Traffic Sources Breakdown" variant="borderless">
            <TrafficSourcesChart />
          </Card>
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default Dashboard;
