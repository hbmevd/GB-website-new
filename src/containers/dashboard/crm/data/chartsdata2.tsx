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
export class Cmrdvisitorreport extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      dataLabels: {
        enabled: false,
      },
      colors: ["000", "000", "#F9F871"],
      series: [
        {
          name: "New Visitors",
          data: [76, 85, 101, 98, 87, 105, 91],
        },
        {
          name: "Repeated Visitors",
          data: [44, 55, 57, 56, 61, 58, 63],
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
          type: "bar",
          fontFamily: "poppins, sans-serif",
          height: 320,
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            },
          },
        },
        grid: {
          borderColor: "#f2f6f7",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "30%",
            //   endingShape: 'rounded'
            borderRadius: 3,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            //    width: 6,
            offsetX: 0,
            offsetY: 0,
          },
        },
        yaxis: {
          title: {
            text: undefined,
          },
        },

        fill: {
          opacity: 1,
        },
        colors: ["#4deeea", "#2d7f83"],
        legend: {
          show: false,
          position: "top",
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
          type="bar"
          height={350}
        />
      </div>
    );
  }
}
