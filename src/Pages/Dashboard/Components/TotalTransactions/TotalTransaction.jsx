import React from "react";

import Chart from "react-apexcharts";

const ApexChart = () => {
  const options = {
    xaxis: {
      categories: ["Jan", "Feb", "Mar","Apr", "May", "Jun" , "Jul","Aug", "Sep", "Oct","Nov","Dec"]
    }
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 25, 50, 49, 21, 70, 51, 12, 54, 61, 32]
    },
    {
      name: "series-2",
      data: [23, 12, 54, 61, 32, 56, 81, 19, 30, 40, 25, 50]
    },
  ];

  return (
    <div className="col-lg-9 col-md-12">
    <div className="card">
        <div className="card-header">
            <h3 className="card-title">Total Transaction</h3>
        </div>
        <div className="card-body">
            <div id="nvd3-chart3" className="with-transitions h-400"> <Chart options={options} series={series} type="area" /></div>
        </div>
    </div>
  </div>
  );
};
export default ApexChart;
