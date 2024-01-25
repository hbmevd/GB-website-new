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
export class Cmrdashboard extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      dataLabels: {
        enabled: false,
      },
      colors: ["000", "000", "#F9F871"],
      series: [
        {
          name: "Last Year",
          data: [30, 25, 46, 28, 21, 45, 35, 64, 52, 59, 36, 39],
        },
        {
          name: "Present Year",
          data: [23, 11, 22, 35, 17, 28, 22, 37, 21, 44, 22, 30],
        },
      ],
      options: {
        chart: {
          height: 320,

          fontFamily: "poppins, sans-serif",
          type: "area",
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            },
          },
        },
        grid: {
          borderColor: "#f6f6f7",
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          axisBorder: {
            color: "rgba(1, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            color: "rgba(19, 119, 142, 0.05)",
            //   width: 6,
            offsetX: 0,
            offsetY: 0,
          },
        },
        legend: {
          position: "top",
        },
        colors: ["rgba(77, 238, 234, 0.4)", "#4deeea"],
        stroke: {
          width: [0, 0],
          curve: "smooth",
        },
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
