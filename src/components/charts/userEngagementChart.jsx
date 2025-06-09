import React from "react";
import Chart from "react-apexcharts";

const UserEngagementChart = () => {
  const options = {
    chart: { id: "user-engagement" },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    stroke: { curve: "smooth" },
    title: { align: "left" },
    yaxis: { title: { text: "Active Users" } },
  };

  const series = [
    {
      name: "Active Users",
      data: [30, 45, 55, 70, 60, 80, 95],
    },
  ];

  // @ts-ignore
  return <Chart options={options} series={series} type="line" width="88%" />;
};

export default UserEngagementChart;
