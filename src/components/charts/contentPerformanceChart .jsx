import React from "react";
import Chart from "react-apexcharts";

const ContentPerformanceChart = () => {
  const options = {
    chart: { id: "content-performance" },
    plotOptions: { bar: { horizontal: false, columnWidth: "50%" } },
    xaxis: { categories: ["Articles", "Videos", "Blogs", "Podcasts"] },
    title: { align: "left" },
    yaxis: { title: { text: "Views" } },
  };

  const series = [
    {
      name: "Views",
      data: [1200, 900, 1400, 700],
    },
  ];

  // @ts-ignore
  return <Chart options={options} series={series} type="bar" width="88%" />;
};

export default ContentPerformanceChart;
