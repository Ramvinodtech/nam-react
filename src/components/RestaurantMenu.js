import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { restaurantMenuData } from "../utils/menMockData";
import { useParams } from "react-router";
const RestaurantMenu = () => {
    const [resMenu,setResMenu] = useState(null);
    const {resId} = useParams();
    useEffect(() => {
        fetchMenuData();
    },[]);


    const fetchMenuData = async () => {
        console.log(resId);
        // const resp = await fetch(`https://corsproxy.io/?${encodeURIComponent(RES_MENU_URL)}`);
        await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=1312293`);
        // console.log(resp)
        // console.log(resp.status);
        // const jsonData = await resp.json();
        const jsonData = restaurantMenuData;
        setResMenu(jsonData?.data);
    }

    if(resMenu === null) return <Shimmer/>;

    const {name, cuisines,costForTwoMessage} = resMenu.cards[2].card.card.info;
    const { itemCards} = resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    console.log(itemCards);


    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h4>{costForTwoMessage}</h4>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => {
                   return <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>
                })}
               
            </ul>
        </div>
    )
}
export default RestaurantMenu;