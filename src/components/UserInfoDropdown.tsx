import React from 'react';
import {Dropdown} from 'react-bootstrap';
import contactImg from '../assets/photo1.jpg';
import { CiUser ,CiSettings ,CiShop   } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";



const UserInfoDropdown: React.FC = () => {
    return (
        <div className="user-info-dropdown" style={{marginRight: '10px'}}>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" as="a" href="#" className="dropdown-toggle">
          <span className="user-icon">
            <img src={contactImg} alt="User" style={{width: '54px', height: '54px', borderRadius: '25px'}}/>
          </span>
                    <span className="user-name" style={{
                        fontWeight: 500,
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        marginLeft: '15px',
                        color: '#131e22',
                        fontFamily: "'Inter', sans-serif"
                    }}>Ross C. Lopez</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-right dropdown-menu-icon-list" style={{width: '180px'}}>
                    <Dropdown.Item href="profile.html">
                        <CiUser  className="me-3" size={25} /> Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="profile.html">
                        <CiSettings className="me-3" size={25}/> Settings
                    </Dropdown.Item>
                    <Dropdown.Item href="billingPage.html">
                        <CiShop  className="me-3" size={25}/> Billing
                    </Dropdown.Item>
                    <Dropdown.Item href="index.html">
                        <IoLogOutOutline  className="me-3" size={25}/> Log Out
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
export default UserInfoDropdown;
