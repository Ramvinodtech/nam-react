import  CDN_URL from "../utils/constants";

//Inline styles in React 
const styleCard = {
    backgroundColor : 'red'
}
const styleName = {
    fontSize : '14px'
}

const RestaurantCard = (props) => {
    // console.log(props)
    const info = props?.resData?.info;
    const {name,cuisines,avgRating,sla,cloudinaryImageId} = info;
    // console.log(props);
    return (
        <div className="res-card" >
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} ></img>
            <h3 style={styleName}>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard;