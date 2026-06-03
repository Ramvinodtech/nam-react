import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [logBtnName, setLogBtnName] = useState('Login');

    useEffect(() => {
        console.log('useEffect gets called')
    },[logBtnName])

    console.log('Header rendered')
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items-container">
                <ul className="nav-items">
                    <li>Online Status : { onlineStatus === true ? "✅" : "🔴" }</li>
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About Us</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
                    <li className="nav-item">Cart</li>
                    <li><button onClick={() => {
                        logBtnName === 'Login' ? setLogBtnName('Logout') : setLogBtnName('Login');
                    }} className="btn-login-logout">{logBtnName}</button></li>
                </ul>
            </div>
        </div>
        
    )
}
export default Header;