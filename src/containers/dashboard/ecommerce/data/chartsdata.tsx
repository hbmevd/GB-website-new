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
export class Ecommercedashboard extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      dataLabels: {
        enabled: false,
      },
     
      series: [
        {
          name: "Orders",
          type: "column",
          data: [1.8, 2.5, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
        },
        {
          name: "Sales",
          type: "column",
          data: [1.1, 2.2, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
        },
        {
          name: "Profit",
          type: "line",
          data: [20, 29, 37, 35, 44, 43, 50, 58],
        },
      ],

      plotOptions: {
        bar: {
          columnWidth: "25%",
        },
      },
      options: {
        chart: {
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            },
          },
          height: 350,

          type: "line",
          fontFamily: "poppins, sans-serif",
          //   stacked: false,
        },

        grid: {
          borderColor: "#f2f6f7",
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          opacity: [1, 1, 1]
        },
        title: {
          text: undefined,
          align: "left",
          offsetX: 110,
        },
        xaxis: {
          categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
          axisBorder: {
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            color: "rgba(119, 119, 142, 0.05)",
            // width: 6,
            offsetX: 0,
            offsetY: 0,
          },
        },
        yaxis: [
          {
            show: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: false,
              color: "#2d8487",
            },
            labels: {
              style: {
                // colors: "#2d8487",
              },
            },
            title: {
              text: undefined,
              style: {
                color: "#2d8487",
              },
            },
            tooltip: {
              enabled: true,
            },
          },
          {
            seriesName: "Orders",
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: false,
              color: "#00E396",
            },
            labels: {
              style: {
                // colors: "#00E396",
              },
            },
            title: {
              text: undefined,
              style: {
                color: "#00E396",
              },
            },
          },
          {
            seriesName: "Profit",
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: false,
              color: "#000000",
            },
            labels: {
              show: false,
             
            },
            title: {
              text: undefined,
              style: {
                color: "#FEB019",
              },
            },
          },
        ],
        tooltip: {
          enabled: true,
        },
        colors: ["#4deeea", "#2d8487", "#fd7e14"],
        legend: {
          position: "top",
          offsetX: 40,
        },

        stroke: {
          width: [0, 0, 1.5],
          curve: 'smooth',
          dashArray: [0, 0, 2],
        },
        plotOptions: {
          bar: {
            columnWidth: "35%",
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
