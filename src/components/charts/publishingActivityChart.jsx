import React from "react";
import Chart from "react-apexcharts";

const PublishingActivityChart = () => {
  const options = {
    chart: { id: "publishing-activity" },
    xaxis: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
    },
    title: { align: "left" },
    yaxis: { title: { text: "Number of Posts" } },
  };

  const series = [
    {
      name: "Posts Published",
      data: [5, 8, 6, 10],
    },
  ];

  // @ts-ignore
  return <Chart options={options} series={series} type="bar" width="88%" />;
};

export default PublishingActivityChart;
