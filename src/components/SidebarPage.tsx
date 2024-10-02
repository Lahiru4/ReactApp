import { Menu } from 'antd';
import { HomeOutlined, StockOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { CiCircleList } from "react-icons/ci";


interface SidebarPageProps {
    darkTheme: boolean;
}

function SidebarPage({ darkTheme }: SidebarPageProps) {

    const iconStyle = { fontSize: '18px' };

    const menuItems = [
        {
            key: 'home',
            icon: <HomeOutlined style={iconStyle} />,
            label: <Link to="/" style={iconStyle}>Home</Link>,
        },
        {
            key: 'items',
            icon: <StockOutlined style={iconStyle} />,
            label: 'Items',
            children: [
                {
                    key: 'items-list',
                    icon: <CiCircleList style={iconStyle} />,
                    label: <Link to="/items" style={iconStyle}>Items</Link>,
                },
                {
                    key: 'add-item',
                    icon: <PlusOutlined style={iconStyle} />,
                    label: <Link to="/addnewitem" style={iconStyle}>Add New Item</Link>,
                },
            ],
        },
        {
            key: 'customer',
            icon: <UserOutlined style={iconStyle} />,
            label: 'Customer',
            children: [
                {
                    key: 'customer-list',
                    icon: <CiCircleList style={iconStyle} />,
                    label: <Link to="/" style={iconStyle}>Customer</Link>,
                },
                {
                    key: 'add-customer',
                    icon: <PlusOutlined style={iconStyle} />,
                    label: <Link to="/" style={iconStyle}>Add New Customer</Link>,
                },
            ],
        },
    ];

    return (
        <Menu
            style={{background: darkTheme ? '#181a1e' : 'white',borderInlineEndColor: darkTheme ? '#181a1e' : 'white'}}
            mode="inline"
            className="menu-bar"
            theme={darkTheme ? 'dark' : 'light'}
            items={menuItems}  // Using 'items' prop instead of JSX
        />
    );
}

export default SidebarPage;
