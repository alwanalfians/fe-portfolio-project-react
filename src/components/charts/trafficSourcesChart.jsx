import React from "react";
import Chart from "react-apexcharts";

const TrafficSourcesChart = () => {
  const options = {
    labels: ["Organic Search", "Social Media", "Referrals", "Direct"],
    title: { align: "left" },
    legend: { position: "bottom" },
  };

  const series = [45, 25, 15, 15];

  // @ts-ignore
  return <Chart options={options} series={series} type="pie" width="88%" />;
};

export default TrafficSourcesChart;
