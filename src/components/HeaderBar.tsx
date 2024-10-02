interface HeaderProps {
    darkTheme: boolean;
    collapsed:boolean;
}
const HeaderBar: React.FC<HeaderProps> = ({darkTheme,collapsed}) => {
    return(
      <div style={{backgroundColor:darkTheme? '#181a1e':'white',width:collapsed? 'calc(100% - 80px)':'calc(100% - 250px)'}} className='header'>

      </div>
    );
}
export default HeaderBar;
