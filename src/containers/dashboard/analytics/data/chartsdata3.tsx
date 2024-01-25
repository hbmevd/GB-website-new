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
export class Analyticsdonut extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      dataLabels: {
        enabled: false,
      },
      
      series: [55, 34, 51],
      options: {
        plotOptions: {
          pie: {
            customScale: 0.8,

            donut: {
              size: "70%",
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        series: [55, 34, 51],
        labels: ["Mobile", "Tablet", "Desktop"],
        chart: {
          type: "donut",
          fontFamily: "poppins, sans-serif",
          height: 220,
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            },
          },
        },
        legend: {
          show: false,
        },
        colors: ["#4deeea", "#2dce89", "#ffda82"],
        responsive: [
          {
            breakpoint: 0,
            options: {
              chart: {
                width: 100,
              },
              legend: {
                show: false,
                position: "bottom",
              },
            },
          },
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
          type="donut"
          height={280}
        />
      </div>
    );
  }
}
