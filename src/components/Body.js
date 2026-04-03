import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/mockData";
import { useEffect, useState } from "react";


const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState(restaurantData); // Hooks should be called inside the component function

    useEffect(() => {
        console.log('effect called after rendering');
    },[]);

    console.log('body jsx renders');
    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button className="res-btn" onClick={
                    () => {
                        const filteredData = restaurantData.filter(res => res.info.avgRating > 4.2);
                        setlistOfRestaurants(filteredData);

                    }
                }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(restaurant =>  <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
               
                
                

            </div>

        </div>
    )
}
export default Body;