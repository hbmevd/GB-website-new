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
export class Hrmdashboard extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      dataLabels: {
        enabled: false,
      },
      colors: ["000", "000", "#F9F871"],
      series: [
        {
          name: "progress",
          type: "line",
          data: [-15, 32, -11, 63, 16, 82, 292, 107, -18, 56, 200, 80],
        },
        {
          name: "active",
          type: "column",
          data: [104, 102, 117, 146, 118, 115, 220, 103, 83, 114, 265, 174],
        },
        {
          name: "inactive",
          type: "column",
          data: [-34, -42, -97, -56, -71, -175, -60, -34, -56, -78, -119, -53],
        },
      ],

      options: {
        chart: {
          height: 395,
          fontFamily: "poppins, sans-serif",
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            },
          },
        },
        stroke: {
          curve: "smooth",
          dashArray: [2, 0, 0],
          width: [2, 0, 0],
        },
        fill: {
          opacity: [1, 1, 1],
        },
        grid: {
          borderColor: "#f2f6f7",
        },
        colors: ["#ffda82", "#4deeea", "#339697"],
        plotOptions: {
          bar: {
            columnWidth: "30%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: true,
          position: "top",
        },
        yaxis: {
          title: {
            style: {
              color: "	#adb5be",
              fontSize: "14px",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label",
            },
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + "";
            },
          },
        },
        xaxis: {
          // type: 'month',
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "sep",
            "oct",
            "nov",
            "dec",
          ],
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
            //   width: 6,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            rotate: -90,
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
          height={428}
        />
      </div>
    );
  }
}
