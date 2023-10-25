import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './ApexChart.scss'

const FunctionalApexChart = ({ color }) => {
  const seriesData = [30, 70, 30, 100, 50, 130, 100];

  const options = {
    chart: {
      height: 150,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      colors: [color]
    },
    grid: {
      show: false
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    tooltip: {
      enabled: true,
      x: {
        show: false
      }
    },
    annotations: {
      points: seriesData.map((point, index) => ({
        x: {
          seriesIndex: 0,
          dataPointIndex: index,
          offsetY: 10
        },
        y: {
          seriesIndex: 0,
          dataPointIndex: index,
          offsetX: 0,
          label: {
            borderColor: '#777',
            offsetY: 0,
            text: point.toString()
          }
        }
      }))
    }
  };
  
  const series = [{
    name: "Desktops",
    data: seriesData
  }];

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="line" height={150} />
    </div>
  );
};

export default FunctionalApexChart;
