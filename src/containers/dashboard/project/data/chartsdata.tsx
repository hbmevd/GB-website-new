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
export class Productdashboard extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      dataLabels: {
        enabled: false,
      },
      colors: ["000", "000", "#F9F871"],
      series: [
        {
          name: "Active Projects",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
          name: "Tasks",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
      ],
      stroke: {
        width: [0, 0, 2],
      },
      plotOptions: {
        bar: {
          columnWidth: "25%",
        },
      },
      options: {
        chart: {
          height: 350,
          type: "line",
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
        title: {
          text: undefined,
        },
        legend: {
          position: "top",
        },
        dataLabels: {
          enabled: false,
          enabledOnSeries: [1],
        },
        stroke: {
          width: [1, 1.5],
          curve: "smooth",
          lineCap: "butt",
          dashArray: [0, 2],
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
        yaxis: [
          {
            show: false,
            // color: '#4eb6d0',
            title: {
              text: undefined,
            },
          },
          {
            opposite: true,
            title: {
              text: undefined,
            },
          },
        ],
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
        colors: ["#4deeea", "#fd7e14"],
        plotOptions: {
          bar: {
            columnWidth: "20%",
            borderRadius: 3,
          },
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
          type="line"
          height={350}
        />
      </div>
    );
  }
}
