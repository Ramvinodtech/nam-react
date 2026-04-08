import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/mockData";
import { useEffect, useState } from "react";


const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState(restaurantData); // Hooks should be called inside the component function

    useEffect(() => {
        // console.log('effect called after rendering');
        fetchData();
    },[]);

    const fetchData = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await response.json();
        console.log(jsonData)
        setlistOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }   

    // console.log('body jsx renders');
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