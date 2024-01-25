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
export class Analyticsessionchart extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      dataLabels: {
        enabled: false,
      },
      colors: ["000", "000", "#F9F871"],
      series: [
        {
          name: "Sessions",
          data: [400, 430, 470, 540, 1100, 1200, 1380],
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
          type: "bar",
          fontFamily: "poppins, sans-serif",

          height: 330,
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
            borderRadius: 4,
            horizontal: true,
            barHeight: "30%",
          },
        },
        colors: ["#4deeea"],
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "South Korea",
            "Canada",
            "United Kingdom",
            "Netherlands",
            "United States",
            "China",
            "Germany",
          ],
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
