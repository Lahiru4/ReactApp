/*
import React from 'react';
import Chart from 'react-apexcharts';

interface DashboardChartProps {
    series: number[]; // Array of numbers for the chart's data
    colors: string[]; // Array of colors for the chart
}

const DashboardChart: React.FC<DashboardChartProps> = ({ series, colors }) => {
    const chartOptions = {
        chart: {
            type: 'radialBar' as const,
            offsetY: 0,
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '65%', // Adjust the hollow size for better centering
                },
                track: {
                    strokeWidth: '100%',
                },
                dataLabels: {
                    name: {
                        show: false, // Hide the label
                    },
                    value: {
                        fontSize: '22px',
                        color: '#333',
                        offsetY: 6, // Vertically center the value
                        formatter: function (val: number) {
                            return val.toString(); // Return value as number
                        },
                    },
                },
            },
        },
        colors: colors, // Accept colors from props
        series: series,  // Accept series (data) from props
    };

    return (
        <div className="d-flex flex-wrap align-items-center">
            <div className="progress-data" style={{ position: 'relative' }}>
                <div style={{ minHeight: '102.7px' }}>
                    <Chart options={chartOptions} series={series} type="radialBar" height="100%" />
                </div>
            </div>
        </div>
    );
};

export default DashboardChart;
*/
import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts'; // Ensure this is imported for type checking

interface DashboardChartProps {
    series: number[];
    darkTheme: boolean;
}
const DashboardChart: React.FC<DashboardChartProps> = ({ series,darkTheme }) => {
    // Explicitly set the type for ApexOptions
    const options: ApexOptions = {
        chart: {
            height: 350,
            type: 'radialBar', // Set chart type as 'radialBar'
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: '65%',
                    background: darkTheme ? '#181a1e' : 'white',
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24,
                    },
                },
                track: {
                    background: '#fff',
                    strokeWidth: '67%',
                    dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35,
                    },
                },
                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -10,
                        color: '#888',
                        fontSize: '17px',
                        show: false
                    },
                    value: {
                        // Ensure the formatter returns a string
                        formatter: (val: number): string => {
                            return val.toString(); // Convert number to string
                        },
                        color:darkTheme ? '#989595' : 'black',
                        fontSize: '36px',
                        show: true,
                    },
                },
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#00a0dd'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
            },
        },
        stroke: {
            lineCap: 'round',
        },
        labels: ['Percent'],
    };

    return (
        <div id="chart">
            <Chart options={options} series={series} type="radialBar" height={250} />
        </div>
    );
};

export default DashboardChart;

