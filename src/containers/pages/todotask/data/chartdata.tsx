
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
export const Areachart = {
    responsive: true,

};
//areachart
export const areachart: any = {
    type: 'bar',
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
        label: 'Completed',
        barPercentage: 0.3,
        data: [25, 24, 18, 25, 20, 18, 24],
        backgroundColor: '#4fb7e3',
        borderWidth: 1,
        fill: true
    }, {
        label: 'Created',
        barPercentage: 0.3,
        data: [15, 16, 20, 25, 25, 30, 26],
        backgroundColor: '#4ac9bd',
        borderWidth: 1,
        fill: true
    }],
    options: {
        responsive: true,
        maintainAspectRatio: false,

        legend: {
            display: false,
            labels: {
                display: false
            }
        },
        tooltips: {
            mode: "index",
            intersect: false,
        },
        hover: {
            mode: "nearest",
            intersect: true,
        },
        scales: {
            yAxes: {
                stacked: true,
                ticks: {
                    beginAtZero: true,
                    fontSize: 11,
                    fontColor: "rgba(171, 167, 167,0.9)",
                },
                gridLines: {
                    display: false,
                    color: 'rgba(171, 167, 167,0.2)',
                    drawBorder: false
                },
            },
            xAxes: {
                stacked: true,
                ticks: {
                    fontSize: 11,
                    fontColor: "rgba(171, 167, 167, 0.9)",
                },
                gridLines: {
                    display: true,
                    color: 'rgba(171, 167, 167, 0.2)',
                    drawBorder: false
                },
            }
        }

    },
};