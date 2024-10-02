import {Container, Row, Col} from "react-bootstrap";
import DashboardChart from "../components/DashboardChart.tsx";
import  { useState } from 'react';
import React from 'react';
import {RightOutlined} from "@ant-design/icons";
/*import DataTable from "../components/DataTable.tsx";*/
/*
import MyChartComponent from "../components/MyChartComponent.tsx";
*/

interface DashboardProps {
    darkTheme: boolean; // Add this prop
    collapsed: boolean; // Add this prop
}

/*function Dashboard({ darkTheme,collapsed }: DashboardProps) {*/
const Dashboard: React.FC<DashboardProps> = ({ darkTheme, collapsed }) => {


    const [chartDataItems, /*setChartDataItems*/] = useState({
        series: [80],  // Initial series data
        colors: ['rgba(0,208,255,0.63)'],  // Initial color
    });
    const [chartDataCustomer, /*setChartDataCustomer*/] = useState({
        series: [20],  // Initial series data
        colors: ['rgba(85,255,0,0.63)'],  // Initial color
    });
    const [chartDataOrders, /*setChartDataCustomer*/] = useState({
        series: [50],  // Initial series data
        colors: ['rgba(255,0,166,0.63)'],  // Initial color
    });
    const [chartDataCompleteOrders, /*setChartDataCustomer*/] = useState({
        series: [40],  // Initial series data
        colors: ['rgba(0,255,157,0.63)'],  // Initial color
    });

    // Example of updating the chart data dynamically
    /*const updateChartDataCustomer = () => {
        setChartDataCustomer({
            series: [50],  // New series data
            colors: ['#FF0000'],  // New color
        });
    };
    const updateChartDataItem = () => {
        setChartDataItems({
            series: [50],  // New series data
            colors: ['#FF0000'],  // New color
        });
    };*/

    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    width:  collapsed? 'calc(100% - 150px)':'calc(100% - 320px)',
                    maxWidth: '100%',
                    background: darkTheme ? '#181a1e' : 'white',
                    borderRadius: '10px',
                    top: '90px',
                    left: collapsed? '110px':'290px',
                    right: '20px', // Add right to ensure proper spacing on smaller screens
                    boxShadow: '0 0 28px rgba(0, 0, 0, .08)',
                    transition: 'all 0.3s ease', // Adds a smooth transition when resizing
                }}
            >
                <div style={{margin: '20px', width: '100%'}}>
                    <h4 style={{fontWeight: 'bold', color: darkTheme ? '#989595' : 'black', textAlign: 'start'}}>Dashboard</h4>
                    <h6 style={{textAlign: 'start',color: darkTheme ? '#989595' : 'black'}}>
                        Home <RightOutlined /> <span style={{color: darkTheme ? '#00a0dd' : '#00a0dd'}}>Dashboard</span>
                    </h6>
                </div>
            </div>

            <Container style={{
                position: 'absolute',
                width:  collapsed? 'calc(100% - 150px)':'calc(100% - 320px)',
                maxWidth: '100%',
                top: '210px',
                left: collapsed? '110px':'290px',
                padding: '0px',
            }}>
                <Row className="g-5">
                    <Col sm={12} md={6} lg={3}>
                        <div
                            style={{
                                boxShadow: '0 0 28px rgba(0, 0, 0, .08)',
                                background: darkTheme ? '#181a1e' : 'white',
                                padding: '20px',
                                borderRadius: '10px',
                                width: '100%',
                                maxWidth: '100%', // Adjusts with screen size
                                height: 'auto', // Ensures height adjusts to content
                            }}
                        >
                            <h4 style={{color:darkTheme ? '#989595' : 'black',}}> Stock items </h4>
                            <div>
                                <DashboardChart series={chartDataItems.series } darkTheme={darkTheme}  />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div
                            style={{
                                boxShadow: '0 0 28px rgba(0, 0, 0, .08)',
                                background: darkTheme ? '#181a1e' : 'white',
                                padding: '20px',
                                borderRadius: '10px',
                                width: '100%',
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        >
                            <h4 style={{color:darkTheme ? '#989595' : 'black',}}>Customer Base</h4>
                            <div>
                                <DashboardChart series={chartDataCustomer.series} darkTheme={darkTheme} />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div
                            style={{
                                boxShadow: '0 0 28px rgba(0, 0, 0, .08)',
                                background: darkTheme ? '#181a1e' : 'white',
                                padding: '20px',
                                borderRadius: '10px',
                                width: '100%',
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        >
                            <h4 style={{color:darkTheme ? '#989595' : 'black',}}>New Orders</h4>
                            <div>
                                <DashboardChart series={chartDataOrders.series} darkTheme={darkTheme}   />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div
                            style={{
                                boxShadow: '0 0 28px rgba(0, 0, 0, .08)',
                                background: darkTheme ? '#181a1e' : 'white',
                                padding: '20px',
                                borderRadius: '10px',
                                width: '100%',
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        >
                            <h4 style={{color:darkTheme ? '#989595' : 'black',}}>Complete orders</h4>
                            <div>
                                <DashboardChart series={chartDataCompleteOrders.series} darkTheme={darkTheme} />
                            </div>
                        </div>
                    </Col>
                    {/*<Col sm={12} md={6} lg={3}>
                        <div style={{
                            position: 'absolute',
                            width: 'calc(100% - 320px)', // Dynamically adjusts to screen size
                            maxWidth: '100%',
                            background: 'white',
                            borderRadius: '10px',
                            left: '0',
                            right: '20px', // Add right to ensure proper spacing on smaller screens
                            boxShadow: '0 0 28px rgba(0, 0, 0, .08)',
                            transition: 'all 0.3s ease', // Adds a smooth transition when resizing
                        }}>
                            <MyChartComponent/>
                        </div>
                    </Col>*/}
                </Row>

                <br/>
                <br/>




            </Container>

        </div>

    )
        ;
}

export default Dashboard
