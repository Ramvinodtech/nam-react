import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";


const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]); // Hooks should be called inside the component function

    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        // console.log('effect called after rendering');
        fetchData();
    },[]);
    const [restaurants,setRestaurantData] = useState([]);
    const fetchData = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await response.json();
        setRestaurantData( jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setlistOfRestaurants( jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }   

    // console.log('body jsx renders');
    if(listOfRestaurants.length === 0) {
        return (
            // <div>Loading...</div>
            <Shimmer></Shimmer>
        )
    }
    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <div className="search">
                    <input className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
                    <button onClick={() => {
                        console.log(searchText);
                        const filteredRestaurants = restaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                        setlistOfRestaurants(filteredRestaurants);
                    }}>Search</button>
                </div>
                <button className="res-btn" onClick={
                    () => {
                        const filteredData = restaurantData.filter(res => res.info.avgRating > 4.2);
                        setlistOfRestaurants(filteredData);

                    }
                }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(restaurant =>  <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} ><RestaurantCard resData={restaurant}/></Link>)
                }
               
                
                

            </div>

        </div>
    )
}
export default Body;