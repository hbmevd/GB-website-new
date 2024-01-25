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
export class Analyticsdashboard extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      dataLabels: {
        enabled: false,
      },

      series: [
        {
          name: "2020",
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35],
        },
        {
          name: "2021",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27],
        },
        {
          name: "2022",
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 33],
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
          type: "area",
          height: 350,
          stacked: true,
          fontFamily: "poppins, sans-serif",
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            },
          },
        },
        grid: {
          borderColor: "#f2f6f7",
        },
        colors: ["#38898b", "#5bb5b6", "#83e5e4"],
        labels: [
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
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [0, 0, 0],
          curve: "straight",
        },
        xaxis: {
          axisBorder: {
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            color: "rgba(119, 119, 142, 0.05)",
            //   width: 6,
            offsetX: 0,
            offsetY: 0,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8,
          },
        },
        legend: {
          show: false,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}
