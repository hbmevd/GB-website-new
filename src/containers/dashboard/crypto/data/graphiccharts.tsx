import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

import { ApexOptions } from 'apexcharts';

//*** WIDGETS DATA ***//

interface spark {
  options?: ApexOptions,
  width?: string | number,
  height?: string | number,
  series?: ApexOptions['series'],
  [key: string]: any
  label?: XAxisAnnotations
  endingShape?: string
}
// Total Revenue
export class TotalRevenue extends Component<{}, spark> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [{
        data: [15, 27, 20, 25, 21, 31],
        color: '#4deeea'


      }],
      options: {
        chart: {
          type: 'line',

          sparkline: {
            enabled: true,

          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            },
          },
        },
        stroke: {
          curve: 'smooth',
          width: 1.2,
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return '';
              }
            }
          },
          marker: {
            show: false
          }
        }
      },

    };
  }

  render() {
    return (

      <div id="chart-1">
        <ReactApexChart className="areaChart" options={this.state.options} series={this.state.series} type="line" height={110} />
      </div>
    );
  }
}


export class SupportCost extends Component<{}, spark> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [{
        data: [12, 28, 16, 22, 15, 22,],
        color: '#748160'
      }],
      options: {

        chart: {
          type: 'line',
          sparkline: {
            enabled: true
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            },
          },

        },
        stroke: {
          curve: 'smooth',
          width: 1.2
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return '';
              }
            }
          },
          marker: {
            show: false
          }
        }
      },

    };
  }

  render() {
    return (

      <div id="chart-1">
        <ReactApexChart className="areaChart" options={this.state.options} series={this.state.series} type="line" height={110} />
      </div>
    );
  }
}


export class TotalRequest extends Component<{}, { series: any, options: any }> {
  constructor(props: any) {
    super(props);

    this.state = {
      series: [{
        data: [31, 22, 25, 21, 25, 21],
        color: '#cd9f54'
      }],
      options: {

        chart: {
          type: 'line',
          sparkline: {
            enabled: true
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            },
          },
        },
        stroke: {
          curve: 'smooth',
          width: 1.2,
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return '';
              }
            }
          },
          marker: {
            show: false
          }
        }
      },

    };
  }

  render() {
    return (

      <div id="chart-1">
        <ReactApexChart className="areaChart" options={this.state.options} series={this.state.series} type="line" height={110} />
      </div>
    );
  }
}

// Requests Answered

export class RequestsAnswered extends Component<{}, spark> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [{
        data: [15, 27, 20, 25, 21, 31],
        color: '#2cc684'
      }],
      options: {

        chart: {
          type: 'line',
          sparkline: {
            enabled: true
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            },
          },
        },
        stroke: {
          curve: 'smooth',
          width: 1.2,
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return '';
              }
            }
          },
          marker: {
            show: false
          }
        }
      },

    };
  }
  render() {
    return (
      <div id="chart-1">
        <ReactApexChart className="areaChart" options={this.state.options} series={this.state.series} type="line" height={110} />
      </div>
    );
  }
}