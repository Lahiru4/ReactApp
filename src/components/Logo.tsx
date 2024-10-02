import logo from "../assets/logo.png";
import React from "react";
interface LogoProps {
    collapsed: boolean;
    darkTheme: boolean;
}

const Logo:React.FC<LogoProps>=({darkTheme,collapsed})=> {
    return (
        <div className='logo'>
            <div className='logo-icon'>
                <img src={logo} alt="User" style={{width: '54px', height: '54px', borderRadius: '25px'}}/>
            </div>
            <span className='logo-text' style={{display:collapsed? 'none':'block',color:darkTheme? "#989595":"black"}}>
                Linex
            </span>
        </div>
    );
}

export default Logo;
