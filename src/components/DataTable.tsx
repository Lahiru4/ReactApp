import MUIDataTable from "mui-datatables";
import {createTheme, ThemeProvider} from "@mui/material";
import React from "react";
import logo from "../assets/logo.png"; // Use Box from MUI


interface DataTableProps {
    darkTheme: boolean; // Add this prop

}
const DataTable: React.FC<DataTableProps> = ({ darkTheme }) => {
    const columns = ["", "Company", "City", "State"];
    const data = [
        [<img src={logo} alt="User" style={{width: '54px', height: '54px', borderRadius: '25px'}}/>, "Test Corp", "Yonkers", "NY"],
        [<img src={logo} alt="User" style={{width: '54px', height: '54px', borderRadius: '25px'}}/>, "Test Corp", "Hartford", "CT"],
        [<img src={logo} alt="User" style={{width: '54px', height: '54px', borderRadius: '25px'}}/>, "Test Corp", "Tampa", "FL"],
        [<img src={logo} alt="User" style={{width: '54px', height: '54px', borderRadius: '25px'}}/>, "Test Corp", "Dallas", "TX"],
        [<img src={logo} alt="User" style={{width: '54px', height: '54px', borderRadius: '25px'}}/>, "Test Corp", "Dallas", "TX"],
        [<img src={logo} alt="User" style={{width: '54px', height: '54px', borderRadius: '25px'}}/>, "Test Corp", "Dallas", "TX"],
    ];

    const getMuiTheme = () =>
        createTheme({
            typography: {
                fontSize: 16,
                fontFamily: 'Roboto',
                allVariants: {
                    color: darkTheme ? '#989595' : '#000000', // Apply font color for all text
                },

            },
            palette: {
                background: {
                    paper: darkTheme ? '#181a1e' : '#ffffff',
                    default: '#f10000',

                },
                mode: darkTheme ? "dark" : "light",

            },
        });

    return (
        <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
                title={"Items List"}
                data={data}
                columns={columns}
                options={{
                    selectableRows: "none",
                    elevation: 0,
                }}
            />
        </ThemeProvider>


    );
}

export default DataTable;
