import React from 'react';
import Chart from 'react-apexcharts';

const MyChartComponent: React.FC = () => {
    const chartOptions = {
        chart: {
            type: 'line' as const,
        },
        series: [{
            name: 'Centre Sales',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 35, 50, 49, 60, 70, 91, 125],
        },{
            name: 'Old Month Sales',
            data: [20, 41, 55, 42, 88, 66, 20, 41, 55, 42, 88, 66,15 ,  42, 88, 66,156,6,15 , 41, 55, 42, 88, 66, 20, 41, 55, 42, 88, 66,15 ],
        },
        ],
    };

    return (
        <div>
            <Chart options={chartOptions} series={chartOptions.series} type="line" height={500} width={1500}/>
        </div>
    );
};

export default MyChartComponent;
