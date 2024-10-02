import {cloneElement, ReactNode} from 'react';
import SidebarPage from '../components/SidebarPage';
import {Layout, Button} from 'antd';
import Logo from '../components/Logo';
import {useState} from 'react';
import ThemeButton from "../components/ThemeButton.tsx";
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import {theme} from 'antd';
import HeaderBar from '../components/HeaderBar';


const {Header, Sider, Content} = Layout;

interface LayoutProps {
    children: ReactNode;
}

function LayoutComponent({children}: LayoutProps) {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [collapsed, setCollaped] = useState<boolean>(false);

    const Theme = () => {
        setDarkTheme(!darkTheme);
    }
    const {
        token: {colorBgContainer},
    } = theme.useToken();


    return (
        <Layout style={{background: darkTheme ? '#25252c' : '#ecf0f4'}}>
            <Sider
                width={250}
                collapsed={collapsed}
                style={{background: darkTheme ? '#181a1e' : 'white'}}
            >
                <Logo collapsed={collapsed} darkTheme={darkTheme}/>
                <SidebarPage darkTheme={darkTheme}/>
                <ThemeButton darkTheme={darkTheme}
                             setDarkTheme={Theme}/>
            </Sider>

            <Header style={{
                padding: 0,
                background: colorBgContainer,
                /*backgroundColor: darkTheme ? '#181a1e' : 'white'*/
            }}>

                <HeaderBar darkTheme={darkTheme} collapsed={collapsed}/>
                <Button
                    className='collapsed-button'
                    type='text'
                    onClick={() => setCollaped(!collapsed)}
                    icon={collapsed ? <MenuUnfoldOutlined style={{fontSize: '20px'}}/> :
                        <MenuFoldOutlined style={{fontSize: '20px'}}/>}
                    style={{marginLeft: '0', marginTop: '0',color: darkTheme ? 'white' : 'black'}}
                />

            </Header>


            <Content>
                {cloneElement(children as React.ReactElement, {darkTheme, collapsed})}
            </Content>
        </Layout>
    );
}

export default LayoutComponent;
