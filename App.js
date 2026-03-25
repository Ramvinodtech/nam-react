import React from "react";
import ReactDOM from 'react-dom/client';

/**
 * Header 
 *  -Logo
 *  -Nav Items
 * Body 
 *  Search
 *  Restaurant Container
 *      - Restaurant card
 *          -Image
 *          -Restaurant name
 *          -Cuisine
 *          -Delivery time
 *          -Rating
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *      
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/burger-delivery-logo-vector-icon_1015832-3950.jpg?semt=ais_rp_progressive&w=740&q=80"></img>
            </div>
            <div className="nav-items-container">
                <ul className="nav-items">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About Us</li>
                    <li className="nav-item">Contact Us</li>
                    <li className="nav-item">Cart</li>
                </ul>
            </div>
        </div>
        
    )
}
//Inline styles in React 
const styleCard = {
    backgroundColor : 'red'
}
const styleName = {
    fontSize : '14px'
}

const RestaurantCard = (props) => {
    console.log(props);
    return (
        <div className="res-card" >
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/c1c0b0f4-4d4c-43d9-b82d-d79194e7add0_37103.JPG" ></img>
            <h3 style={styleName}>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.3 stars</h4>
            <h4>30 mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Mehfil" cuisine="Biriyani, South Indian, Asian"/>
                <RestaurantCard resName="KFC" cuisine="Burger, Fried Chicken, Wraps"/>
                

            </div>

        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);