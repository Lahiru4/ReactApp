import { Button } from 'antd';
import { WiDaySunny, WiNightClear } from 'react-icons/wi';

interface ThemeButtonProps {
    darkTheme: boolean;
    setDarkTheme: (value: boolean) => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className='toggle-theme-btn'>
            <Button onClick={() => setDarkTheme(!darkTheme)}>
                {darkTheme ? <WiDaySunny size={24} /> : <WiNightClear size={24} />}
            </Button>
        </div>
    );
}

export default ThemeButton;
