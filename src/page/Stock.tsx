/*import {Container} from "react-bootstrap";*/
import React from 'react';
import {RightOutlined} from "@ant-design/icons";
import DataTable from "../components/DataTable.tsx";

/*
import MyChartComponent from "../components/MyChartComponent.tsx";
*/

interface DashboardProps {
    darkTheme: boolean; // Add this prop
    collapsed: boolean; // Add this prop
}

/*function Dashboard({ darkTheme,collapsed }: DashboardProps) {*/
const Stock: React.FC<DashboardProps> = ({darkTheme, collapsed}) => {

    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    width: collapsed ? 'calc(100% - 150px)' : 'calc(100% - 320px)',
                    maxWidth: '100%',
                    background: darkTheme ? '#181a1e' : 'white',
                    borderRadius: '10px',
                    top: '90px',
                    left: collapsed ? '110px' : '290px',
                    right: '20px', // Add right to ensure proper spacing on smaller screens
                    boxShadow: '0 0 28px rgba(0, 0, 0, .08)',
                    transition: 'all 0.3s ease', // Adds a smooth transition when resizing
                }}
            >
                <div style={{margin: '20px', width: '100%'}}>
                    <h4 style={{
                        fontWeight: 'bold',
                        color: darkTheme ? '#989595' : 'black',
                        textAlign: 'start'
                    }}>Items</h4>
                    <h6 style={{textAlign: 'start', color: darkTheme ? '#989595' : 'black'}}>
                        Home <RightOutlined/> <span style={{color: darkTheme ? '#00a0dd' : '#00a0dd'}}>Items</span>
                    </h6>
                </div>
            </div>

            <div
                style={{
                    position: 'absolute',
                    width: collapsed ? 'calc(100% - 150px)' : 'calc(100% - 320px)',
                    maxWidth: '100%',
                    background: darkTheme ? '#181a1e' : 'white',
                    borderRadius: '10px',
                    top: '210px',
                    left: collapsed ? '110px' : '290px',
                    right: '20px', // Add right to ensure proper spacing on smaller screens
                    boxShadow: '0 0 28px rgba(0, 0, 0, .08)',
                    transition: 'all 0.3s ease', // Adds a smooth transition when resizing
                }}
            >
                <div style={{padding: '10px', width: '100%'}}>
                    <DataTable darkTheme={darkTheme}/>
                </div>
            </div>


        </div>

    )
        ;
}

export default Stock
