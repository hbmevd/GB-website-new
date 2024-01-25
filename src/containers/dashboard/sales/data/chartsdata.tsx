import React from "react";
import ReactApexChart from "react-apexcharts";
import { Chart as ChartJS, registerables } from "chart.js";
import { ApexOptions } from "apexcharts";
ChartJS.register(...registerables);

interface spark3 {
  options?: ApexOptions;
  width?: string | number;
  height?: string | number;
  series?: ApexOptions["series"];
  [key: string]: any;
  label?: XAxisAnnotations;
  endingShape?: string;
}
export class Salestodashboard extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      dataLabels: {
        enabled: false,
      },
      colors: ["000", "000", "#F9F871"],
      series: [
        {
          name: "Sales",
          data: [75, 78, 38, 39, 38, 73, 73, 73, 16, 16, 17, 17],
        },
        {
          name: "Marketing",
          data: [35, 35, 62, 63, 13, 13, 14, 51, 51, 51, 32, 32],
        },
        {
          name: "Profit",
          data: [87, 57, 74, 99, 75, 38, 110, 85, 57, 95, 65, 81],
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
          height: 360,
          type: "line",
          fontFamily: "poppins, sans-serif",
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            },
          },
          zoom: {
            enabled: false,
          },
        },
        grid: {
          borderColor: "#f2f6f7",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [1.5, 1.5, 1.2],
          curve: ["straight", "straight", "smooth"],
          lineCap: "butt",
          dashArray: [0, 0, 2],
        },
        title: {
          text: undefined,
        },
        legend: {
          position: "top",
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              " - " +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              ""
            );
          },
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisBorder: {
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val;
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                },
              },
            },
          ],
        },
        colors: ["#4deeea", "#2d8587", "#fd7e14"],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={370}
        />
      </div>
    );
  }
}
